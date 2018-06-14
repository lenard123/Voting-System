<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Election;

class StopController extends Controller
{
    
	public function __invoke(Request $request)
	{
		if (!$this->isElectionStarted()) 
			return response()->json([
				'status' => 'failed',
				'message' => 'Election hasn\'t started yet.'
			]);
		$this->validateRequest($request);

		$this->stopElection($request);	

    	return response()->json([
    		'status'  =>  'success',
    		'message'  => 'Election has finished.',
    		'election'  => Election::find(Util::getCurrentElection())
    	]);	

	}

	private function stopElection($request)
	{
    	$election = Election::find(Util::getCurrentElection())
                        ->update([
                            'status'=>3, 
                            'name'=>$request->name,
                            'end'=>date('Y-m-d H:i:s')
                        ]);		
        Election::create();
	}

    private function validateRequest($request)
    {
    	$id = $request->user()->id;
    	$this->validate($request, [
    		'password'  =>  "required|password:users,password,$id"
    	]);
    }

    private function isElectionStarted()
    {
    	return Util::getElectionStatus() == 2;
    }

}
