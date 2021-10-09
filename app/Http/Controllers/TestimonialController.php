<?php

namespace App\Http\Controllers;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        return Testimonial::all();
    }
 
    public function show($id)
    {
        return Testimonial::find($id);
    }

    public function store(Request $request)
    {
        return Testimonial::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Testimonial = Testimonial::findOrFail($id);
        $Testimonial->update($request->all());

        return $Testimonial;
    }

    public function delete(Request $request, $id)
    {
        $Testimonial = Testimonial::findOrFail($id);
        $Testimonial->delete();

        return 204;
    }
}
