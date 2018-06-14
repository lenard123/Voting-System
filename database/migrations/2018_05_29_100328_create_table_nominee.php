<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableNominee extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('nominee'))
            Schema::create('nominee', function (Blueprint $table) {
                $table->increments('id');
                $table->timestamps();
                $table->string('name', 60);
                $table->string('course', 60);
                $table->string('student_id', 60);
                $table->integer('position_id')->unsigned();
                $table->integer('partylist_id')->nullable()->unsigned();
                $table->integer('election_id')->unsigned();

                $table->foreign('election_id')
                      ->references('id')
                      ->on('election')
                      ->onDelete('cascade');

                $table->foreign('position_id')
                      ->references('id')
                      ->on('position')
                      ->onDelete('cascade');

                $table->foreign('partylist_id')
                      ->references('id')
                      ->on('partylist');
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nominee');
    }
}
