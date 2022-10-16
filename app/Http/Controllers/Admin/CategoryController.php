<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/categories/index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/categories/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // dd($request);
       
        $validated = $request->validate(
            [
                'name' => ['required', 'max:50'],
                'description' => ['required', 'max:50'],
            ]
        );
        if ($request->image) {
            $file_name = $request->file('image')->getClientOriginalName();
            $request->file('image')->storeAs('public', $file_name);
            $validated['image_path'] = '/storage/' . $file_name;
        }

        Category::create($validated);

        return to_route('admin.categories.index')
            ->with([
                'message' => '登録しました。'
            ]);



        // return redirect()->route('user.index');


        // dd($request ->request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Admin/categories/edit', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    // dd($request);
        
        $category = Category::findOrFail($id);

        $validated = $request->validate(
            [
                'name' => ['required', 'max:50'],
                'description' => ['required', 'max:50'],
            ]
        );

 
        if ($request->image) {
            $file_name = $request->file('image')->getClientOriginalName();
            $request->file('image')->storeAs('public', $file_name);
            $validated['image_path'] = '/storage/' . $file_name;
        }


        $category->update($validated);

        return to_route('admin.categories.index')
        ->with([
            'message' => '登録しました。'
        ]);
        
     //   return redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return to_route('admin.categories.index')
        ->with([
            'message' => '削除しました。'
        ]);
    }
}
