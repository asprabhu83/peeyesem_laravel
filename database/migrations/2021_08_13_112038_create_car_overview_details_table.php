<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarOverviewDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_overview_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('overview_id');
            $table->integer('car_power');
            $table->string('car_transmission');
            $table->integer('car_mileage');
            $table->timestamps();
        });

        Schema::table('car_overview_details', function (Blueprint $table) {
            $table->foreign('overview_id')
                ->references('id')->on('car_overviews')
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
        Schema::dropIfExists('car_overview_details');
    }
}
