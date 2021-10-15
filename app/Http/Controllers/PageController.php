<?php

namespace App\Http\Controllers;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return Page::all();
    }
 
    public function show($id)
    {
        return Page::find($id);
    }

    public function store(Request $request)
    {
        return Page::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Page = Page::findOrFail($id);
        $Page->update($request->all());

        return $Page;
    }

    public function delete(Request $request, $id)
    {
        $Page = Page::findOrFail($id);
        $Page->delete();

        return 204;
    }
}
