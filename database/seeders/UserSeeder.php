<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pwd = bcrypt('Welcome@123#');
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => $pwd,
            'user_role' => 'super_admin',
            'phone' => '0509263623'
        ]);

        $permissions = [
            ['id' => 1, 'permission_name' => 'manage users', 'description' => 'user have permission to manage account user']
        ];

        DB::table('permissions')->insert($permissions);
    }
}
