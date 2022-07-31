<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrUpdateProductStockRequest;
use App\Models\ProductStock;
use App\Models\StockMovement;

class ProductStockController extends Controller
{
    public function index()
    {
        return response(ProductStock::with('product')->get());
    }

    public function store(StoreOrUpdateProductStockRequest $request)
    {
        $reponse = ProductStock::create($request->validated());

        $reponse['stockMovement'] = StockMovement::create([
            'product_stock_id' => $reponse->id,
            'type_stock_movement_id' => 1,
            'quantity' => $reponse->quantity
        ]);

        return response($reponse, 202);
    }

    public function show(ProductStock $productStock)
    {
        return response(ProductStock::with('product')->find($productStock->id));
    }

    public function destroy(ProductStock $productStock)
    {
        return response($productStock->delete());
    }

}
