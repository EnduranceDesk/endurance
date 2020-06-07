<?php

namespace App\Classes\LinuxUser;


/**
 *  Linux user authentication class
 */
class LinuxUser
{
    public static function validateUsername($username)
    {
        $shadow =  preg_split("/[$:]/",`cat /etc/shadow | grep "^$username\:"`);
        if ($shadow[0] == $username) {
            return true;
        }
        return false;
    }
    public static function validate($username, $password)
    {
        $password = escapeshellarg($password);
        $shadow =  preg_split("/[$:]/",`cat /etc/shadow | grep "^$username\:"`);
        $makepassword = preg_split("/[$:]/",trim(`openssl passwd -6 -salt $shadow[3] $password`));
        if($shadow[4] == $makepassword[3]) {
            return true;
        } 
        return false;
    }
    public static function currentUser()
    {
        $userInfo = posix_getpwuid(posix_getuid());
        $user = $userInfo['name'];
        $groupInfo = posix_getgrgid(posix_getgid());
        $group = $groupInfo = $groupInfo['name'];
        return ($user . ":" .  $group);
    }
    public static function add($username, $password)
    {
        $username = escapeshellarg($username);
        $password = escapeshellarg($password);
        if (LinuxUser::validateUsername($username)) {
            throw new \Exception("User already exist", 1);
            return false;
        }
        $script = '
#!/bin/bash
user=$1
passwd=$2
/usr/sbin/useradd $user -d /home/$user  -m  ;
echo $passwd | passwd $user --stdin;
chmod 711 /home/$user
';
        $check = file_put_contents('/adduser.sh', $script);
        chmod('/adduser.sh', 0700);
        $return =  shell_exec("sh /adduser.sh $username $password");
        unlink("/adduser.sh");
        return true;
    }
    public static function remove($username)
    {
        $username = escapeshellarg($username);
        if (!LinuxUser::validateUsername($username)) {
            throw new \Exception("No user to remove", 1);
            return false;
        }
        $script = '
#!/bin/bash
user=$1
/usr/sbin/userdel $user;
';
        $check = file_put_contents('/deluser.sh', $script);
        chmod('/deluser.sh', 0700);
        $return =  shell_exec("sh /deluser.sh $username ");
        unlink("/deluser.sh");
        if (LinuxUser::validateUsername($username)) {
            return false;
        }
        return true;
    }
}