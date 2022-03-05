<?php
namespace App\Helpers;
use Zip;

class Misc {
    public static function  makeZipWithFiles(string $zipPathAndName, array $filesAndPaths) {
        $zip = Zip::create($zipPathAndName);
        $zip->add($filesAndPaths);
        $zip->close();
    }
}
