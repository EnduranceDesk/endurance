<?php

namespace App\Http\Controllers\Rover;

use App\Classes\Endeavour\Endeavour;
use App\Classes\Server\Server as EndeavourServer;
use App\Http\Controllers\Controller;
use App\Models\Rover;
use App\Models\Server;
use Illuminate\Http\Request;

class RoverController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function getList(Request $request)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $rovers = $endeavour->getRovers();
        $phpVersions = $endeavour->getPHPVersions()->data->php;
        return view("rover.list.index",['rovers' => $rovers->data, "phpVersions" => $phpVersions]);

    }
    public function getBuilder(Request $request)
    {
        $rootToken = $request->session()->get('root');
        try {
            $endeavour = new Endeavour($rootToken);
            if (!$endeavour->getServerIP()->success) {
                return redirect(route("server.config.ip"))->withError("Please register the server ip address with the Endurance first.");
            }

            $ip = $endeavour->getServerIP()->data->ip;
            $php_versions =$endeavour->getPreparationData()->data->php;
        } catch (\Exception $e) {
            return redirect("home")->withError("Something went wrong. Please try again. ". $e->getMessage());
        }
        return view("rover.builder.home", ['ip' => $ip, 'php_versions' => $php_versions]);
    }
    public function postBuilder(Request $request)
    {
        $username = $request->input("username");
        $domain = $request->input("domain");
        $password = $request->input("password");
        $php_version = $request->input("php_version");

        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour->buildRover($username, $domain, $password, $php_version);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again.");
        }
        if ($response->success) {
            return redirect()->back()->withSuccess("Operation successful. " . $response->debug_msg);
        } else {
            return redirect()->back()->withSuccess("Operation failed. " . $response->debug_msg);
        }
    }
    public function postChangePHPVersion(Request $request)
    {
        $domain = $request->input("domain");
        $php_version = $request->input("php_version");

        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour->changePHPVersion($domain, $php_version);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again.");
        }
        if ($response->success) {
            return redirect()->back()->withSuccess("Operation successful. " . $response->debug_msg);
        } else {
            return redirect()->back()->withSuccess("Operation failed. " . $response->debug_msg);
        }
    }
    public function getDestroy(Request $request, string $username)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $response = $endeavour->destroyRover($username);
        if (isset($response->success) && $response->success) {
            return redirect(route("rover.list"))->withSuccess("Rover desctruction successful");
        }
        return redirect(route("rover.list"))->withError("Rover desctruction unsuccessful");

    }
    public function autoSSL(Request $request,$domain)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $sslResponse = $endeavour->autoSSL($domain);
        if (is_null($sslResponse)) {
            return redirect(route("home", ['domain' => $domain]))->withError("SSL not updated for domain: " . $domain );
        }
        if ($sslResponse->success) {
            return redirect(route("home", ['domain' => $domain]))->withSuccess("SSL updated for domain: " . $domain );
        }
        return redirect(route("home", ['domain' => $domain]))->withError("SSL not updated for domain: " . $domain );

    }
}
