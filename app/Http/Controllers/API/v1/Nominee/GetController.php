<?php

namespace App\Http\Controllers\API\v1\Nominee;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;

class GetController extends Controller
{
    public function __invoke()
    {
    	$nominee = \App\Nominee::where('election_id', Util::getCurrentElection())
    				->orderBy('position_id')
    				->get();
    	return $nominee;
    }
}
