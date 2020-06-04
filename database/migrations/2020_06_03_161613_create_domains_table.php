<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDomainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domains', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->string("name");
            $table->string("type");

            $table->text("dir");

            $table->boolean("mail")->default(false);
            $table->boolean("ns1")->default(false);
            $table->boolean("ns2")->default(false);
            $table->boolean("ftp")->default(false);
            $table->boolean("www")->default(false);

            $table->boolean("mx")->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('domains');
    }
}
