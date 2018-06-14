<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Util;
use App\Position;
use App\Nominee;
use App\Result;

class VoteController extends Controller
{

    public function __invoke(Request $request)
    {

        if ($this->validateRequest($request)['status'] == 'failed') {
            return response()->json($this->validateRequest($request));
        }

        $this->insertVote($request);

        return response()->json([
            'status' => 'success',
            'message' => 'Voted successfully',
            'result' => Result::where('voter_id', Auth::id())->get()
        ]);
    }

    private function insertVote($request)
    {
        foreach ($request->vote as $key => $value) {
            Result::updateOrCreate([
                'voter_id' => Auth::id(),
                'election_id' => Util::getCurrentElection(),
                'position_id' => $value['position_id'],
            ], ['nominee_id' => $value['nominee_id']]);
        }
    }

    private function validNominee($id, $position_id)
    {
        return Nominee::where([
            ['id', '=', $id],
            ['position_id', '=', $position_id]
        ])->count();
    }

    private function isPositionExist($id)
    {
        return Position::where('id', $id)->count();        
    }

    private function voteAllPosition($request)
    {
        $total_position = Position::where('election_id', Util::getCurrentElection())->count();
        $total_vote = count($request->vote);
        return $total_vote >= $total_position;
    }

    private function validateRequest($request)
    {
        $result['status'] = 'failed';
        $vote = $request->vote;



        /**
         * Check if the user vote on all position
         */
        if (!$this->voteAllPosition($request)) {
            $result['message'] = 'You must vote on all position.';
            return $result;
        }

        foreach ($vote as $key => $value) {
            /**
             * Check if position_id and nominee_id has a value
             */
            if (empty($value['position_id']) || empty($value['nominee_id'])) {
                $result['message'] = 'You must vote on all position.';
                return $result;
            }


            /**
             * Check if the Position you vote exists
             */
            if (!$this->isPositionExist($value['position_id'])) {
                $result['message'] = 'Invalid Position.';
                return $result;
            } 

            /**
             * Check if the Nominee you vote on certain position exists
             */
            elseif (!$this->validNominee($value['nominee_id'], $value['position_id'])) {
                $result['message'] = 'Invalid Nominee for '.Position::find($value['position_id'])->name.' position.';
                return $result;
            } 
        }

        return ['status'=>'success'];
    }
}
