<?php

namespace App\Http\Controllers\API\v1\Partylist;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Partylist;

class AddController extends Controller
{
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertPartylist($request);

    	return response()->json([
    		'status' => 'success',
    		'message'=> 'Partylist added successfully'
    	]);
    }

    private function validateRequest($request)
    {
    	$this->validate($request, [
    		 'name' => [
                'required', 
                Rule::unique('partylist')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
             ]
    	]);
    }

    private function insertPartylist($request)
    {
    	$partylist = $request->all();
    	$partylist['election_id'] = Util::getCurrentElection();
    	Partylist::create($partylist);
    }
}
