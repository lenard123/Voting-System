<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PartylistController extends Controller
{
	//api/position GET
    public function index(){
    	$query = DB::select('SELECT * FROM `PARTYLIST`');
    	echo json_encode($query);
    }

    //api/position POST
    public function store(Request $request){
    	$partylist = $request->input('partylist');
    	$query = DB::insert('INSERT INTO `PARTYLIST` (`NAME`) VALUES (?) ', [$partylist]);
    	if($query){
    		$result = '{"status":"success","message":"Partylist inserted successfully."}';
    	}else{
    		$result = '{"status":"failed", "message": "Error occured while inserting partylist"}';
    	}
    	echo $result;
    }

    //api/position/id 	PUT/PATCH
    public function update(Request $request, $id){
    	$partylist = $request->input('partylist');
    	$query = DB::update('UPDATE `PARTYLIST` SET `NAME`=? WHERE `ID`=?', [$partylist, $id]);
    	if($query){
    		$result = '{"status":"success","message":"Partylist updated successfully."}';
    	}else{
    		$result = '{"status":"failed", "message": "Error occured while updating partylist"}';
    	}
    	echo $result;    	
    }

    //api/position/id DELETE
    public function destroy($id){
    	$query = DB::delete('DELETE FROM `PARTYLIST` WHERE `ID`=?', [$id]);
    	if($query){
    		$result = '{"status":"success","message":"Partylist deleted successfully."}';
    	}else{
    		$result = '{"status":"failed", "message": "Error occured while deleting partylist"}';
    	}
    	echo $result;    	
    }
}
