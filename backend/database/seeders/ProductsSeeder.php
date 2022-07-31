<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{

    public function run()
    {
        $products = [
            ['id' => 1, 'name' => 'Cabo de Guitarra 2m', 'price' => 10.99],
            ['id' => 2, 'name' => 'Jogo de Corda SG', 'price' => 18.43],
            ['id' => 3, 'name' => 'Camiseta do Metalica', 'price' => 27.78],
        ];

        array_map(fn($product) => Product::updateOrCreate($product),$products);
    }
}
