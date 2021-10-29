<?php

namespace App\Http\Controllers;
use App\Models\Sellcar;
use Illuminate\Http\Request;

class SellcarController extends Controller
{
    public function index()
    {
        return Sellcar::all();
    }
 
    public function show($id)
    {
        return Sellcar::find($id);
    }

    public function store(Request $request)
    {
        return Sellcar::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Sellcar = Sellcar::findOrFail($id);
        $Sellcar->update($request->all());

        return $Sellcar;
    }

    public function delete(Request $request, $id)
    {
        $slider = Slider::findOrFail($id);
        $slider->delete();

        return 204;
    }
}
