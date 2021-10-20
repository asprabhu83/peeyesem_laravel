<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarHighlightPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_highlight_posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('highlight_id');
            $table->string('post_title');
            $table->text('post_description');
            $table->string('post_image');
            $table->timestamps();
        });
        Schema::table('car_highlight_posts', function (Blueprint $table) {
            $table->foreign('highlight_id')
                ->references('id')->on('car_highlights')
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
        Schema::dropIfExists('car_highlight_posts');
    }
}
