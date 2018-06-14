<?php

use Illuminate\Database\Seeder;
use App\Election;

class ElectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $election = new Election();
        $election->id = 1;
        $election->save();
    }
}
