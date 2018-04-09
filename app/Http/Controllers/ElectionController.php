<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Database\QueryException;

class ElectionController extends Controller
{
    public function index(){
    	echo json_encode($this->getElection());
    }

    public function store(Request $request){
        $status = 1;
        $electionday = $request->input('electionday');
        try{
            $query = DB::insert('INSERT INTO `ELECTION` (`STATUS`, `ELECTIONDAY`) VALUES (?, ?)',[$status, $electionday]);
            $result = array('status'=>'success','message'=>'Election Started');
        }catch(QueryException $err){
            $result = array('status'=>'failed', 'message' =>'Failed to start Election');
        }
        echo json_encode($result);
    }

    public function show($id){
        $id = ElectionController::getElectionId();
        $query = DB::select('SELECT * FROM ELECTION WHERE ID=?', [$id]);
        if(count($query) < 1) {
            echo json_encode(['STATUS'=>0]);
            return;
        }
        echo json_encode($query[0]);
    }   

    public function update(Request $request, $id){
        $status = 3;
    	$id = ElectionController::getElectionId();
    	$electionend = $request->input('electionend');
    	try{
	    	$query = DB::update('UPDATE `ELECTION` SET `STATUS`=?, `ELECTIONEND`=?',[$status, $electionend]);
	    	$result = array('status'=>'success','message'=>'Election Ended');
	    }catch(QueryException $err){
	    	$result = array('status'=>'failed', 'message' =>'Failed to end election');
	    }
	    echo json_encode($result);
    }

    public function reset(Request $request){
        $pass = $request->input('password');
        if(!AuthController::chkPass($pass)) die(json_encode(['status'=>'failed','message'=>'Wrong password!']));
        DB::delete('DELETE FROM RESULT');
        DB::delete('DELETE FROM ELECTION');
        DB::delete('DELETE FROM VOTERS');
        DB::delete('DELETE FROM NOMINEE');
        DB::delete('DELETE FROM PARTYLIST');
        DB::delete('DELETE FROM POSITION');
        $result = ['status'=>'success','message'=>'Election has been reseted, all information has been erased'];
        echo json_encode($result);
    }

    public static function isStarted(){
        $query = DB::select('SELECT * FROM ELECTION ORDER BY ID DESC');
        if(count($query) < 1) return false;
        return $query[0]->STATUS == 1 ? true : false; 
    }

    public static function getElection(){
        $query = DB::table('ELECTION')->first();
        return $query;   
    }

    public static function getElectionId(){
        $query = DB::select('SELECT * FROM ELECTION ORDER BY ID DESC');
        if(count($query) < 1) return 0;
        return $query[0]->ID;
    }

    public static function test(){
        $id = ElectionController::getElectionId();
        $query = DB::select('SELECT * FROM ELECTION WHERE ID=?', [$id]);
        return json_encode($query);        
    }

}
