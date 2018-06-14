<?php

namespace App\Http\Controllers\API\v1\Position;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Election;
use App\Position;

class AddPositionController extends Controller
{
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertPosition($request);

    	$result = [
    		'status' => 'success',
    		'message'=> 'Position added successfully'
    	];

    	return response()->json($result);
    }

    private function validateRequest($request)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('position')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
             ]
    	]);
    }

    private function insertPosition($request)
    {
    	$position = $request->all();
    	$position['election_id'] = Util::getCurrentElection();
    	Position::create($position);
    }
}
