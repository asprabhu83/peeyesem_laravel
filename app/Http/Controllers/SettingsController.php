<?php

namespace App\Http\Controllers;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        return Setting::all();
    }
 
    public function show($id)
    {
        return Setting::find($id);
    }

    public function store(Request $request)
    {
        if($request->get('site_logo') && $request->get('site_logo') !== '')
        {
           $car_name = $request->get('site_logo');
           $site_logo = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('site_logo'))->save(public_path('images/').$site_logo);
        }
        $res = Setting::updateOrCreate(
            ['setting_id'=>request('setting_id')],
            ['site_logo'=>$site_logo,
            'service_number'=>request('service_number'),
            'sales_number'=>request('sales_number'),
            'whatsapp_number'=>request('whatsapp_number'),
            'fb_link'=>request('fb_link'),
            'insta_link'=>request('insta_link'), 
            'youtube_link'=>request('youtube_link'),'data_value'=>request('data_value')]
        );
        return response($res);
    }

    public function update(Request $request, $id)
    {
        $Setting = Setting::findOrFail($id);
        if($request->get('site_logo') && $request->get('site_logo') !== '')
        {
           $car_name = $request->get('site_logo');
           $site_logo = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('site_logo'))->save(public_path('images/').$site_logo);
        }else{
            $site_logo = $Setting->getOriginal('site_logo');
        }
        $Setting->update([
            'setting_id'=>request('setting_id'),
            'site_logo'=>$site_logo,
            'service_number'=>request('service_number'),
            'sales_number'=>request('sales_number'),
            'whatsapp_number'=>request('whatsapp_number'),
            'fb_link'=>request('fb_link'),
            'insta_link'=>request('insta_link'), 
            'youtube_link'=>request('youtube_link'),
            'data_value'=>request('data_value')
        ]);

        return $Setting;
    }

    public function delete(Request $request, $id)
    {
        $Setting = Setting::findOrFail($id);
        $Setting->delete();

        return 204;
    }
}
