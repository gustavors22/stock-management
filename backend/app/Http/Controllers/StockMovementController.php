<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrUpdateStockMovementRequest;
use App\Models\StockMovement;
use App\Services\UpdateQuantityInProductStockService;
use Illuminate\Support\Facades\DB;

class StockMovementController extends Controller
{
    public function index()
    {
        $stockMovements = StockMovement::with([
        'productStock.product', 'typeStockMovement'
        ])->get();

        return response($stockMovements);
    }

    public function show(StockMovement $stockMovement)
    {
        $stockMovement = StockMovement::with([
            'productStock.product',
            'typeStockMovement'
        ])->find($stockMovement->id);

        return response($stockMovement);
    }

    public function store(StoreOrUpdateStockMovementRequest $request)
    {
        DB::beginTransaction();

        $stockMovement = StockMovement::create($request->validated());

        $productStockQuantityIsUpdated = app(UpdateQuantityInProductStockService::class)->handle(
            $stockMovement, 
        );

        if(!$productStockQuantityIsUpdated){
            DB::rollBack();

            return response('Unable to make movement in product stock', 400);
        }

        DB::commit();

        return response($stockMovement, 201);
    }
}
