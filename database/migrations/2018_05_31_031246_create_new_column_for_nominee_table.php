<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewColumnForNomineeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nominee', function (Blueprint $table) {
            $table->string('image', 60)->default('images/nominee/default.jpg');
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
            $table->dropColumn('image');
        });
    }
}
