<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use App\Http\Controllers\ElectionController;
use DB;

class ResultController extends Controller
{
	public static function isVoted($studentid){
		$electionid = ElectionController::getElectionId();
		$query = DB::table('RESULT')->where(['STUDENTID'=>$studentid, 'ELECTIONID' => $electionid]);
		return ($query->count() > 0);
	}    

	public function submitVote(Request $request){
		$data = $request->input('data');
		$id = session('VID');
		$electionid = ElectionController::getElectionId();
		if($this->isVoted($id)) die('{"status":"failed","message":"You can only vote once"}');
		$data = json_decode($data);
		try{
			foreach ($data as $a) {
				$id = session('VID');
				$positionid = $a[0];
				$nomineeid = $a[1]; 
				DB::insert('INSERT INTO `RESULT` (`STUDENTID`, `NOMINEEID`, `POSITIONID`, `ELECTIONID`) VALUES (?,?,?,?)',[$id, $nomineeid, $positionid, $electionid]);
			}
			echo '{"status":"success","message":"Voted successfully"}';
		}catch(QueryException $err){
			die('{"status":"failed","message":"An error occured"}');
		}
	}

	public function electioninfo(){
		echo json_encode($this->getElectionInfo());
	}

	public function voteresult(){
		echo json_encode($this->getResult());
	}

	public static function getVote($id){
		$query = 'SELECT 
					POSITION.POSITION,
					NOMINEE.NAME 
				  FROM ((result 
				  	INNER JOIN VOTERS ON result.STUDENTID=voters.ID)
					INNER JOIN position ON result.POSITIONID=position.ID)
					INNER JOIN nominee ON result.NOMINEEID=nominee.ID 
				  WHERE RESULT.STUDENTID=? AND RESULT.ELECTIONID=?';
		$electionid = ElectionController::getElectionId();
		$query = DB::select($query,[$id, $electionid]);
		return $query;
	}

	public static function getElectionInfo(){
		$electionid = ElectionController::getElectionId();
		$electioninfo['electionday'] = ElectionController::getElection()->ELECTIONDAY;
		$electioninfo['position'] = DB::table('POSITION')->count();
		$electioninfo['voter'] = DB::table('VOTERS')->count();
		$electioninfo['voted'] = count(DB::select('SELECT  DISTINCT STUDENTID FROM RESULT WHERE ELECTIONID=?',[$electionid]));
		$electioninfo['voting']= $electioninfo['voter']-$electioninfo['voted'];
		return $electioninfo;
	}

	public static function getResult(){
		$electionid = ElectionController::getElectionId();
		$query = 'SELECT 
                    POSITION.POSITION AS POSITION,
                    NOMINEE.NAME,
                    COUNT(RESULT.POSITIONID) AS VOTES
				  FROM ((RESULT
                    INNER JOIN VOTERS ON RESULT.STUDENTID=voters.ID)
                    INNER JOIN POSITION ON RESULT.POSITIONID=position.ID)
                    INNER JOIN NOMINEE ON RESULT.NOMINEEID=nominee.ID
                  WHERE RESULT.ELECTIONID=?
				  GROUP BY RESULT.NOMINEEID ORDER BY VOTES DESC';
		$query = 'SELECT 
					nominee.ID as ID,
					nominee.NAME,
					position.POSITION,
					count(result.STUDENTID) as VOTES 
				  FROM (nominee 
				  	inner join position on nominee.POSITIONID=position.ID)
					LEFT JOIN result on nominee.ID=result.NOMINEEID 
				  GROUP by nominee.ID ORDER BY VOTES DESC';
		return DB::select($query, [$electionid]);
	}
}
