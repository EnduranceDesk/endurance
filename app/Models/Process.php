<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    use HasFactory;
    protected $dates = ["started_at"];

    public function getData()
    {
        return json_decode($this->data);
    }
    public function getTempLogPathAttribute()
    {
        return $this->getData()->temp_log_path;
    }
    public function getTempShellFilePathAttribute()
    {
        return $this->getData()->temp_shell_file_path;
    }
}
