<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ClassDetailsController;
use App\Http\Controllers\AttributeDetailsController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\SliderController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'users'], function()  
{  
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/index','UserController@index');
    Route::get('/show/{id}', 'UserController@show');
    Route::put('/update/{id}', 'UserController@update');
    Route::delete('/delete/{id}', 'UserController@delete');

    Route::middleware('auth:api')->get('/currentUser','UserController@currentUser');
    Route::middleware('auth:api')->get('/logout','UserController@logout');

}); 

//permission table

Route::group(['prefix' => 'permission'], function()  
{  
    Route::post('/store', 'PermissionController@store');
    Route::get('/index', 'PermissionController@index');
    Route::get('/show/{id}', 'PermissionController@show');
    Route::put('/update/{id}', 'PermissionController@update');
    Route::delete('/delete/{id}', 'PermissionController@delete');
}); 


//user role table

Route::group(['prefix' => 'userrole'], function()  
{  
    Route::post('/store', 'UserRoleController@store');
    Route::get('/index', 'UserRoleController@index');
    Route::get('/show/{id}', 'UserRoleController@show');
    Route::put('/update/{id}', 'UserRoleController@update');
    Route::delete('/delete/{id}', 'UserRoleController@delete');
}); 

//add cars table

Route::group(['prefix' => 'store'], function()  
{  
    Route::post('/car', [CarController::class, 'car_detail']);
    Route::post('/overview', [CarController::class, 'overview']);
    Route::post('/overview_details', [CarController::class, 'overview_details']);
    Route::post('/highlight', [CarController::class, 'highlight']);
    Route::post('/highlight_post', [CarController::class, 'highlightPost']);
    Route::post('/gallery', [CarController::class, 'gallery']);
    Route::post('/videolink', [CarController::class, 'videoLink']);
    Route::post('/carcolor', [CarController::class, 'carColor']);
    Route::post('/specs', [CarController::class, 'specs']);
    Route::post('/variant', [CarController::class, 'variant']);
    Route::post('/feature_model', [CarController::class, 'featureModel']);
    Route::post('/variant_feature', [CarController::class, 'variantFeature']);
    Route::post('/pricelist', [CarController::class, 'price']);
});

Route::get('car/types', [CarController::class, 'car_type']);
Route::get('cars/index', [CarController::class, 'index']);
Route::delete('cars/delete/{id}', [CarController::class, 'delete']);

Route::group(['prefix' => 'show'], function()  
{
    Route::get('/car/{id}', [CarController::class, 'show']);
});

// page builder table

Route::group(['prefix' => 'menu'], function ()
{
    Route::post('/title', [MenuController::class, 'menu_title']);
    Route::post('/menu', [MenuController::class, 'menu_item']);
    Route::post('/submenu', [MenuController::class, 'sub_menu']);
    Route::get('/show/{id}', [MenuController::class, 'get_menus']);
    Route::get('/index', [MenuController::class, 'menu_index']);
    Route::delete('/delete/{id}', [MenuController::class, 'delete_menu']);
    Route::delete('/delete/item/{id}', [MenuController::class, 'delete_item']);
    Route::delete('/delete/submenu/{id}', [MenuController::class, 'delete_submenu']);
    Route::get('/menu/{id}', [MenuController::class, 'only_menu']);
});

Route::group(['prefix' => 'slider'], function ()
{
    Route::post('/store', [SliderController::class, 'store']);
    Route::get('/index', [SliderController::class, 'index']);
});