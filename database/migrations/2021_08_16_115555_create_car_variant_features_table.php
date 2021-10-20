<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarVariantFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_variant_features', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('features_model_id');
            $table->string('variant_feature_type');
            $table->string('variant_category');
            $table->string('variant_feature_value');
            $table->timestamps();
        });
        Schema::table('car_variant_features', function (Blueprint $table) {
            $table->foreign('features_model_id')
                ->references('id')->on('car_feature_variant_models')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car_variant_features');
    }
}
