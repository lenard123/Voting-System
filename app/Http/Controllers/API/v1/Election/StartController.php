<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Election;

class StartController extends Controller
{
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);

        if ($this->hasNoNominee()) 
            return response()->json([
                'status' => 'failed',
                'message' => 'There is no nominees'
            ]);

    	if ($this->isElectionStarted())
    		return response()->json([
    			'status'  =>  'failed',
    			'message'  =>  'Election has already started'
    		]);

    	$election = Election::find(Util::getCurrentElection())
                        ->update([
                            'status'=>2, 
                            'start'=>date('Y-m-d H:i:s'), 
                            'name'=>$request->name
                        ]);


    	return response()->json([
    		'status'  =>  'success',
    		'message'  => 'Election has started.',
    		'election'  => Election::find(Util::getCurrentElection())
    	]);
    }

    private function hasNoNominee()
    {
        return \App\Nominee::where('election_id', Util::getCurrentElection())->count() < 1;
    }

    private function isElectionStarted()
    {
    	return Util::getElectionStatus() == 2;
    }

    private function validateRequest($request)
    {
    	$id = Auth::id();
    	$this->validate($request, [
    		'password'  =>  "required|password:users,password,$id"
    	]);
    }
}
