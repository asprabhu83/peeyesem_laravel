<?php

namespace App\Http\Controllers;
use App\Models\Insurance;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{
    public function index()
    {
        return Insurance::all();
    }
 
    public function show($id)
    {
        return Insurance::find($id);
    }

    public function store(Request $request)
    {
        return Insurance::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Insurance = Insurance::findOrFail($id);
        $Insurance->update($request->all());

        return $Insurance;
    }

    public function delete(Request $request, $id)
    {
        $Insurance = Insurance::findOrFail($id);
        $Insurance->delete();

        return 204;
    }
}
