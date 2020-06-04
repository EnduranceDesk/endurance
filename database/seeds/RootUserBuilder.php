<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class RootUserBuilder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::where("username", "root")->first()) {
            $user = new User;
            $user->name = "root";
            $user->username = "root";
            $user->email = "root@localhost";
            $user->save();
        }
    }
}
