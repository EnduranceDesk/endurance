<?php

namespace App\Console\Commands\Shell;

use Illuminate\Console\Command;

class ExecuteShellMigration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shell:migrate';

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
        $stream = fopen("php://output", "w");
        Artisan::call("migrate " . $name . ' --path shell_migrations',[] , new StreamOutput($stream));        return $stream;
    }
}
