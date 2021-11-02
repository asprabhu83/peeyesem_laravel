<?php

namespace App\Http\Controllers;
use App\Models\Usedcar;
use Illuminate\Http\Request;

class UsedCarController extends Controller
{
    public function index()
    {
        return Usedcar::all();
    }
 
    public function show($id)
    {
        return Usedcar::find($id);
    }

    public function store(Request $request)
    {
        if($request->get('model_image'))
        {
           $car_name = $request->get('model_image');
           $model_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('model_image'))->save(public_path(
               'images/').$model_image);
        }
        $res = Usedcar::updateOrCreate(
            ['car_model'=>request('car_model'),'fuel_type'=>request('fuel_type')],
            ['price'=>request('price'),'kms_driven'=>request('kms_driven')
            ,'model_image'=>$model_image,'purchase_year'=>request('purchase_year'),
            'data_form'=>request('data_form') ]
        );
        return response($res); 
    }

    public function update(Request $request, $id)
    {
        $Usedcar = Usedcar::findOrFail($id);
        if($request->get('model_image') && $request->get('model_image') !== '')
        {
           $car_name = $request->get('model_image');
           $model_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('model_image'))->save(public_path('images/').$model_image);
        }else{
           $model_image = $Usedcar->getOriginal('model_image');
        }
        $Usedcar->update([
            'car_model'=>request('car_model'),
            'fuel_type'=>request('fuel_type'),
            'price'=>request('price'),
            'kms_driven'=>request('kms_driven'),
            'model_image'=>$model_image,
            'purchase_year'=>request('purchase_year'),
            'data_form'=>request('data_form')
        ]);

        return $Usedcar;
    }

    public function delete(Request $request, $id)
    {
        $Usedcar = Usedcar::findOrFail($id);
        $Usedcar->delete();

        return 204;
    }
}
