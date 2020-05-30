<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class EnduranceUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::where("username", "endurance")->first()) {
            $user = new User;
            $user->name = "Endurance";
            $user->username = "endurance";
            $user->email = "endurance@localhost";
            $user->save();
        }
    }
}
