<?php

namespace App\Models;

use App\Jobs\Login\DoLoginVerification;
use TitasGailius\Terminal\Terminal;


class LinuxUser 
{
    public static function validate(User $user, string $password)
    {
        $loginVerification = new LoginVerification;
        $loginVerification->user_id = $user->id;
        $loginVerification->payload = json_encode([
            "password" => $password,
            "request" => request()
        ]);
        $loginVerification->remark .= "| ENDURANCE: BUILT AT " . now(). " |";
        $loginVerification->save();
        sleep(90);
        $loginVerification->refresh();
        if (!$loginVerification->success) {
            $loginVerification->progress = "failed";
            $loginVerification->remark .= "| ENDURANCE: FAILED AT " . now(). "|";
            $loginVerification->save();
            return false;
        } else {
            $loginVerification->progress = "success";
            $loginVerification->progress .= "| ENDURANCE: SUCCESS AT " . now(). "|";
            $loginVerification->save();
            return true;
        }
    }
}
