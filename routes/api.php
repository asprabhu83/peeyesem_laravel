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
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\AccessoriesController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SellcarController;
use App\Http\Controllers\CarFormController;
use App\Http\Controllers\UsedCarController;
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
Route::get('cars_variant/index', [CarController::class, 'futureVariantIndex']);
Route::delete('cars/delete/{id}', [CarController::class, 'delete']);

Route::group(['prefix' => 'show'], function()  
{
    Route::get('/car/{id}', [CarController::class, 'show']);
});


Route::group(['prefix' => 'update'], function()  
{
    Route::put('/car_detail/{id}', [CarController::class, 'car_detail_update']);
    Route::put('/car_overview/{id}', [CarController::class, 'overview_update']);
    Route::put('/overview_details/{id}', [CarController::class, 'overview_details_update']);
    Route::put('/highlight/{id}', [CarController::class, 'highlight_update']);
    Route::put('/highlight_post/{id}', [CarController::class, 'highlightPost_update']);
    Route::put('/gallery/{id}', [CarController::class, 'gallery_update']);
    Route::put('/video/{id}', [CarController::class, 'videoLink_update']);
    Route::put('/color/{id}', [CarController::class, 'carColor_update']);
    Route::put('/specs/{id}', [CarController::class, 'specs_update']);
    Route::put('/variant/{id}', [CarController::class, 'variant_update']);
    Route::put('/variant_model/{id}', [CarController::class, 'featureModel_update']);
    Route::put('/feature/{id}', [CarController::class, 'variantFeature_update']);
    Route::put('/price/{id}', [CarController::class, 'price_update']);
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

Route::group(['prefix' => 'blog'], function ()
{
    Route::post('/store', [BlogController::class, 'store']);
    Route::get('/index', [BlogController::class, 'index']);
});

Route::group(['prefix' => 'testimonial'], function ()
{
    Route::post('/store', [TestimonialController::class, 'store']);
    Route::get('/index', [TestimonialController::class, 'index']);
    Route::get('/show/{id}', [TestimonialController::class, 'show']);
    Route::put('/update/{id}', [TestimonialController::class, 'update']);
    Route::delete('/delete/{id}', [TestimonialController::class, 'delete']);
});

Route::group(['prefix' => 'accessories'], function ()
{
    Route::post('/store', [AccessoriesController::class, 'store']);
    Route::get('/index', [AccessoriesController::class, 'index']);
    Route::get('/show/{id}', [AccessoriesController::class, 'show']);
    Route::put('/update/{id}', [AccessoriesController::class, 'update']);
    Route::delete('/delete/{id}', [AccessoriesController::class, 'delete']);
});

Route::group(['prefix' => 'settings'], function ()
{
    Route::post('/store', [SettingsController::class, 'store']);
    Route::get('/index', [SettingsController::class, 'index']);
    Route::get('/show/{id}', [SettingsController::class, 'show']);
    Route::put('/update/{id}', [SettingsController::class, 'update']);
    Route::delete('/delete/{id}', [SettingsController::class, 'delete']);
});

Route::group(['prefix' => 'sell_car'], function ()
{
    Route::post('/store', [SellcarController::class, 'store']);
    Route::get('/index', [SellcarController::class, 'index']);
    Route::get('/show/{id}', [SellcarController::class, 'show']);
    Route::put('/update/{id}', [SellcarController::class, 'update']);
    Route::delete('/delete/{id}', [SellcarController::class, 'delete']);
});

Route::group(['prefix' => 'car_form'], function ()
{
    Route::post('/store', [CarFormController::class, 'store']);
    Route::get('/index', [CarFormController::class, 'index']);
    Route::get('/show/{id}', [CarFormController::class, 'show']);
    Route::put('/update/{id}', [CarFormController::class, 'update']);
    Route::delete('/delete/{id}', [CarFormController::class, 'delete']);
});

Route::group(['prefix' => 'used_car'], function ()
{
    Route::post('/store', [UsedCarController::class, 'store']);
    Route::get('/index', [UsedCarController::class, 'index']);
    Route::get('/show/{id}', [UsedCarController::class, 'show']);
    Route::put('/update/{id}', [UsedCarController::class, 'update']);
    Route::delete('/delete/{id}', [UsedCarController::class, 'delete']);
});

Route::group(['prefix' => 'page'], function ()
{
    Route::post('/store', [PageController::class, 'store']);
    Route::get('/index', [PageController::class, 'index']);
    Route::get('/show/{id}', [PageController::class, 'show']);
    Route::put('/update/{id}', [PageController::class, 'update']);
    Route::delete('/delete/{id}', [PageController::class, 'delete']);
});