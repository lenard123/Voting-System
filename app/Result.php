<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $table = 'result';
    protected $fillable = ['voter_id', 'nominee_id', 'position_id', 'election_id'];
}
