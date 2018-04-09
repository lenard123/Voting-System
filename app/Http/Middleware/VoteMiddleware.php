<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\ResultController;
class VoteMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->is('voter/vote') && ResultController::isVoted(session('VID'))){
            return redirect('voter/result');
        }else if($request->is('voter/result') && !ResultController::isVoted(session('VID'))){
            return redirect('voter/vote');
        }
        return $next($request);
    }
}
