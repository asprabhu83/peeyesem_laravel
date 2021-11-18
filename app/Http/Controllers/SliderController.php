<?php

namespace App\Http\Controllers;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        return Slider::all();
    }
 
    public function show($id)
    {
        return Slider::find($id);
    }

    public function store(Request $request)
    {
        if($request->get('slider_image'))
        {
           $car_name = $request->get('slider_image');
           $slider_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('slider_image'))->save(public_path(
               'images/').$slider_image);
        }
        $res = Slider::updateOrCreate(
            ['slider_image'=>$slider_image],
            ['slider_link'=>request('slider_link'),
            'data_value'=>request('data_value') ]
        );
        return response($res); 
    }

    public function update(Request $request, $id)
    {
        $Slider = Slider::findOrFail($id);
        if($request->get('slider_image') && $request->get('slider_image') !== '')
        {
           $car_name = $request->get('slider_image');
           $slider_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('slider_image'))->save(public_path('images/').$slider_image);
        }else{
           $slider_image = $Slider->getOriginal('slider_image');
        }
        $Slider->update([
            'slider_link'=>request('slider_link'),
            'slider_image'=>$slider_image,
            'data_value'=>request('data_value')
        ]);

        return $Slider;
    }

    public function delete(Request $request, $id)
    {
        $slider = Slider::findOrFail($id);
        $slider->delete();

        return 204;
    }
}
