<?php

namespace Database\Seeders;

use App\Models\StockMovement;
use Illuminate\Database\Seeder;

class StockMovementsSeeder extends Seeder
{

    public function run()
    {
        $stockMovements = [
            ['id' => 1, 'product_stock_id' => 1, 'type_stock_movement_id' => 1, 'quantity' => 10.0],
            ['id' => 2, 'product_stock_id' => 2, 'type_stock_movement_id' => 1, 'quantity' => 40.0],
            ['id' => 3, 'product_stock_id' => 3, 'type_stock_movement_id' => 1, 'quantity' => 20.0],
        ];

        array_map(fn($stockMovement) => StockMovement::updateOrCreate($stockMovement),$stockMovements);
    }
}
