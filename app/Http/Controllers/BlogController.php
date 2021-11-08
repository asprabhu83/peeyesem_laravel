<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }
 
    public function show($id)
    {
        return Blog::find($id);
    }

    public function store(Request $request)
    {
        if($request->get('blog_image'))
        {
           $car_name = $request->get('blog_image');
           $blog_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('blog_image'))->save(public_path(
               'images/').$blog_image);
        }
        $res = Blog::updateOrCreate(
            ['title'=>request('title'),'description'=>request('description')],
            ['blog_image'=>$blog_image,
            'data_value'=>request('data_value') ]
        );
        return response($res); 
    }

    public function update(Request $request, $id)
    {
        $Blog = Blog::findOrFail($id);
        if($request->get('blog_image') && $request->get('blog_image') !== '')
        {
           $car_name = $request->get('blog_image');
           $blog_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('blog_image'))->save(public_path('images/').$blog_image);
        }else{
           $blog_image = $Blog->getOriginal('blog_image');
        }
        $Blog->update([
            'title'=>request('title'),
            'description'=>request('description'),
            'blog_image'=>$blog_image,
            'data_value'=>request('data_value')
        ]);

        return $Blog;
    }

    public function delete(Request $request, $id)
    {
        $Blog = Blog::findOrFail($id);
        $Blog->delete();

        return 204;
    }
}
