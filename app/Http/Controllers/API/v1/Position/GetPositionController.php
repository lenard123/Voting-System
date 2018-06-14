<?php

namespace App\Http\Controllers\API\v1\Position;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Position;

class GetPositionController extends Controller
{
    public function __invoke()
    {
    	$election_id = Util::getCurrentElection();
    	return Position::where('election_id', $election_id)->get();
    }
}
