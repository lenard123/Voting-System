<?php

namespace App\Http\Controllers\API\v1\Partylist;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Partylist;

class UpdateController extends Controller
{
    public function __invoke(Request $request, $id)
    {
    	$this->validateRequest($request, $id);
    	$this->updatePartylist($request, $id);
    	return response()->json([
    		'status'	=>	'success',
    		'message'	=>	'Partylist updated successfully'
    	]);
    }

    public function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name'	=>	[
                'required',
                Rule::unique('partylist')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ]
    	]);
    }

    public function updatePartylist($request, $id)
    {
    	$partylist = Partylist::find($id);
    	$partylist->name = $request->name;
    	$partylist->save();
    }
}
