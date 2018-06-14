<?php

namespace App\Http\Controllers\API\v1\Voter;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Voter;

class UpdateController extends Controller
{
    public function __invoke(Request $request, $id)
    {
    	$this->validateRequest($request, $id);
    	$this->updateVoter($request, $id);
    	return response()->json([
    		'status' => 'success',
    		'message' => 'Voter updated successfully.'
    	]);
    }

    private function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('voter')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'student_id' => [
                'required', 
                Rule::unique('voter')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'course' => 'required'
    	]);
    }

    private function updateVoter($request, $id)
    {
    	$voter = $request->all();
    	Voter::find($id)->update($voter);
    }
}
