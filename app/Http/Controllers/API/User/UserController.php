<?php

namespace App\Http\Controllers\API\User;

use App\Classes\LinuxUser\LinuxUser;
use App\Helpers\Responder;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        if ((!$request->input("username")) || (!$request->input("password")) ) {
            return response()->json(Responder::build(403,false, "Login Unsuccessful",[],"Either one of credentials not supplied"), 403);
        }
        if (!User::where("username", $request->input("username"))->first()) {
            return response()->json(Responder::build(403,false, "Login Unsuccessful",[],"Invalid user as per DB"), 403);
        }
        
        // TODO: Add password based catch to prevent shell injection via password text (with bad command in it)
        try {
            if (!LinuxUser::validateUsername($request->input("username"))) {
                return response()->json(Responder::build(403,false, "Login Unsuccessful",[],"Invalid username as per linux"), 403);
            }
            if(LinuxUser::validate($request->input("username"), $request->input("password"))){ 
                $user = User::where("username", $request->input("username"))->first();
                // TODO: Add customization passport app name 
                $token =  $user->createToken('MyApp')->accessToken; 
                return response()->json(Responder::build(200,true, "Login Successful",["token" => $token],"Credentials validated"), 200);
            } else { 
                return response()->json(Responder::build(401,false, "Login Unsuccessful",[],"Invalid username and password combination"), 401); 
            } 
        } catch (\Exception $e) {
            return response()->json(Responder::build(500,false, "Login Unsuccessful",[],"Cannot validate. " . $e->getMessage()), 500); 
            
        }
    }
    public function register(Request $request)
    {
        # code...
    }
    public function user()
    {
        
    }
}
