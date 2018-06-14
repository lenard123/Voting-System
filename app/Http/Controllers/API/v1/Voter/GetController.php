<?php

namespace App\Http\Controllers\API\v1\Voter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Voter;

class GetController extends Controller
{
    public function __invoke()
    {
    	return Voter::where('election_id', Util::getCurrentElection())->paginate(10);
    }
}
