<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellcarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellcars', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email');
            $table->string('mobile');
            $table->string('car_model');
            $table->string('model_variant');
            $table->string('fuel_type');
            $table->string('registration_number')->nullable();
            $table->string('kms_completed')->nullable();
            $table->string('color')->nullable();
            $table->string('purchase_year')->nullable();
            $table->string('ownership')->nullable();
            $table->string('expected_price')->nullable();
            $table->string('sell_type')->nullable();
            $table->string('agreement')->nullable();
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
        Schema::dropIfExists('sellcars');
    }
}
