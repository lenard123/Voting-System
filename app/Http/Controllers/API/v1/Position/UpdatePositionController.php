<?php

namespace App\Http\Controllers\API\v1\Position;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Position;

class UpdatePositionController extends Controller
{
    public function __invoke(Request $request, $id)
    {
    	$this->validateRequest($request, $id);
    	$this->updatePosition($request, $id);

    	$result = [
    		'status' => 'success',
    		'message'=> 'Position updated successfully'
    	];

    	return response()->json($result);
    }

    private function updatePosition($request, $id)
    {
    	$position = Position::find($id);
    	$position->name = $request->name;
    	$position->save();
    }

    private function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('position')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
             ]
    	]);
    }
}
