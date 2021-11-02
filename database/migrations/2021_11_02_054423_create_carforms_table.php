<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carforms', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email_id');
            $table->string('mobile_no');
            $table->string('vehicle_model')->nullable();
            $table->string('form_type');
            $table->longText('data_form_value')->nullable();
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
        Schema::dropIfExists('carforms');
    }
}
