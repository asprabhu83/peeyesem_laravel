<?php

namespace App\Http\Controllers;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        return News::all();
    }
 
    public function show($id)
    {
        return News::find($id);
    }

    public function store(Request $request)
    {
        if($request->get('image'))
        {
           $car_name = $request->get('image');
           $image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('image'))->save(public_path(
               'images/').$image);
        }
        if($request->get('poster_image'))
        {
           $car_name = $request->get('poster_image');
           $poster_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('poster_image'))->save(public_path(
               'images/').$poster_image);
        }
        $res = News::updateOrCreate(
            ['title'=>request('title'),'description'=>request('description')],
            ['poster_image'=>$poster_image,'image'=>$image,
            'data_form'=>request('data_form') ]
        );
        return response($res); 
    }

    public function update(Request $request, $id)
    {
        $News = News::findOrFail($id);
        if($request->get('poster_image') && $request->get('poster_image') !== '')
        {
           $car_name = $request->get('poster_image');
           $poster_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('poster_image'))->save(public_path('images/').$poster_image);
        }else{
           $poster_image = $News->getOriginal('poster_image');
        }
        if($request->get('image') && $request->get('image') !== '')
        {
           $car_name = $request->get('image');
           $image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('image'))->save(public_path('images/').$image);
        }else{
           $image = $News->getOriginal('image');
        }
        $News->update([
            'title'=>request('title'),
            'description'=>request('description'),
            'poster_image'=>$poster_image,
            'image'=>$image,
            'data_form'=>request('data_form')
        ]);

        return $News;
    }

    public function delete(Request $request, $id)
    {
        $News = News::findOrFail($id);
        $News->delete();

        return 204;
    }
}
