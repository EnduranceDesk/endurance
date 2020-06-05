<?php

namespace App\Http\Controllers\API\Rover;

use App\Classes\Domain\Domain;
use App\Classes\LinuxUser\LinuxUser;
use App\Classes\MySQL\MySQL;
use App\Classes\Server\Server;
use App\Helpers\Responder;
use App\Http\Controllers\Controller;
use App\Models\Domain as DomainEloquent;
use App\Models\User;
use Illuminate\Http\Request;

class RoverController extends Controller
{
    public function build(Request $request)
    {
        $username = $request->input("username");
        $domain = $request->input("domain");
        $password = $request->input("password");


        if ((!$request->input("username")) || (!$request->input("password")) || (!$request->input("domain")) ) {
            return response()->json(Responder::build(400,false, "Bad Request",[],"username or password or domain not supplied"), 400);
        }
        if (User::where("username", $request->input("username"))->first()) {
            return response()->json(Responder::build(400,false, "Rover with this username already exist."), 400);
        }
        
        // TODO: Add password based catch to prevent shell injection via password text (with bad command in it)
        
        if (LinuxUser::validateUsername($request->input("username"))) {
            return response()->json(Responder::build(400,false, "Rover with this username already exist.", [], "Rover with this username already exist as per linux."), 400);
        }

        if (LinuxUser::validateUsername($request->input("username"))) {
            return response()->json(Responder::build(400,false, "Rover with this username already exist.", [], "Rover with this username already exist as per linux."), 400);
        }
        $server = new Server;
        $ip = $server->get();
        if (!$ip) {
            return response()->json(Responder::build(400,false, "Server IP not set.", [], "Server IP not set."), 400);
        }

        try {
            LinuxUser::add($username, $password);
        } catch (\Exception $e) {
            return response()->json(Responder::build(500,false, "Error while building rover. ", [], $e->getMessage()), 500);
        }
        if (!LinuxUser::validateUsername($username)) {
            return response()->json(Responder::build(500,false, "Error while building rover. ", [], "Cannot create linux user."), 500);
        }
        try {
            $mysql = new MySQL("localhost", "root", "rootkapassword", "mysql");            
            $dbSetCreated = $mysql->createUserSet($username, $password);
        } catch (\Exception $e) {
            LinuxUser::remove($username);
            $mysql = new MySQL("localhost", "root", "rootkapassword", "mysql");            
            $mysql->removeUserSet($username);
            return response()->json(Responder::build(500,false, "Error while building rover. ", [], $e->getMessage()), 500);
        }
        if (!$dbSetCreated) {
            LinuxUser::remove($username);
        }

        try {
            $domainObject = new Domain();
            $domainCreated = $domainObject->addMainDomain($domain,$username);
        } catch (\Exception $e) {
            LinuxUser::remove($username);
            $mysql = new MySQL("localhost", "root", "rootkapassword", "mysql");            
            $mysql->removeUserSet($username);
            return response()->json(Responder::build(500,false, "Error while building rover. ", [], $e->getMessage()), 500);
        }
        if (!$domainCreated) {
            LinuxUser::remove($username);
            $mysql = new MySQL("localhost", "root", "rootkapassword", "mysql");            
            $mysql->removeUserSet($username);
            return response()->json(Responder::build(500,false, "Error while building rover. ", [], "Rover creation failed at domain creation level."), 500);
        }
        // Creating DB Entries
        $user = new User;
        $user->name = $username;
        $user->email = $username . "@localhost";
        $user->username =  $username;
        $user->save();

        $domainEloquent = new DomainEloquent;
        $domainEloquent->user_id = $user->id;
        $domainEloquent->name = $domain;
        $domainEloquent->type = "MAIN";
        $domainEloquent->dir = "/home/" .  $username . "/public_html";
        $domainEloquent->mail  = true;
        $domainEloquent->ns1  = true;
        $domainEloquent->ns2  = true;
        $domainEloquent->ftp  = true;
        $domainEloquent->www  = true;
        $domainEloquent->mx  = true;
        $domainEloquent->save();

        return response()->json(Responder::build(200,true, "Rover creation successful."), 200);

    }
}
