<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsedcarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usedcars', function (Blueprint $table) {
            $table->id();
            $table->string('car_model');
            $table->string('fuel_type');
            $table->string('price');
            $table->string('kms_driven');
            $table->string('model_image');
            $table->string('purchase_year');
            $table->longText('data_form')->nullable();
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
        Schema::dropIfExists('usedcars');
    }
}
