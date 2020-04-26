<?php

namespace App\Http\Controllers;

use App\Models\LinuxUser;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }

    public function register(Request $request, $username, $password)
    {
        // dd($password);
        LinuxUser::addUser($username,$username, $password);
    }
}
