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
