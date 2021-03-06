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
            'car_image',
            'poster_image'
        ]);
        // $filename = $request->car_image->getClientOriginalName();
        // $location = $request->car_image->move(public_path('images'), $filename);

        if($request->get('car_image'))
        {
           $car_name = $request->get('car_image');
           $car_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('car_image'))->save(public_path('images/').$car_image);
        }
        if($request->get('poster_image'))
        {
           $car_name = $request->get('poster_image');
           $poster_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('poster_image'))->save(public_path('images/').$poster_image);
        }

        $res = Car::updateOrCreate(
            ['car_title'=>request('car_title'), ],
            ['car_type_id'=>request('car_type_id'), 
            'car_image'=>$car_image, 
            'poster_image'=>$poster_image]
        );
        return response($res); 
    }

    public function car_detail_update(Request $request, $id){

        $car = Car::findOrFail($id);
        if($request->get('car_image') && $request->get('car_image') !== '')
        {
           $car_name = $request->get('car_image');
           $car_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('car_image'))->save(public_path('images/').$car_image);
        }else{
           $car_image = $car->getOriginal('car_image');
        }
        if($request->get('poster_image') && $request->get('car_image') !== '')
        {
           $car_name = $request->get('poster_image');
           $poster_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('poster_image'))->save(public_path('images/').$poster_image);
        }else{
           $poster_image = $car->getOriginal('poster_image');
        }
        $car->update([
            'car_title'=>request('car_title'),
            'car_type_id'=>request('car_type_id'), 
            'car_image'=>$car_image, 
            'poster_image'=>$poster_image
        ]);

        return response($car);
    }

    public function overview(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'car_description'=>'required',
            'overview_image'
        ]);
        // $filename = $request->overview_image->getClientOriginalName();
        // $location = $request->overview_image->move(public_path('images'), $filename);
        if($request->get('overview_image'))
        {
           $car_name = $request->get('overview_image');
           $overview_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
            strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('overview_image'))->save(public_path(
               'images/').$overview_image);
        }
        
        $res = CarOverview::updateOrCreate(
            ['car_id'=>request('car_id'), ],
            ['car_description'=>request('car_description'), 
            'overview_image'=>$overview_image]
        );
        return response($res);
    }

    public function overview_update(Request $request, $id){
        $overview = CarOverview::findOrFail($id);
        if($request->get('overview_image') && $request->get('overview_image') !== '')
        {
           $car_name = $request->get('overview_image');
           $overview_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
            strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('overview_image'))->save(public_path(
               'images/').$overview_image);
        }else {
            $overview_image = $overview->getOriginal('overview_image');
        }
        $overview->update([
            'car_id'=>request('car_id'),
            'car_description'=>request('car_description'), 
            'overview_image'=>$overview_image
        ]);
        return response($overview);
    }

    public function overview_details(Request $request) {
        $data = $request->validate([
            'overview_id'=>'required',
            'car_power'=>'required',
            'car_transmission'=>'required',
            'car_mileage'=>'required',
        ]);
        $res = CarOverviewDetails::updateOrCreate(
            ['overview_id'=>request('overview_id'), ],
            ['car_power'=>request('car_power'), 'car_transmission'=>request('car_transmission'),
            'car_mileage'=>request('car_mileage')]
        );
        return response($res);
    }

    public function overview_details_update(Request $request, $id){
        $overview_details = CarOverviewDetails::findOrFail($id);
        $overview_details->update($request->all());
        return response($overview_details);
    }

    public function highlight(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'highlight_title'=>'required',
        ]);
        $res = CarHighlight::updateOrCreate(
            ['car_id'=>request('car_id'), ],
            ['highlight_title'=>request('highlight_title')]
        );
        return response($res);
    }

    public function highlight_update(Request $request, $id){
        $highlight = CarHighlight::findOrFail($id);
        $highlight->update($request->all());
        return response($highlight);
    }

    public function highlightPost(Request $request) {
        $data = $request->validate([
            'highlight_id'=>'required',
            'post_title'=>'required',
            'post_description'=>'required',
            'post_image'
        ]);
        
        // $filename = $request->post_image->getClientOriginalName();
        // $location = $request->post_image->move(public_path('images'), $filename);
        if($request->get('post_image'))
        {
           $car_name = $request->get('post_image');
           $post_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('post_image'))->save(public_path(
               'images/').$post_image);
        }

        $res = CarHighlightPost::updateOrCreate(
            ['post_title'=>request('post_title'),'highlight_id'=>request('highlight_id')],
            ['post_description'=>request('post_description'),
            'post_image'=>$post_image]
        );
        return response($res);
    }

    public function highlightPost_update(Request $request, $id){
        $highlight_post = CarHighlightPost::findOrFail($id);
        if($request->get('post_image') && $request->get('post_image') !== '')
        {
           $car_name = $request->get('post_image');
           $post_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('post_image'))->save(public_path(
               'images/').$post_image);
        }else {
            $post_image = $highlight_post->getOriginal('post_image');
        }
        $highlight_post->update([
            'post_title'=>request('post_title'),
            'highlight_id'=>request('highlight_id'),
            'post_description'=>request('post_description'),
            'post_image'=>$post_image
        ]);
        return response($highlight_post);
    }

    public function gallery(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'gallery_image'
        ]);
        // $filename = $request->gallery_image->getClientOriginalName();
        // $location = $request->gallery_image->move(public_path('gallery'), $filename);
        if($request->get('gallery_image'))
        {
           $car_name = $request->get('gallery_image');
           $gallery_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('gallery_image'))->save(public_path(
               'images/').$gallery_image);
        }

        $res = CarGallery::updateOrCreate(
            ['gallery_image'=>$gallery_image],
            ['car_id'=>request('car_id')]
        );
        return response($res);
    }

    public function gallery_update(Request $request, $id){
        $gallery = CarGallery::findOrFail($id);
        if($request->get('gallery_image') && $request->get('gallery_image') !== '')
        {
           $car_name = $request->get('gallery_image');
           $gallery_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('gallery_image'))->save(public_path(
               'images/').$gallery_image);
        }else {
            $gallery_image = $gallery->getOriginal('gallery_image');
        }
        $gallery->update([
            'gallery_image'=>$gallery_image,
            'car_id'=>request('car_id')
        ]);
        return response($gallery);
    }

    public function videoLink(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'youtube_link'=>'required', 
        ]);
        $res = CarVideo::updateOrCreate(
            ['car_id'=>request('car_id'), ],
            ['youtube_link'=>request('youtube_link')]
        );
        return response($res);
    }

    public function videoLink_update(Request $request, $id){
        $video = CarVideo::findOrFail($id);
        $video->update($request->all());
        return response($video);
    }

    public function carColor(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'color_code'=>'required',
            'color_title'=>'required', 
            'color_image'
        ]);
        // $filename = $request->color_image->getClientOriginalName();
        // $location = $request->color_image->move(public_path('gallery'), $filename);
        if($request->get('color_image'))
        {
           $car_name = $request->get('color_image');
           $color_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('color_image'))->save(public_path(
               'images/').$color_image);
        }
        $res = CarColors::updateOrCreate(
            ['color_title'=>request('color_title') ],
            ['color_code'=>request('color_code'), 'car_id'=>request('car_id'),'second_color_code'=>request('second_color_code'), 
            'color_image'=>$color_image]
        );
        return response($res);
    }

    public function carColor_update(Request $request, $id){
        $color = CarColors::findOrFail($id);
        if($request->get('color_image') && $request->get('color_image') !== '')
        {
           $car_name = $request->get('color_image');
           $color_image = time().'.' . explode('/', explode(':', substr($car_name, 0, 
                strpos($car_name, ';')))[1])[1];
           \Image::make($request->get('color_image'))->save(public_path(
               'images/').$color_image);
        }else {
            $color_image = $color->getOriginal('color_image');
        }
        $color->update([
            'color_title'=>request('color_title'),
            'color_code'=>request('color_code'),
            'car_id'=>request('car_id'),
            'second_color_code'=>request('second_color_code'), 
            'color_image'=>$color_image
        ]);
        return response($color);
    }

    public function specs(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'spec_type'=>'required',
            'spec_model'=>'required',
            'spec_petrol', 
            'spec_diesel',
        ]);
        $res = CarSpec::updateOrCreate(
            ['spec_model'=>request('spec_model'),'spec_type'=>request('spec_type'),'car_id'=>request('car_id')],
            ['spec_petrol'=>request('spec_petrol'), 'spec_diesel'=>request('spec_diesel')]
        );
        return response($res);
    }

    public function specs_update(Request $request, $id){
        $spec = CarSpec::findOrFail($id);
        $spec->update($request->all());
        return response($spec);
    }

    public function variant(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'feature_title'=>'required', 
            'feature_variant_title'=>'required',
        ]);
        $res = CarFeatureVariant::updateOrCreate(
            ['car_id'=>request('car_id'), ],
            ['feature_title'=>request('feature_title'), 
            'feature_variant_title'=>request('feature_variant_title'),]
        );
        return response($res);
    }

    public function variant_update(Request $request, $id){
        $variant = CarFeatureVariant::findOrFail($id);
        $variant->update($request->all());
        return response($variant);
    }

    public function featureModel(Request $request) {
        $data = $request->validate([
            'feature_type'=>'required',
        ]);
        $res = CarFeatureVariantModel::updateOrCreate(
            ['feature_type'=>request('feature_type'), 'features_variant_id'=>request('features_variant_id'),'data_value'=>request('data_value')]
        );
        return response($res);        
    }

    public function featureModel_update(Request $request, $id){
        $variant = CarFeatureVariantModel::findOrFail($id);
        $variant->update($request->all());
        return response($variant);
    }

    public function variantFeature(Request $request) {
        $data = $request->validate([
            'features_model_id'=>'required',
            'variant_feature_type'=>'required',
            'variant_feature_value'=>'required',
            'variant_category'=>'required'
        ]);
        $res = CarVariantFeatures::updateOrCreate(
            ['variant_feature_type'=>request('variant_feature_type'),'features_model_id'=>request('features_model_id') ],
            ['variant_feature_value'=>request('variant_feature_value'),
            'variant_category'=>request('variant_category'),]
        );
        return response($res);        
    }

    public function variantFeature_update(Request $request, $id){
        $features = CarVariantFeatures::findOrFail($id);
        $features->update($request->all());
        return response($features);
    }

    public function price(Request $request) {
        $data = $request->validate([
            'car_id'=>'required',
            'features_variant_id'=>'required',
            'car_fuel_type'=>'required',
            'car_price'=>'required'
        ]);
        $res = CarPriceList::updateOrCreate(
            ['car_id'=>request('car_id'), 
            'features_variant_id'=>request('features_variant_id'),],
            ['car_fuel_type'=>request('car_fuel_type'),
            'car_price'=>request('car_price')]
        );
        return response($res);        
    }

    public function price_update(Request $request, $id){
        $price = CarPriceList::findOrFail($id);
        $price->update($request->all());
        return response($price);
    }

    public function futureVariantIndex(){
        return CarFeatureVariantModel::all();
    }

     public function secondary_index(){
        $id_array = Car::where('id' ,'>' ,0)->get('id');
        $cars_response =[];
        foreach ($id_array as $all_id) {
            $id = $all_id['id'];
                $cars=Car::find($id);
                $car_title = Car::find($id)->car_title;
                $car_image= Car::find($id)->car_image;
                $car_overview = Car::findOrFail($id)->carOverviews;

                $overview_id = $car_overview['id'];
                $overview_details= CarOverview::findOrFail($overview_id)->overviews;
                
                $highlight = Car::find($id)->carHighlights;

                $highlight_id = $highlight[0]['id'];
                $highlight_post = CarHighlight::find($highlight_id)->highlightPost;

                $gallery = Car::find($id)->carGalleries;
                $videos = Car::find($id)->carVideos;
                $colors = Car::find($id)->carColors;
                $specs = Car::find($id)->carSpecs;
                $feature_variant = Car::find($id)->carFeatureVariant;

                $feature_id = $feature_variant[0]['id'];
                $feature_model = CarFeatureVariant::find($feature_id)->featureModel;

                $varient_featurearr = array();        
                foreach ($feature_model as $model_variant) {
                    $model_id = $model_variant['id'];
                    $varient_featurearr = array_merge($varient_featurearr,json_decode(CarFeatureVariantModel::find($model_id)->variantFeatures));
                }

                $varient_feature = $varient_featurearr;

                
                $price_id = $feature_variant[0]['id'];
                $price = CarFeatureVariant::find($price_id)->variantPrice;
                $car_price = CarFeatureVariant::find($price_id)->variantPrice->car_price;
                $car_type_id = Car::find($id)->car_type_id;
                $car_type = CarType::find($car_type_id)->car_type;
              $cars_response[]= ["car_id"=>$id,"car_type"=>$car_type,"car_title"=>$car_title, 'car_image' => $car_image, "car_price"=>$car_price,'car'=>$cars , "overview"=>$car_overview, 
                    "overview_details"=>$overview_details, "highlight"=>$highlight,
                    "highlight_post"=>$highlight_post, "gallery"=>$gallery, "videos"=>$videos,
                    "colors"=>$colors, "specs"=>$specs, "feature_variant"=>$feature_variant,
                    "feature_model"=>$feature_model, "varient_feature"=>$varient_feature, 
                    "price_details"=>$price
            ];
        }
        return $cars_response;
    }

    public function index(){
        $cars = Car::join('car_types','car_types.id','=','cars.car_type_id')->join('car_price_lists','car_price_lists.car_id','=','cars.id')
        ->get(['cars.id','cars.car_title', 'cars.car_image','cars.poster_image','car_types.car_type','car_price_lists.car_price']);

        return response(['cars' => $cars]);
    }

    // public function index(){
    //     $cars = Car::join('car_types','car_types.id','=','cars.car_type_id')->join('car_price_lists','car_price_lists.car_id','=','cars.id')
    //     ->get(['cars.id','cars.car_title', 'cars.car_image','cars.poster_image','car_types.car_type','car_price_lists.car_price']);
    //     $car_overview= Car::join('car_overviews','car_overviews.car_id','=','cars.id')
    //         ->get('car_overviews.*');
    //     $car_overview_details= CarOverview::join(
    //         'car_overview_details','car_overview_details.overview_id','=','car_overviews.id'
    //     )->get('car_overview_details.*');
    //     $car_highlight = Car::join('car_highlights', 'car_highlights.car_id', '=', 'cars.id')
    //         ->get('car_highlights.*');
    //     $highlight_post = CarHighlight::join('car_highlight_posts',
    //         'car_highlight_posts.highlight_id','=', 'car_highlights.id')
    //         ->get('car_highlight_posts.*');
    //     $gallery = Car::join('car_galleries', 'car_galleries.car_id', '=', 'cars.id')
    //         ->get('car_galleries.*');
    //     $video = Car::join('car_videos', 'car_videos.car_id', '=', 'cars.id')
    //         ->get('car_videos.*');
    //     $car_color = Car::join('car_colors', 'car_colors.car_id', '=', 'cars.id')
    //         ->get('car_colors.*');
    //     $car_specs = Car::join('car_specs', 'car_specs.car_id', '=', 'cars.id')
    //         ->get('car_specs.*');
    //     $feature_variant = Car::join('car_feature_variants', 'car_feature_variants.car_id',
    //         '=', 'cars.id'
    //     )->get('car_feature_variants.*');  
    //     $feature_model = CarFeatureVariant::join(
    //         'car_feature_variant_models', 'car_feature_variant_models.features_variant_id', 
    //         '=', 'car_feature_variants.id'
    //     )->get('car_feature_variant_models.*');
    //     $varient_feature = CarFeatureVariantModel::join(
    //         'car_variant_features', 'car_variant_features.features_model_id',
    //         '=', 'car_feature_variant_models.id'
    //     )->get('car_variant_features.*');
    //     $price = Car::join(
    //         'car_feature_variants', 'car_feature_variants.car_id', '=',
    //         'cars.id'
    //     )->join('car_price_lists', 'car_price_lists.features_variant_id', '=',
    //         'car_feature_variants.id'
    //     )->get('car_price_lists.*');

    //     return response(['cars' => $cars, 'car_overview' =>$car_overview,
    //         'overview_details'=>$car_overview_details, 'car_highlight'=>$car_highlight,
    //         'highlight_post'=>$highlight_post, 'gallery'=>$gallery, 'video'=>$video,
    //         'car_color'=>$car_color, 'car_specs'=>$car_specs, 'feature_variant'=>$feature_variant,
    //         'feature_model'=>$feature_model, 'varient_feature' => $varient_feature, 'price' => $price
    //     ]);
    // }

    public function show($id){
        $cars=Car::find($id);
        $car_overview = Car::findOrFail($id)->carOverviews;

        $overview_id = $car_overview['id'];
        $overview_details= CarOverview::findOrFail($overview_id)->overviews;
        
        $highlight = Car::find($id)->carHighlights;

        $highlight_id = $highlight[0]['id'];
        $highlight_post = CarHighlight::find($highlight_id)->highlightPost;

        $gallery = Car::find($id)->carGalleries;
        $videos = Car::find($id)->carVideos;
        $colors = Car::find($id)->carColors;
        $specs = Car::find($id)->carSpecs;
        $feature_variant = Car::find($id)->carFeatureVariant;

        $feature_id = $feature_variant[0]['id'];
        $feature_model = CarFeatureVariant::find($feature_id)->featureModel;

        $varient_featurearr = array();        
        foreach ($feature_model as $model_variant) {
            $model_id = $model_variant['id'];
            $varient_featurearr = array_merge($varient_featurearr,json_decode(CarFeatureVariantModel::find($model_id)->variantFeatures));
        }

        $varient_feature = $varient_featurearr;

        
        $price_id = $feature_variant[0]['id'];
        $price = CarFeatureVariant::find($price_id)->variantPrice;

        return response(['car'=>$cars , "overview"=>$car_overview, 
            "overview_details"=>$overview_details, "highlight"=>$highlight,
            "highlight_post"=>$highlight_post, "gallery"=>$gallery, "videos"=>$videos,
            "colors"=>$colors, "specs"=>$specs, "feature_variant"=>$feature_variant,
            "feature_model"=>$feature_model, "varient_feature"=>$varient_feature, 
            "price"=>$price
        ]);
    }
    
    public function delete(Request $request, $id){
        $car = Car::findOrFail($id);
        $car->delete();

        return 204;
    }

    //Repeaters Index

    public function highlight_index()
    {
        return CarHighlightPost::all();
    }

    public function gallery_index()
    {
        return CarGallery::all();
    }

    public function colors_index()
    {
        return CarColors::all();
    }

    public function specs_index()
    {
        return CarSpec::all();
    }

    public function feature_model_index()
    {
        return CarFeatureVariantModel::all();
    }

    public function varient_feature_index()
    {
        return CarVariantFeatures::all();
    }

    // Repeaters Delete Method 

    public function highlightPost_delete(Request $request, $id)
    {
        $News = CarHighlightPost::findOrFail($id);
        $News->delete();
        return 204;
    }
    public function gallery_delete(Request $request, $id)
    {
        $News = CarGallery::findOrFail($id);
        $News->delete();
        return 204;
    }
    public function carColor_delete(Request $request, $id)
    {
        $News = CarColors::findOrFail($id);
        $News->delete();
        return 204;
    }
    public function specs_delete(Request $request, $id)
    {
        $News = CarSpec::findOrFail($id);
        $News->delete();
        return 204;
    }
    public function featureModel_delete(Request $request, $id)
    {
        $News = CarFeatureVariantModel::findOrFail($id);
        $News->delete();
        return 204;
    }
    public function variantFeature_delete(Request $request, $id)
    {
        $News = CarVariantFeatures::findOrFail($id);
        $News->delete();
        return 204;
    }


    // public function update(Request $request, $id){
    //     $car = Car::findOrFail($id);
    //     $car->update($request->all());

    //     return $car;
    // }
}
