<?php

namespace App\Http\Controllers\Cron;

use App\Classes\Endeavour\Endeavour;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CronController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function getBuilder(Request $request, $rover)
    {
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour-> fetchCronEntries($rover);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again. Error: " . $e->getMessage() );
        }
        return view("cron.builder", ['rover' => $rover, 'entries' => $response->data->entries]);
    }
    public function postAddCronJob(Request $request, $rover)
    {
        $command = $request->input("command");

        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour-> addCronEntry($rover, $command);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again. Error: " . $e->getMessage() );
        }
        if ($response->success) {
            return redirect()->back()->withSuccess("Operation successful. " . $response->debug_msg);
        } else {
            return redirect()->back()->withSuccess("Operation failed. " . $response->debug_msg);
        }
    }
    public function getDeleteCronJob(Request $request, $rover)
    {
        $command = $request->input("command");

        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $response = $endeavour-> deleteCronEntry($rover, $command);
        } catch (\Exception $e) {
            return redirect()->back()->withError("Something went wrong. Please try again. Error: " . $e->getMessage() );
        }
        if ($response->success) {
            return redirect()->back()->withSuccess("Operation successful. " . $response->debug_msg);
        } else {
            return redirect()->back()->withSuccess("Operation failed. " . $response->debug_msg);
        }
    }
}
