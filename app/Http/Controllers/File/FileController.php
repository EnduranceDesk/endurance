<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Classes\Endeavour\Endeavour;

class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function view(Request $request)
    {
        $filename = $request->input("filename");
        if (!$filename) {
            abort(404);
        }
        $rootToken = $request->session()->get('root');
        $endeavour = new Endeavour($rootToken);
        try {
            $content = $endeavour->getFileContent($filename);
            if ($content->success) {
                $content = $content->data->content;
            } else {
                return redirect(route("processes", ['filename' => $filename]))->withError($content->debug_msg);
            }
        } catch (\Exception $e) {
            return redirect(route("processes", ['filename' => $filename]))->withError($e->getMessage());
        }
        return view("file.view", ['filename' => $filename, 'content' => $content]);
    }
}
