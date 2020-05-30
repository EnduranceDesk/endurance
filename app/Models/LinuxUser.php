<?php

namespace App\Models;

use App\Jobs\Login\DoLoginVerification;
use TitasGailius\Terminal\Terminal;


class LinuxUser 
{
    public static function validate(User $user, string $password)
    {
        DoLoginVerification::dispatch($user, $password)
                ->delay(now()->addMinutes(10));
    }
}
