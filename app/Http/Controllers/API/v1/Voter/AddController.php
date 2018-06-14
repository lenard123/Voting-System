<?php

namespace App\Http\Controllers\API\v1\Voter;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Voter;

class AddController extends Controller
{
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertVoter($request);
    	return response()->json([
    		'status' => 'success',
    		'message' => 'Voter added successfully'
    	]);
    }

    private function insertVoter($request)
    {
    	$voter = $request->all();
    	$voter['election_id'] = Util::getCurrentElection();
    	Voter::create($voter);
    }

    private function validateRequest($request)
    {
    	$this->validate($request, [
            'name' => [
                'required',
                Rule::unique('voter')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
            'student_id' => [
                'required',
                Rule::unique('voter')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'course' => 'required'
    	]);
    }
}
