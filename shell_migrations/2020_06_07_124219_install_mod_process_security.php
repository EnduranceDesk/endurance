<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InstallModProcessSecurity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $script = '
            #!/bin/bash
            wget https://github.com/jfut/mod_process_security-rpm/releases/download/v1.1.4-2/mod_process_security-1.1.4-2.el8.x86_64.rpm
            rpm -i mod_process_security-1.1.4-2.el8.x86_64.rpm
            rm -f mod_process_security-1.1.4-2.el8.x86_64.rpm
        ';
        unlink("/last_shell.sh");
        $check = file_put_contents('/last_shell.sh', $script);
        chmod('/last_shell.sh', 0700);
        $return =  shell_exec("sh /last_shell.sh $username $password");
        unlink("/last_shell.sh");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $script = '
            #!/bin/bash
            yum remove  mod_process_security-1.1.4-2.el8.x86_64 -y
        ';
        unlink("/last_shell.sh");
        $check = file_put_contents('/last_shell.sh', $script);
        chmod('/last_shell.sh', 0700);
        $return =  shell_exec("sh /last_shell.sh $username $password");
        unlink("/last_shell.sh");
    }
}
