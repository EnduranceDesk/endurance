<?php

namespace App\Models;

use TitasGailius\Terminal\Terminal;


class LinuxUser 
{
    public static function validate(string $username, string $password)
    {
        
        $userInfo = posix_getpwuid(posix_getuid());
        var_dump($userInfo);
        $user = $userInfo['name'];
        $groupInfo = posix_getgrgid(posix_getgid());
        var_dump($groupInfo);
        $group = $groupInfo = $groupInfo['name'];

        var_dump($user . ":" .  $group);


         $command =  "mv web.config web.config1" ;
         // $command =  "mv web.config web.config1" ;
        echo($command);
        // $exec = `{$command}`;
        

        // $hello = exec($command);
        $last_line = exec($command, $output, $status);
        var_dump($last_line);
        var_dump($output);
        var_dump($status);
        die();

        $shadow =  preg_split("/[$:]/",`cat /etc/shadow | grep "^$username\:"`);
        // var_dump($shadow);
        // use mkpasswd command to generate shadow line passing $pass and $shadow[3] (salt)
        // split the result into component parts
        // $makepassword = preg_split("/[$:]/",trim(`mkpasswd -m sha-512 $pass $shadow[3]`));
        $makepassword = preg_split("/[$:]/",trim(`openssl passwd -6 -salt $shadow[3] $password`));
        // var_dump($makepassword);
        // compare the shadow file hashed password with generated hashed password and return
        // return ($shadow[4] == $makepassword[3]);
        if($shadow[4] == $makepassword[3])
        {
            return true;
        } else {
            return false;
        }
    }

    public static function addUser($name, $username, $password)
    {
        // $username = "testuser";
        // $password = "qwe12345";
   
        $command =  "useradd  -U -m {$username}" ;
        echo($command);
        // $exec = `{$command}`;
        

        // $hello = exec($command);
        $last_line = exec($command, $output, $status);
        var_dump($last_line);
        var_dump($output);
        var_dump($status);
    
    }

    public static function removeUser($username)
    {
        $command = "userdel -r {$username}";
    }
}
