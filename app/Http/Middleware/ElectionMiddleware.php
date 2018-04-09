<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\AuthController;

class ElectionMiddleware
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
        if($request->path() != 'api/login' && $request->method() != 'GET' && $request->path() != 'api/election' && !$request->is('api/election/*') && !$request->is('api/account/*') && !$request->is('api/reset')){
            if(AuthController::isElection()){
                die('{"status":"failed","message":"You can not add, update, or delete during the election"}');
            }else if(AuthController::isElectionFinish()){
                die('{"status":"failed","message":"Election has finish, you need to reset it to make update"}');
            }
        }

        
        return $next($request);
    }
}
