<?php

namespace App\Http\Controllers\Rover;

use App\Classes\Endeavour\Endeavour;
use App\Classes\Server\Server as EndeavourServer;
use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class RoverController extends Controller
{
    public function getList(Request $request)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $rovers = $endeavour->getRovers();
        return view("rover.list.index",['rovers' => $rovers->data]);

    }
    public function getBuilder(Request $request)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        if (!$endeavour->getServerIP()->success) {
            return redirect(route("server.config.ip"))->withError("Please register the server ip address with the Endurance first.");
        }
        $ip = $endeavour->getServerIP()->data->ip;
        $php_versions =$endeavour->getPreparationData()->data->php;

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
}
