<?php

namespace App\Http\Controllers\Rover;

use App\Classes\Endeavour\Endeavour;
use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class RoverController extends Controller
{
    public function getBuilder()
    {
        $server = Server::firstOrFail();
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
        return redirect()->back()->withSuccess("Operation successful.");            
    }
}
