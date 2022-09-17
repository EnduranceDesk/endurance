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
}
