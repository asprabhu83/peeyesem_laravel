<?php

namespace App\Http\Controllers;
use App\Models\Accessorie;
use Illuminate\Http\Request;

class AccessoriesController extends Controller
{
    public function index()
    {
        return Accessorie::all();
    }
 
    public function show($id)
    {
        return Accessorie::find($id);
    }

    public function store(Request $request)
    {
        return Accessorie::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Accessorie = Accessorie::findOrFail($id);
        $Accessorie->update($request->all());

        return $Accessorie;
    }

    public function delete(Request $request, $id)
    {
        $Accessorie = Accessorie::findOrFail($id);
        $Accessorie->delete();

        return 204;
    }
}
