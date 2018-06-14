<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateElectionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('election')) 
            Schema::create('election', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('status')->default(1);
                $table->dateTime('start');
                $table->dateTime('end');
                $table->string('name', 60)->nullable();
            });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('election');
    }
}
