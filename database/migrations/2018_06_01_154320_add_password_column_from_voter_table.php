<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPasswordColumnFromVoterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('voter', function (Blueprint $table) {
            $table->string('password', 60)->default(bcrypt('admin'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('voter', function (Blueprint $table) {
            $table->dropColumn('password');
        });
    }
}
