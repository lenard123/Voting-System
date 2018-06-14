<?php

namespace App\Http\Controllers\API\v1\Partylist;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Partylist;

class GetController extends Controller
{
    public function __invoke()
    {
    	$election_id = Util::getCurrentElection();
    	return Partylist::where('election_id', $election_id)->get();
    }
}
