<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use DB;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('password', function ($attribute, $value, $parameters, $validator) {
            $password = DB::table($parameters[0])->where('id', $parameters[2])->value($parameters[1]);
            return Hash::check($value, $password);
        });

        if(config('app.env') === 'production') {
            \URL::forceScheme('https');
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
