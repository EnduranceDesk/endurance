<?php

namespace App\Console\Commands\View;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Output\StreamOutput;

class BuildGeneralPageView extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature ='gpview:make  {path}';

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
     * @return int
     */
    public function handle()
    {
        $path = $this->argument('path');
        $stream = fopen("php://output", "w");
        Artisan::call("make:view $path --extends=layouts.page --with-yields",[] , new StreamOutput($stream));        return $stream;
        return 0;
    }
}
