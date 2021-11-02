<?php

namespace App\Http\Controllers;
use App\Models\Carform;
use Illuminate\Http\Request;

class CarFormController extends Controller
{
    public function index()
    {
        return Carform::all();
    }
 
    public function show($id)
    {
        return Carform::find($id);
    }

    public function store(Request $request)
    {
        return Carform::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Carform = Carform::findOrFail($id);
        $Carform->update($request->all());

        return $Carform;
    }

    public function delete(Request $request, $id)
    {
        $Carform = Carform::findOrFail($id);
        $Carform->delete();

        return 204;
    }
}
