<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarFeatureVariantModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_feature_variant_models', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('features_variant_id');
            $table->string('feature_type');
            $table->timestamps();
        });
        Schema::table('car_feature_variant_models', function (Blueprint $table) {
            $table->foreign('features_variant_id')
                ->references('id')->on('car_feature_variants')
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
        Schema::dropIfExists('car_feature_variant_models');
    }
}
