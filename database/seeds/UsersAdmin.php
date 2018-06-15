<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersAdmin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->id = 1;
        $user->name = 'Lenard Mangay-ayam';
        $user->email = 'lenard.mangayayam@voting-system.com';
        $user->password = bcrypt('admin');
        $user->save();
    }
}
