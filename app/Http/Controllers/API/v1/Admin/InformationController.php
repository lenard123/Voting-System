<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;

class InformationController extends Controller
{
    public function __invoke(Request $request)
    {
    	return response()->json([
    		'election' => \App\Election::find(Util::getCurrentElection()),
    		'user' => $request->user(),
    		'partylist' => \App\Partylist::where('election_id', Util::getCurrentElection())->get(),
    		'position' => \App\Position::where('election_id', Util::getCurrentElection())->get()
    	]);
    }
}
