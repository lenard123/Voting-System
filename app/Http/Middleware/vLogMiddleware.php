<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\AuthController;

class vLogMiddleware
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
        if($request->is('voter/login')){
            if(AuthController::isVlogin()){
                return redirect('voter');
            }
        }else{
            if(!AuthController::isVlogin()){
                return redirect('voter/login');
            }
        }        
        return $next($request);
    }
}
