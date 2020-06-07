<?php

namespace App\Classes\Apache;

/**
 * Apache Manager
 */
class Apache
{
    protected $apacheuser = "apache";
    protected $apachegroup = "apache";
    protected $othervhostsfiles = "/etc/endurance/configs/httpd/othervhosts.conf";
    protected $vhostdir = "/etc/endurance/configs/httpd/vhosts";
    protected $php72 = "/etc/opt/remi/php72/php-fpm.d";
    protected $sock = "/etc/endurance/configs/php/php72/";
    function addMainDomain($domain_without_www, $username)
    {
        chmod("/home/" . $username, 0711);
        $public_html = "/home/" . $username .  "/public_html";
        $indexFile = $public_html . DIRECTORY_SEPARATOR . "index.php";
        if (!file_exists($public_html)) {
            mkdir($public_html);
            chmod($public_html, 0750);
            file_put_contents($indexFile, "<?php phpinfo() ?>");
            chmod($indexFile, 0664);
            chown($public_html, $username);
            chgrp($public_html, "apache");
            chown($indexFile, $username);
            chgrp($indexFile, $username);
        }
        $virtualhost = view("templates.apache.NONSSL", ['domain_without_www'=> $domain_without_www, 'username' => $username])->render();
        $vhost_path = $this->vhostdir . DIRECTORY_SEPARATOR . "NONSSL_" . $domain_without_www . ".conf";
        if (file_exists($vhost_path)) {
            throw new \Exception("Domain already added to the server.", 1);
            return false;
        }
        file_put_contents($vhost_path, $virtualhost);

        $php72fpmconfig = view("templates.phpfpm.config", ['domain_without_www'=> $domain_without_www, 'username' => $username, 'apacheuser' => $this->apacheuser, 'apachegroup' => $this->apachegroup])->render();
        $phpfpm_path = $this->php72 . DIRECTORY_SEPARATOR . $domain_without_www . ".conf";
        if (file_exists($phpfpm_path)) {
            unlink($phpfpm_path);
        }
        
        file_put_contents($phpfpm_path, $php72fpmconfig);
        if (file_exists($phpfpm_path) & file_exists($vhost_path)) {
            $this->rebuildOtherVhosts();
            $this->reload();
            // $this->restartPHP72();
            // sleep(2);
            return true;
        }
        unlink($vhost_path);
        unlink($phpfpm_path);
        $this->reload();
        return false;
    }
    public function reload()
    {
        exec("systemctl reload httpd");
    }
    public function restartPHP72()
    {
        exec("systemctl restart php72-php-fpm");
    }
    public function rebuildOtherVhosts()
    {
        file_put_contents($this->othervhostsfiles,"IncludeOptional vhosts/*.conf");
    }
    
}