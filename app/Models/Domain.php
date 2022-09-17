<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    public function getMetadata($key)
    {
        $data = json_decode($this->metadata);
        if ($data->$key) {
            return $data->$key;
        }
        return null;
    }
}
