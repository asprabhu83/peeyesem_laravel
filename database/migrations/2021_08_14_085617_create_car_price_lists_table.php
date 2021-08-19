<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarPriceListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_price_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('features_variant_id');
            $table->unsignedBigInteger('car_id');
            $table->string('car_fuel_type');
            $table->string('car_price');
            $table->timestamps();
            $table->foreign('features_variant_id')
                ->references('id')->on('car_feature_variants')
                ->onDelete('cascade');
            $table->foreign('car_id')
                ->references('id')->on('cars')
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
        Schema::dropIfExists('car_price_lists');
    }
}
