<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypesStockMovementTable extends Migration
{

    public function up()
    {
        Schema::create('types_stock_movement', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('types_stock_movement');
    }
}
