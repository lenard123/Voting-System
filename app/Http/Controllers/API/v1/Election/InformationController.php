<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use Illuminate\Support\Facades\Auth;

class InformationController extends Controller
{
    public function __invoke()
    {
    	$id = Util::getCurrentElection();
        $information['election'] = \App\Election::find($id);
    	$information['position'] = \App\Position::where('election_id', $id)->get();
    	$information['partylist'] = \App\Partylist::where('election_id', $id)->get();
    	$information['nominee'] = \App\Nominee::where('election_id', $id)->get();
    	$information['result'] = \App\Result::where('voter_id', Auth::id())->get();
    	$information['voter'] = Auth::user();
    	return response()->json($information);
    }
}
