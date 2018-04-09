<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use DB;

class VoterController extends Controller
{
    public function index(){
    	$query = DB::select('SELECT * FROM `VOTERS` WHERE ISACTIVE=1');
    	echo json_encode($query);
    }

    public function store(Request $request){
    	$name = $request->input('name');
    	$studentid = $request->input('studentid');
    	$course = $request->input('course');
    	try{
    		DB::insert('INSERT INTO `VOTERS` (`NAME`, `COURSE`, `STUDENTID`) VALUES (?,?,?)',[$name, $course, $studentid]);
    		$result = '{"status":"success","message":"Nominee inserted successfully."}';
    	}catch(QueryException $err){
    		if($err->errorInfo[1] == 1062){
	    		$result = '{"status":"failed", "message": "Student ID already exists, try a different one."}';
	    	}else{
	    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
	    	}
    	}
    	echo $result;
    }

    public function update(Request $request, $id)
	{
		$name = $request->input('name');
    	$studentid = $request->input('studentid');
    	$course = $request->input('course');
    	
    	try{
    		DB::update('UPDATE `VOTERS` SET `NAME`=?, `COURSE`=?, `STUDENTID`=? WHERE ID=?',[$name, $course, $studentid, $id]);
    		$result = '{"status":"success","message":"Voter updated successfully."}';
    	}catch(QueryException $err){
    		if($err->errorInfo[1] == 1062){
	    		$result = '{"status":"failed", "message": "Student ID already exists, try a different one."}';
	    	}else{
	    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
	    	}
    	}
    	echo $result;
	}

	public function destroy($id)
	{
		try{
			DB::delete('UPDATE `VOTERS` SET ISACTIVE=0 WHERE `ID`=?',[$id]);
			$result = '{"status":"success","message":"Voters deleted successfully."}';
    	}catch(QueryException $err){
    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
    	}
    	echo $result;
	}

    public static function getVoter($id){
        $query = DB::table('VOTERS')->where('ID',$id);
        return $query->first();
    }	
}
