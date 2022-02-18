<?php

namespace App\Classes\Endeavour;

/**
 * Enveadour Mission Control Wrapper
 */
class Endeavour
{
    protected $host;
    protected $token;
    function __construct($token = null)
    {
        $this->token = $token;
        $this->host = "http://" . file_get_contents("/home/endurance/endeavour.ip") . ":1021";
    }
    public function login($username, $password) {
        $response = $this->post($this->host . "/raven/login", ['username'=>$username, 'password'=> $password]);
        return $response;
    }
    protected function setToken($token)
    {
        $this->token = $token;
    }
    public function getRovers()
    {
        $response = $this->post($this->host . "/raven/rover/list");
        return $response;
    }
    public function getPHPVersions()
    {
        $response = $this->post($this->host . "/raven/php/versions", []);
        return $response;
    }
    public function changePHPVersion($domain, $version)
    {
        $response = $this->post($this->host . "/raven/php/version/domain/update", ["domain" => $domain, "php_version" => $version]);
        return $response;
    }
    public function getPreparationData()
    {
        $response = $this->post($this->host . "/raven/rover/prepare", []);
        return $response;
    }
    public function buildRover($username, $domain, $password, $php_version)
    {
        $response = $this->post($this->host . "/raven/rover/build", ['username'=>$username, 'password'=> $password, 'domain' => $domain, 'php_version' => $php_version]);
        return $response;
    }
    public function destroyRover($username)
    {
        $response = $this->post($this->host . "/raven/rover/destroy", ['username'=>$username]);
        return $response;
    }
    public function setServerIP($ip)
    {
        $response = $this->post($this->host . "/raven/server/ip/set", ['ip'=>$ip]);
        return $response;
    }
    public function getServerIP()
    {
        $response = $this->post($this->host . "/raven/server/ip/get");
        return $response;
    }
    public function getFileContent($file_path)
    {
        $response = $this->post($this->host . "/raven/file/view", ['filepath'=>$file_path]);
        return $response;
    }
    public function changePassword($username, $password)
    {
        $response = $this->post($this->host . "/raven/change/password", ['username'=>$username, 'password'=> $password]);
        return $response;
    }
    protected function post($url, $parameters = [])
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS ,$parameters);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        if ($this->token) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Authorization: Bearer ' . $this->token,
            ));
        }
        $result = curl_exec($ch);
        // dd($result);
        curl_close($ch);
        if (!$this->isJSON($result)) {
            throw new \Exception("Non-JSON data received from Endeavour!");
            return null;
        }
        return json_decode($result);
    }
    protected function isJson($string) {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
     }

}
