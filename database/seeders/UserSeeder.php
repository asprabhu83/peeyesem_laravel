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

        $settings = [
            ['id' => 1,
             'setting_id' => '1',
             'site_logo' => '1635403410.png',
             'service_number' => '9962666118',
             'sales_number' => '9962666228',
             'whatsapp_number' => '9962666118',
             'fb_link' => 'https://www.facebook.com/',
             'insta_link' => 'https://www.instagram.com/',
             'youtube_link' => 'https://www.youtube.com/']
        ];

        DB::table('settings')->insert($settings);

        $car_types =[
            ['id'=>1, 'car_type'=>'SUV'],
            ['id'=>2, 'car_type'=>'SEDAN'],
            ['id'=>3, 'car_type'=>'HATCHBACK'],
            ['id'=>4, 'car_type'=>'COMPACT-SUV'],
        ];
        DB::table('car_types')->insert($car_types);
    }
}
