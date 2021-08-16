<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarSpecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_specs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('car_id');
            $table->string('spec_type');
            $table->string('spec_model');
            $table->string('spec_petrol');
            $table->string('spec_diesel');
            $table->timestamps();
        });
        Schema::table('car_specs', function (Blueprint $table) {
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
        Schema::dropIfExists('car_specs');
    }
}
