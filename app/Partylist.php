<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partylist extends Model
{
    protected $table = 'partylist';
    protected $fillable = ['name', 'election_id'];
}
