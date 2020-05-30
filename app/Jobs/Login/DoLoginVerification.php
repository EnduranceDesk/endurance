<?php

namespace App\Jobs\Login;

use App\Models\User;
use App\Models\LoginVerification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DoLoginVerification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $timeout = 5;
    public $maxExceptions = 1;
    public $tries = 2;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $user;
    protected $password;
    public function __construct(User $user, String $password)
    {
        $this->user = $user;
        $this->password = $password;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $loginVerification = new LoginVerification;
        $loginVerification->user_id = $this->user->id;
        $loginVerification->payload = json_encode([
            "password" => $this->password,
            "request" => request()
        ]);
        $loginVerification->save();
    }
}
