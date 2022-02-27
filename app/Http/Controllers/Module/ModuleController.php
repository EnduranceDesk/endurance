<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function getCreate()
    {
        return view("modules.add_files");
    }
    public function uploadStubs(Request $request)
    {
        $name = md5(random_bytes(15));
        $directory = (new TemporaryDirectory())->name($name)->create();
        return redirect(route("modules.create.step2", ['stubs' => $name]));
    }
    public function getCreateStep2(Request $request)
    {
        $dir =(new TemporaryDirectory())->name($request->stubs);
        dump(($dir));
    }
}

