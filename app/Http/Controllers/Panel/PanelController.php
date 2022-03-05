<?php

namespace App\Http\Controllers\Panel;

use App\Classes\Endeavour\Endeavour;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PanelController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index()
    {
        return view("panel.view.home");
    }
    public function getChangePassword(Request $request)
    {
        $username = $request->username;
        if (empty($username)) {
            return redirect(route("home"))->withError("Username not provided for password change!");
        }
        return view("auth.passwords.change", ['username' => $username]);
    }
    public function postChangePassword(Request $request)
    {
        $username = $request->username;
        $password = $request->password;
        if (empty($username) || empty($password)) {
            return redirect(route("home"))->withError("Username or password not provided for password change!");
        }
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $content = $endeavour->changePassword($username, $password);
            if ($content->success) {
                return redirect(route("home"))->withSuccess("Password successfully changed for $username!");
            } else {
                return redirect(route("home"))->withError($content->debug_msg);
            }
        } catch (\Exception $e) {
            return redirect(route("home"))->withError($e->getMessage());
        }

    }
}
