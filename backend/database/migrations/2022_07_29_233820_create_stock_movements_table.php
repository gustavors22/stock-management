<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockMovementsTable extends Migration
{

    public function up()
    {
        Schema::create('stock_movements', function (Blueprint $table) {
            $table->id();

            $table->foreignId('product_stock_id')
                ->constrained('product_stocks')
                ->onDelete('cascade');

            $table->foreignId('type_stock_movement_id')
                ->constrained('types_stock_movement')
                ->onDelete('cascade');

            $table->float('quantity');
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('stock_movements');
    }
}
