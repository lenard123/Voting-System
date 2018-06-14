<?php

use Illuminate\Database\Seeder;
use App\Voter;

class VoterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 30; $i++) { 
        	Voter::create([
        		'name'=>str_random(10),
        		'student_id'=>$i*3,
        		'course'=>'Information Technology',
        		'election_id'=>5
        	]);
        }
    }
}
