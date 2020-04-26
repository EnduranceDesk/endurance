<?php

namespace App\Console\Commands\Domains;

use Badcow\DNS\AlignedBuilder;
use Badcow\DNS\Classes;
use Badcow\DNS\Rdata\Factory;
use Badcow\DNS\ResourceRecord;
use Badcow\DNS\Zone;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use TitasGailius\Terminal\Terminal;



class AddMainDomain extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'domain:add {domain_without_www} {base_dir}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Adding a main domain.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (isset(explode("=", $this->argument('domain_without_www'))[1])) {
            $domain_without_www = explode("=", $this->argument('domain_without_www'))[1];
        } else {
            $domain_without_www = $this->argument('domain_without_www');
        }

        if (isset(explode("=", $this->argument('base_dir'))[1])) {
            $base_dir = explode("=", $this->argument('base_dir'))[1];
        } else {
            $base_dir = $this->argument('base_dir');
        }

        $ip_address = "206.189.135.195";

        $appended_domain_without_www =  $domain_without_www .  ".";

        $zone = new Zone($appended_domain_without_www);
        $zone->setDefaultTtl(60);
        
        $soa = new ResourceRecord;
        $soa->setName('@');
        $soa->setClass(Classes::INTERNET);
        $soa->setRdata(Factory::Soa(
            $appended_domain_without_www,
            'post.'.$appended_domain_without_www,
            '2014110501',
            3600,
            14400,
            604800,
            3600
        ));

        $ns1 = new ResourceRecord;
        $ns1->setName('@');
        $ns1->setClass(Classes::INTERNET);
        $ns1->setRdata(Factory::Ns('ns1.' .  $appended_domain_without_www));

        $ns2 = new ResourceRecord;
        $ns2->setName('@');
        $ns2->setClass(Classes::INTERNET);
        $ns2->setRdata(Factory::Ns('ns2.' .  $appended_domain_without_www));

        $a1 = new ResourceRecord;
        $a1->setName('@');
        $a1->setRdata(Factory::A($ip_address));
        $a1->setComment('IP of the server');

        $a2 = new ResourceRecord;
        $a2->setName('hello');
        $a2->setRdata(Factory::A($ip_address));
        $a2->setComment('IP of the server');

        $a3 = new ResourceRecord;
        $a3->setName('mail');
        $a3->setRdata(Factory::A($ip_address));
        $a3->setComment('IP of the server');

        $a4 = new ResourceRecord;
        $a4->setName('ns1');
        $a4->setRdata(Factory::A($ip_address));
        $a4->setComment('IP of the server');

        $a5 = new ResourceRecord;
        $a5->setName('ns2');
        $a5->setRdata(Factory::A($ip_address));
        $a5->setComment('IP of the server');

        $ftp_cname = new ResourceRecord;
        $ftp_cname->setName('ftp');
        $ftp_cname->setRdata(Factory::CNAME($appended_domain_without_www));
        $ftp_cname->setComment('IP of the server');

        $www_cname = new ResourceRecord;
        $www_cname->setName('www');
        $www_cname->setRdata(Factory::CNAME($appended_domain_without_www));
        $www_cname->setComment('IP of the server');

        $txt_identity_record = new ResourceRecord;
        $txt_identity_record->setRdata(Factory::TXT('Hello World Speaking from Endurance send some love to MARK-II'));
        $txt_identity_record->setComment('IP of the server');

        $txt_spf_record = new ResourceRecord;
        $txt_spf_record->setRdata(Factory::TXT("v=spf1 +a +mx +ip4:{$ip_address} ~all"));

        $mx1 = new ResourceRecord;
        $mx1->setName('@');
        $mx1->setRdata(Factory::Mx(10, 'mail.' . $appended_domain_without_www));

        $zone->addResourceRecord($soa);
        $zone->addResourceRecord($ns1);
        $zone->addResourceRecord($ns2);
        $zone->addResourceRecord($a1);
        $zone->addResourceRecord($a2);
        $zone->addResourceRecord($a3);
        $zone->addResourceRecord($a4);
        $zone->addResourceRecord($a5);
        $zone->addResourceRecord($ftp_cname);
        $zone->addResourceRecord($www_cname);
        $zone->addResourceRecord($mx1);
        $zone->addResourceRecord($txt_identity_record);
        $zone->addResourceRecord($txt_spf_record);

        $text =  AlignedBuilder::build($zone);
     
        $path = config("endurance.path");
        $zonepath = config("endurance.zonepath");
        $domain_zone_path = $zonepath . "/" . $domain_without_www;
        try {
            if (file_exists($domain_zone_path)) {
                $this->removeDirectory($domain_zone_path);
            }
        } catch (\Exception $e) {
            $this->error($e->getMessage());
            return false;
        }
        $this->line("Building this directory: " .  $domain_zone_path);
        mkdir($domain_zone_path);
        $check = file_put_contents($domain_zone_path . "/zone.txt", $text);
        $this->info("Zone file successfully created. Status: " .  $check);

        $zone_info =  'zone "' . $domain_without_www . '" IN {' . PHP_EOL;
        $zone_info .= "    type master;". PHP_EOL;
        $zone_info .= '    file "' . $domain_zone_path . "/zone.txt" . '";'. PHP_EOL;
        $zone_info .= "    allow-transfer { trusted-servers; };". PHP_EOL;
        $zone_info .= "};". PHP_EOL;
        
        $check = file_put_contents($domain_zone_path . "/info.conf", $zone_info);
        $this->info("Zone info conf successfully created. Status: " .  $check);
        Artisan::call("dns:zones:rebuild");
        $response = Terminal::run('systemctl reload named');
        if ($response->ok()) {
            $this->info("DNS reloaded for this new domain.");
        } else {
            $this->error("DNS cannot be reloaded for this new domain.");
        }



    }

    public function removeDirectory($path) {
        $files = glob($path . '/*');
        foreach ($files as $file) {
            is_dir($file) ? removeDirectory($file) : unlink($file);
        }
        rmdir($path);
        return;
    }
}
