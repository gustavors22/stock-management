<?php

namespace App\Services;

use App\Models\ProductStock;
use App\Models\StockMovement;

class UpdateQuantityInProductStockService 
{
    public function handle(StockMovement $stockMovement): bool
    {
        if($stockMovement->typeStockMovement->description == "ENTRADA"){
            return $this->incrementQuantity(
                $stockMovement->productStock,
                $stockMovement->quantity
            );
        }

        return $this->decrementQuantity(
            $stockMovement->productStock,
            $stockMovement->quantity
        );
    }

    private function incrementQuantity(ProductStock $productStock, int $quantity): bool
    {
        return $productStock->update([
            'quantity' => $productStock->quantity + $quantity
        ]);
    }

    private function decrementQuantity(ProductStock $productStock, int $quantity): bool
    {
        $newQuantity = $productStock->quantity - $quantity;

        if($newQuantity < 0){
            return false;
        }

        return $productStock->update([
            'quantity' => $productStock->quantity - $quantity
        ]);
    }
}