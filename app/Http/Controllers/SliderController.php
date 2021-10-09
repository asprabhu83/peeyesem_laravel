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
        return Slider::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $slider = Slider::findOrFail($id);
        $slider->update($request->all());

        return $slider;
    }

    public function delete(Request $request, $id)
    {
        $slider = Slider::findOrFail($id);
        $slider->delete();

        return 204;
    }
}
