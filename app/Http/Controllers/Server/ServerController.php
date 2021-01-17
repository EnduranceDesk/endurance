<?php

namespace App\Http\Controllers\Server;

use App\Classes\Endeavour\Endeavour;
use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function getIP(Request $request)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        if (!$endeavour->getServerIP()->success) {
            $ip = $_SERVER['SERVER_ADDR'];
        } else {
            $ip = $endeavour->getServerIP()->data->ip;
        }
        return view("server.ip.home", ['ip' => $ip]);
    }
    public function setIP(Request $request)
    {
        $ip = $request->input("ip");
        $name = $request->input("name");
        $server = Server::first();
        if ($server) {
            $server->ip = $ip;
            $server->name = $name;
            $server->ssl = false;
            $server->save();
        } else {
            $server = new Server;
            $server->name = $name;
            $server->ip = $ip;
            $server->save();
        }
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        $check = $endeavour->setServerIP($ip);
        if ($check->success) {
            return redirect()->back()->withSuccess("Your server ip is updated.");
        }
        return redirect()->back()->withError("Server IP not changed. Try again.");
    }
   
}
