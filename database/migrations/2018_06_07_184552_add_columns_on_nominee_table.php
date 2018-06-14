<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsOnNomineeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nominee', function (Blueprint $table) {
            $table->string('motto', 60)->nullable();
            $table->string('description', 600)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('nominee', function (Blueprint $table) {
            $table->dropColumn('motto');
            $table->dropColumn('description');
        });
    }
}
