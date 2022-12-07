<?php

namespace App\Helpers;
use Zip;

class Misc {
    public static function  makeZipWithFiles(string $zipPathAndName, array $filesAndPaths) {
        $zip = Zip::create($zipPathAndName);
        $zip->add($filesAndPaths);
        $zip->close();
    }
    public static function get_domain($host){
        $myhost = strtolower(trim($host));
        $count = substr_count($myhost, '.');
        if($count === 2){
          if(strlen(explode('.', $myhost)[1]) > 3) $myhost = explode('.', $myhost, 2)[1];
        } else if($count > 2){
          $myhost = Misc::get_domain(explode('.', $myhost, 2)[1]);
        }
        return $myhost;
    }
    public static function checkValidSSL($url) {
        // Send a curl to url with ssl verification
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        // Check if curl was successful
        if ($httpcode == 200) {
            return true;
        } else {
            return false;
        }
    }
}
