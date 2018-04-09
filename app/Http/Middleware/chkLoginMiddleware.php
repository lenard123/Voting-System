<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\AuthController;

class chkLoginMiddleware
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
        if($request->path() == 'admin/login'){
            if(AuthController::isLogin()){
                return redirect('admin');
            }
        }else{
            if(!AuthController::isLogin()){
                return redirect('admin/login');
            }
        }
        return $next($request);
    }
}
