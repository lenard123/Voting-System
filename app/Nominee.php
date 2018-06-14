<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nominee extends Model
{
    protected $table = 'nominee';
    protected $fillable = [
    	'name', 
    	'course', 
    	'student_id', 
    	'position_id',
    	'partylist_id',
    	'election_id',
    	'image',
        'description',
        'motto'
    ];
}
