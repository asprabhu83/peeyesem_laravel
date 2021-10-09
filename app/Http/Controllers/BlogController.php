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
        return Blog::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Blog = Blog::findOrFail($id);
        $Blog->update($request->all());

        return $Blog;
    }

    public function delete(Request $request, $id)
    {
        $Blog = Blog::findOrFail($id);
        $Blog->delete();

        return 204;
    }
}
