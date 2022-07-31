<?php

namespace Database\Seeders;

use App\Models\ProductStock;
use Illuminate\Database\Seeder;

class ProductStockSeeder extends Seeder
{
    public function run()
    {
        $productsInStock = [
            ['id' => 1, 'product_id' => 1, 'quantity' => 10.0],
            ['id' => 2, 'product_id' => 2, 'quantity' => 40.0],
            ['id' => 3, 'product_id' => 3, 'quantity' => 20.0],
        ];

        array_map(fn($productInStock) => ProductStock::updateOrCreate($productInStock),$productsInStock);
    }
}
