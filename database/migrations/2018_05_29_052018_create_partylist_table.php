<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartylistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (!Schema::hasTable('partylist'))
            Schema::create('partylist', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 60);
                $table->timestamps();
                $table->integer('election_id')->unsigned();
                $table->foreign('election_id')
                      ->references('id')
                      ->on('election')
                      ->onDelete('cascade');
            });
            
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partylist');
    }
}
