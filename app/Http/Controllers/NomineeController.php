<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use DB;

class NomineeController extends Controller
{
    public static function getNominee(){
        $str = 'SELECT  
                    POSITION.POSITION AS POSITION,
                    POSITION.ID AS POSITIONID,
                    PARTYLIST.ID AS PARTYLISTID,
                    PARTYLIST.NAME AS PARTYLIST,
                    NOMINEE.NAME,
                    NOMINEE.COURSE,
                    NOMINEE.ID,
                    NOMINEE.STUDENTID 
                 FROM ( POSITION 
                    INNER JOIN NOMINEE ON POSITION.ID=NOMINEE.POSITIONID) 
                    LEFT JOIN PARTYLIST ON NOMINEE.PARTYLISTID=PARTYLIST.ID';
        $query = DB::select($str);
        return $query;
    }

	//api/position GET
    public function index(){
    	echo json_encode($this->getNominee());
    }

    //api/position POST
    public function store(Request $request){
    	
    	$name = $request->input('name');
    	$course = $request->input('course');
    	$studentId = $request->input('studentid');
    	$positionid = $request->input('positionid');
    	$partylistid = $request->input('partylistid');

    	try{
    		if($partylistid == 0){
    			$query = 'INSERT INTO `NOMINEE` (`NAME`,`COURSE`, `STUDENTID`, `POSITIONID`) VALUES ( ?, ?, ?, ?)';
    			$params = [$name, $course, $studentId, $positionid];
    		}else{
    			$query = 'INSERT INTO `NOMINEE` (`NAME`,`COURSE`, `STUDENTID`, `POSITIONID`, `PARTYLISTID`) VALUES (?, ?, ?, ?, ?)';
    			$params = [$name, $course, $studentId, $positionid, $partylistid];
    		}

    		DB::insert($query, $params);
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

    //api/position/id 	PUT/PATCH
    public function update(Request $request, $id){
    	$name = $request->input('name');
    	$course = $request->input('course');
    	$studentid = $request->input('studentid');
    	$positionid = $request->input('positionid');
    	$partylistid = $request->input('partylistid')==0 ? null : $request->input('partylistid');

    	try{
    		$query = 'UPDATE 
    					`NOMINEE` 
    				 SET 
    					`NAME`=?, 
    					`COURSE`=?, 
    					`STUDENTID`=?,
    					`POSITIONID`=?,
    					`PARTYLISTID`=?
    				 WHERE 
    				 	`ID`=?';
    		DB::update($query,[$name, $course, $studentid, $positionid, $partylistid, $id]);
    		$result = '{"status":"success","message":"Partylist updated successfully."}';
    	}catch(QueryException $err){
    		if($err->errorInfo[1] == 1062){
	    		$result = '{"status":"failed", "message": "Student ID already exists, try a different one."}';
	    	}else{
	    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
	    	}
    	}
    	echo $result;    	
    }

    //api/position/id DELETE
    public function destroy($id){
    	try{
	    	DB::delete('DELETE FROM `NOMINEE` WHERE `ID`=?', [$id]);    		
    		$result = '{"status":"success","message":"Nominee deleted successfully."}';
    	}catch(QueryException $err){
    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
    	}
    	echo $result;    	
    }
}
