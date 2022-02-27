<?php
namespace App\Helpers;
use Zip;

class Misc {
    public static function  makeZipWithFiles(string $zipPathAndName, array $filesAndPaths) {
        $zip = Zip::open($zipPathAndName);
        $zip->add($filesAndPaths);
        $zip->close();
    }
}
