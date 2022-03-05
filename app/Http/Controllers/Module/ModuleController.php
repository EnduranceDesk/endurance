<?php

namespace App\Http\Controllers\Module;

use App\Helpers\Misc;
use App\Http\Controllers\Controller;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


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
        foreach($request->file("stubs") as $file){
            $file->storeAs("module_temp/$name", $file->getClientOriginalName());
        }
        return redirect(route("modules.create.step3", ['stubs' => $name]));
    }
    public function getCreateStep2(Request $request)
    {
        $name = $request->stubs;
        $files = Storage::files("module_temp/$name");
        $filenames = [];
        foreach($files as $file) {
            $filenames[] =  pathinfo($file, PATHINFO_BASENAME);
        }
        return view("modules.create", ['filenames' => $filenames, "dirname" => $name]);
    }
    public function postCreate(Request $request)
    {
        $data = ($request->all());
        $temp_dir = $request->temp_dir;
        unset($data['_token']);
        unset($data['temp_dir']);
        $data['manifest_version'] = 1;
        $name = Str::slug($data['name'] . " v". $data['version'], "_");
        File::put(storage_path("app/module_temp/". $temp_dir)."/manifest.json" , json_encode($data));
        $files = Storage::files("module_temp/". $temp_dir);
        $completeFiles = [];
        foreach($files as $file) {
            $completeFiles[] = storage_path("app") . DIRECTORY_SEPARATOR .  $file;
        }
        Storage::makeDirectory("modules");
        Misc::makeZipWithFiles(storage_path("app/modules/". $name. ".zip"), $completeFiles);
        return Storage::download(("modules/". $name. ".zip"));

    }
}

