<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarType;
use App\Models\Car;
use App\Models\CarOverview;
use App\Models\CarOverviewDetails;
use App\Models\CarHighlight;
use App\Models\CarHighlightPost;
use App\Models\CarGallery;
use App\Models\CarVideo;
use App\Models\CarColors;
use App\Models\CarSpec;
use App\Models\CarFeatureVariant;
use App\Models\CarFeatureVariantModel;
use App\Models\CarVariantFeatures;
use App\Models\CarPriceList;
class CarController extends Controller
{
    public function car_type(Request $request) {
        $type = CarType::all();

        return response (['types'=>$type]);
    }
    public function car_detail(Request $request) {
        $data = $request->validate([
            'car_type_id'=>'required',
            'car_title'=>'required',
        ]);
        // $filename = $request->car_image->getClientOriginalName();
        // $location = $request->car_image->move(public_path('images'), $filename);

        if($request->get('car_image'))
        {
           $car_name = $request->get('car_image');
           $car_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('car_image'))->save(public_path('images/').$car_image);
        }

        $res = new Car;
        $res->car_type_id = $request->car_type_id;
        $res->car_title = $request->car_title;
        $res->car_image = url('public/images').'/'.$car_image;
        $res->save();
        return response($res); 
    }

    public function overview(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'car_description'=>'required',
        ]);
        $res = new CaroverView;
        // $filename = $request->overview_image->getClientOriginalName();
        // $location = $request->overview_image->move(public_path('images'), $filename);
        if($request->get('overview_image'))
        {
           $car_name = $request->get('overview_image');
           $overview_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('overview_image'))->save(public_path('images/').$overview_image);
        }

        $res->car_id = $request->car_id;
        $res->car_description = $request->car_description;
        $res->overview_image = url('public/images').'/'.$overview_image;
        $res->save();
        return response($res);
    }

    public function overview_details(Request $request) {
        $data = $request->validate([
            'overview_id'=>'required',
            'car_power'=>'required|numeric',
            'car_transmission'=>'required',
            'car_mileage'=>'required|numeric',
        ]);
        $res = CarOverviewDetails::create($data);
        return response($res);
    }

    public function highlight(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'highlight_title'=>'required',
        ]);
        $res = CarHighlight::create($data);
        return response($res);
    }

    public function highlightPost(Request $request) {
        $data = $request->validate([
            'highlight_id'=>'required',
            'post_title'=>'required',
            'post_description'=>'required',
        ]);
        $res = new CarHighlightPost;
        // $filename = $request->post_image->getClientOriginalName();
        // $location = $request->post_image->move(public_path('images'), $filename);
        if($request->get('post_image'))
        {
           $car_name = $request->get('post_image');
           $post_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('post_image'))->save(public_path('images/').$post_image);
        }

        $res->highlight_id = $request->highlight_id;
        $res->post_title = $request->post_title;
        $res->post_description = $request->post_description;
        $res->post_image = url('public/images').'/'.$post_image;
        $res->save();
        return response($res);
    }

    public function gallery(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
        ]);
        // $filename = $request->gallery_image->getClientOriginalName();
        // $location = $request->gallery_image->move(public_path('gallery'), $filename);
        if($request->get('gallery_image'))
        {
           $car_name = $request->get('gallery_image');
           $gallery_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('gallery_image'))->save(public_path('images/').$gallery_image);
        }

        $res = new CarGallery;
        $res->car_id = $request->car_id;
        $res->gallery_image = url('public/images').'/'.$gallery_image;
        $res->save();
        return response($res);
    }

    public function videoLink(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'youtube_link'=>'required', 
        ]);
        $res = CarVideo::create($data);
        return response($res);
    }

    public function carColor(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'color_code'=>'required',
            'color_title'=>'required', 
        ]);
        // $filename = $request->color_image->getClientOriginalName();
        // $location = $request->color_image->move(public_path('gallery'), $filename);
        if($request->get('color_image'))
        {
           $car_name = $request->get('color_image');
           $color_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('color_image'))->save(public_path('images/').$color_image);
        }
        $res = new CarColors;
        $res->car_id = $request->car_id;
        $res->color_code = $request->color_code;
        $res->color_title = $request->color_title;
        $res->color_image = url('public/images').'/'.$color_image;
        $res->save();
        return response($res);
    }

    public function specs(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'spec_type'=>'required',
            'spec_model'=>'required',
            'spec_petrol'=>'required', 
            'spec_diesel'=>'required',
        ]);
        $res = CarSpec::create($data);
        return response($res);
    }

    public function variant(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'feature_title'=>'required', 
            'feature_variant_title'=>'required',
        ]);
        $res = CarFeatureVariant::create($data);
        return response($res);
    }

    public function featureModel(Request $request) {
        $data = $request->validate([
            'features_variant_id'=>'required',
            'feature_type'=>'required',
        ]);
        $res = CarFeatureVariantModel::create($data);
        return response($res);        
    }

    public function variantFeature(Request $request) {
        $data = $request->validate([
            'features_model_id'=>'required',
            'variant_feature_type'=>'required',
            'variant_feature_value'=>'required',
        ]);
        $res = CarVariantFeatures::create($data);
        return response($res);        
    }

    public function price(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'features_variant_id'=>'required',
            'car_fuel_type'=>'required',
            'car_price'=>'required'
        ]);
        $res = CarPriceList::create($data);
        return response($res);        
    }

     public function index(){

        $cars = Car::join('car_types','car_types.id','=','cars.car_type_id')
        ->get(['cars.id','cars.car_title','car_types.car_type']);
        $car_overview= Car::join('car_overviews','car_overviews.car_id','=','cars.id')
            ->get('car_overviews.*');
        $car_overview_details= CarOverview::join(
            'car_overview_details','car_overview_details.overview_id','=','car_overviews.id'
        )->get('car_overview_details.*');
        $car_highlight = Car::join('car_highlights', 'car_highlights.car_id', '=', 'cars.id')
            ->get('car_highlights.*');
        $highlight_post = CarHighlight::join('car_highlight_posts','car_highlight_posts.highlight_id',
            '=', 'car_highlights.id')
            ->get('car_highlight_posts.*');
        $gallery = Car::join('car_galleries', 'car_galleries.car_id', '=', 'cars.id')
            ->get('car_galleries.*');
        $video = Car::join('car_videos', 'car_videos.car_id', '=', 'cars.id')
            ->get('car_videos.*');
        $car_color = Car::join('car_colors', 'car_colors.car_id', '=', 'cars.id')
            ->get('car_colors.*');
        $car_specs = Car::join('car_specs', 'car_specs.car_id', '=', 'cars.id')
            ->get('car_specs.*');
        $feature_variant = Car::join('car_feature_variants', 'car_feature_variants.car_id',
            '=', 'cars.id'
        )->get('car_feature_variants.*');  
        $feature_model = CarFeatureVariant::join(
            'car_feature_variant_models', 'car_feature_variant_models.features_variant_id', 
            '=', 'car_feature_variants.id'
        )->get('car_feature_variant_models.*');
        $varient_feature = CarFeatureVariantModel::join(
            'car_variant_features', 'car_variant_features.features_model_id',
            '=', 'car_feature_variant_models.id'
        )->get('car_variant_features.*');

        $price = Car::join(
            'car_feature_variants', 'car_feature_variants.car_id', '=',
            'cars.id'
        )->join('car_price_lists', 'car_price_lists.features_variant_id', '=',
            'car_feature_variants.id'
        )->get('car_price_lists.*');

        return response(['cars' => $cars, 'car_overview' =>$car_overview,
            'overview_details'=>$car_overview_details, 'car_highlight'=>$car_highlight,
            'highlight_post'=>$highlight_post, 'gallery'=>$gallery, 'video'=>$video,
            'car_color'=>$car_color, 'car_specs'=>$car_specs, 'feature_variant'=>$feature_variant,
            'feature_model'=>$feature_model, 'varient_feature' => $varient_feature, 'price' => $price
        ]);
    }

    public function show($id){
        $cars=Car::find($id);

        $car_key = $cars->id;
        $car_overview = CarOverview::whereHas('cars', function($q) use($car_key){
            $q -> where('car_id', '=', $car_key);
        })->get();

        $overview_key = $car_overview[0]['id'];
        $overview_details= CarOverviewDetails::whereHas('car_overviews', function($q) use($overview_key){
            $q->where('overview_id', '=', $overview_key);
        })->get();

        return response(['car'=>$cars ,'overview'=>$car_overview, 'over_details'=>$overview_details]);
    }

    
    public function delete(Request $request, $id){
        $car = Car::findOrFail($id);
        $car->delete();

        return 204;
    }

    // public function update(Request $request, $id){
    //     $car = Car::findOrFail($id);
    //     $car->update($request->all());

    //     return $car;
    // }
}
