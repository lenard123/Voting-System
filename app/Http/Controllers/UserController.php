<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\VoterController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\NomineeController;
use App\Http\Controllers\ResultController;

class UserController extends Controller
{
    public function login(){
    	echo view('voter.login')->render();
    }

    public function index(){
    	$data['voter'] = VoterController::getVoter(session('VID'));
    	echo view('voter.index', $data)->render();
    }

    public function vote(){
    	$data['positions'] = PositionController::getPosition();
    	$data['nominees'] = NomineeController::getNominee();
    	echo view('voter.vote', $data)->render();
    }

    public function result(){
        $data['results'] = ResultController::getVote(session('VID'));
        $data['electioninfo'] = ResultController::getElectionInfo();
        $data['voteresult'] = ResultController::getResult();
        echo view('voter.result', $data)->render();        
    }
}
