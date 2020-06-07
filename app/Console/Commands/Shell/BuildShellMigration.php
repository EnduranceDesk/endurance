<?php

namespace App\Console\Commands\Shell;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Output\StreamOutput;

class BuildShellMigration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:shell {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (isset(explode("=", $this->argument('name'))[1])) {
            $name = explode("=", $this->argument('name'))[1];
        } else {
            $name = $this->argument('name');
        }
        $stream = fopen("php://output", "w");
        Artisan::call("make:migration " . $name . ' --path shell_migrations',[] , new StreamOutput($stream));        return $stream;
    }
}
