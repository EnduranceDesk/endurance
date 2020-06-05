<?php

namespace App\Http\Controllers\Rover;

use App\Classes\Endeavour\Endeavour;
use App\Classes\Server\Server as EndeavourServer;
use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class RoverController extends Controller
{
    public function getBuilder(Request $request)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $server = new EndeavourServer;
        if (!$server->get()) {
            return redirect(route("server.config.ip"))->withError("Please register the server ip address with the Endurance first.");
        }
        return view("rover.builder.home", ['server' => $server]);
    }
    public function postBuilder(Request $request)
    {
        $username = $request->input("username");
        $domain = $request->input("domain");
        $password = $request->input("password");

        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour->buildRover($username, $domain, $password);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again.");            
        }
        if ($response->success) {
            return redirect()->back()->withSuccess("Operation successful.");            
        } else {
            return redirect()->back()->withSuccess("Operation failed.");            
        }
    }
}
