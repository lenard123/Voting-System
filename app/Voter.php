<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens; 

class Voter extends Authenticatable
{
	use HasApiTokens;

    protected $table = 'voter';
    protected $fillable = ['name', 'student_id', 'course', 'election_id'];
}
