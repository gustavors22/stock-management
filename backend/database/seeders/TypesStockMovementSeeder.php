<?php

namespace Database\Seeders;

use App\Models\TypeStockMovement;
use Illuminate\Database\Seeder;

class TypesStockMovementSeeder extends Seeder
{

    public function run()
    {   
        $typesStockMovements = [
            ['id' => 1, 'description' => 'ENTRADA'],
            ['id' => 2, 'description' => 'RETIRADA'],
        ];

        array_map(fn($type) => TypeStockMovement::updateOrCreate($type),$typesStockMovements);
    }
}
