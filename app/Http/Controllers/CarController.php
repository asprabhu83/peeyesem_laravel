<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
use App\Models\CarFeatureVariantFeatures;
class CarController extends Controller
{
    public function getFormData(Request $request) {
        $data = $request->validate([
            'car_title'=>'required',
            'car_image'=>'required',
            'car_description'=>'required',
            'overview_image'=>'required',
            'car_power'=>'required|numeric',
            'car_transmission'=>'required',
            'car_mileage'=>'required|numeric',
            'highlight_title'=>'required',
            'post_title'=>'required',
            'post_description'=>'required',
            'post_image'=>'required', 
            'gallery_image'=>'required',
            'youtube_link'=>'required', 
            'local_file_link'=>'required',
            'color_code'=>'required',
            'color_title'=>'required', 
            'color_image'=>'required',
            'spec_type'=>'required',
            'spec_model'=>'required',
            'spec_petrol'=>'required', 
            'spec_diesel'=>'required',
            'feature_title'=>'required', 
            'feature_variant_title'=>'required',
            'feature_type'=>'required',
            'variant_feature_type'=>'required',
            'variant_feature_value'=>'required',
        ]);

        // if($request->get('car_image') & $request->get('overview_image'))
        // {
        //    $car_name = $request->get('car_image');
        //    $over_name = $request->get('overview_image');
        //    $car_image = time().'.' . explode('/', explode(':', substr($car_name, 0, strpos($car_name, ';')))[1])[1];
        //    \Image::make($request->get('car_image'))->save(public_path('images/').$car_image);
        //    $over_image = time().'.' . explode('/', explode(':', substr($over_name, 0, strpos($over_name, ';')))[1])[1];
        //    \Image::make($request->get('car_image'))->save(public_path('images/').$over_image);
        // }


        $car = new Car();
        $car->car_title = $request->car_title;
        $car->car_image = $request->car_image;
        $car->save();

        $overview = new CarOverview();
        $overview->car_id = $car->id;
        $overview->car_description = $request->car_description;
        $overview->overview_image = $request->overview_image;
        $overview->save();

        $overview_details = new CarOverviewDetails();
        $overview_details->overview_id = $overview->id;
        $overview_details->car_power = $request->car_power;
        $overview_details->car_transmission = $request->car_transmission;
        $overview_details->car_mileage = $request->car_mileage;
        $overview_details->save();

        $highlight = new CarHighlight();
        $highlight->car_id = $car->id;
        $highlight->highlight_title = $request->highlight_title;
        $highlight->save();


        $highlight_post = new CarHighlightPost();
        $highlight_post->highlight_id = $highlight->id;
        $highlight_post->post_title = $request->post_title;
        $highlight_post->post_description = $request->post_description;
        $highlight_post->post_image = $request->post_image;
        $highlight_post->save();



        $gallery = new CarGallery();
        $gallery->car_id = $car->id;
        $gallery->gallery_image = $request->gallery_image;
        $gallery->save();

        $video = new CarVideo();
        $video->car_id = $car->id;
        $video->youtube_link = $request->youtube_link;
        $video->local_file_link = $request->local_file_link;
        $video->save();

        $color = new CarColors();
        $color->car_id = $car->id;
        $color->color_code = $request->color_code;
        $color->color_title = $request->color_title;
        $color->color_image = $request->color_image;
        $color->save();

        $specs = new CarSpec();
        $specs->car_id = $car->id;
        $specs->spec_type = $request->spec_type;
        $specs->spec_model = $request->spec_model;
        $specs->spec_petrol = $request->spec_petrol;
        $specs->spec_diesel = $request->spec_diesel;
        $specs->save();

        $feature_variant = new CarFeatureVariant();
        $feature_variant->car_id = $car->id;
        $feature_variant->feature_title = $request->feature_title;
        $feature_variant->feature_variant_title = $request->feature_variant_title;
        $feature_variant->save();

        $feature_model = new CarFeatureVariantModel();
        $feature_model->features_variant_id = $feature_variant->id;
        $feature_model->feature_type = $request->feature_type;
        $feature_model->save();

        $varient_features = new CarFeatureVariantFeatures();
        $varient_features->features_model_id = $feature_model->id;
        $varient_features->variant_feature_type = $request->variant_feature_type;
        $varient_features->variant_feature_value = $request->variant_feature_value;
        $varient_features->save();

        return response(['message' => 'success']);

    }

     public function index(){

        $cars = Car::all();
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
            'car_feature_variant_features', 'car_feature_variant_features.features_model_id',
            '=', 'car_feature_variant_models.id'
        )->get('car_feature_variant_features.*');


        return response(['cars' => $cars, 'car_overview' =>$car_overview,
            'overview_details'=>$car_overview_details, 'car_highlight'=>$car_highlight,
            'highlight_post'=>$highlight_post, 'gallery'=>$gallery, 'video'=>$video,
            'car_color'=>$car_color, 'car_specs'=>$car_specs, 'feature_variant'=>$feature_variant,
            'feature_model'=>$feature_model, 'varient_feature'=>$varient_feature
        ]);
    }

    public function show($id){
        $cars=Car::find($id);

        $car_overview= CarOverview::find($id);

        // $car_overview = CarOverview::whereHas('cars', function($query) use($cars) {
        //     $query->where('car_id', $cars);
        // })->get();

        return response(['car'=>$cars,'overview'=>$car_overview]);
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
