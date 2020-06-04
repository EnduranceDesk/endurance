<?php

namespace App\Classes\Server;

use App\Classes\DNS\DNS;
/**
 * Server
 */
class Server
{
    protected $path = "/etc/endurance/configs/server";
    public  function add($ip_address)
    {
        if (!file_exists($this->path)) {
            mkdir($this->path);
        }
        file_put_contents($this->path . DIRECTORY_SEPARATOR . "ip.txt", $ip_address);
        if (file_get_contents($this->path . DIRECTORY_SEPARATOR . "ip.txt") == $ip_address) {
            $dns = new DNS();
            $dns->addAsTrustedACL($ip_address);
            return true;
        }
        return false;
    }
    public function get()
    {
        if (!file_exists($this->path . DIRECTORY_SEPARATOR . "ip.txt")) {
            return false;
        }
        return file_get_contents($this->path . DIRECTORY_SEPARATOR . "ip.txt");
    }    
}