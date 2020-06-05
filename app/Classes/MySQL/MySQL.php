<?php

namespace App\Classes\MySQL;

/**
 * MySQL
 */
class MySQL 
{
    private  $db = null;
    function __construct($host, $username, $password, $database)
    {
        $db = new \mysqli($host, $username, $password, $database);
        if ($db->connect_errno) die($db->connect_error);
        $this->db = $db;
        return true;
    }
    public function createUserSet($username, $password)
    {
        $db = $username . "_default";
        $check = $this->createDatabase($db);
        if (!$check) {
            return false;
        }
        $check = $this->createUser($username, $password);
        if (!$check) {
            $this->dropDatabase($db);
            return false;
        }
        $check = $this->linkDBToUser($db, $username);
        if (!$check) {
            $this->dropDatabase($db);
            $this->dropUser($username);
            return false;
        }
        return true;
    }
    public function removeUserSet($username, $password)
    {
        $db = $username . "_default";
        $check = $this->dropDatabase($db);
        $check = $this->dropUser($username);
        return $check;
    }
    public  function createDatabase ($name) {
        if (!$this->db) return false;
        return $this->db->query(" CREATE DATABASE `{$name}` ");
    }
    public  function dropDatabase ($name) {
        if (!$this->db) return false;
        return $this->db->query(" DROP DATABASE `{$name}` ");
    }
    public  function createUser($name, $password) {
        if (!$this->db) return false;
        $this->db->query(" CREATE USER '{$name}'@'%' IDENTIFIED WITH mysql_native_password BY '{$password}'; ");
        return $this->db->query(" ALTER USER '{$name}'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0; ");
    }
     public  function dropUser($username) {
        if (!$this->db) return false;
        return $this->db->query(" DROP USER '{$username}'; ");
    }
    public function linkDBToUser($db, $user)
    {
        if (!$this->db) return false;
        return $this->db->query(" GRANT ALL PRIVILEGES ON `{$db}`.* TO '$user'@'%'; ");
    }
    public  function query ($query) {
        if (!$this->db) return false;
        return $this->db->query($query);;
    }

}