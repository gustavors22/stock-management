<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
 
    public function run()
    {
        $this->call(TypesStockMovementSeeder::class);
        $this->call(ProductsSeeder::class);
        $this->call(ProductStockSeeder::class);
        $this->call(StockMovementsSeeder::class);
    }
}
