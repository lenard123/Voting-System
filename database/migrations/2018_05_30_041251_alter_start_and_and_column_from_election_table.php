<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterStartAndAndColumnFromElectionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('election', function (Blueprint $table) {
            $table->dateTime('start')->nullable()->change();
            $table->dateTime('end')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('election', function (Blueprint $table) {
            $table->dateTime('start')->change();
            $table->dateTime('end')->change();
        });
    }
}
