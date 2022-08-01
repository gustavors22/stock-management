<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductStockController;
use App\Http\Controllers\StockMovementController;
use App\Http\Controllers\TypeStockMovementController;
use Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductController::class);
Route::apiResource('product-stocks', ProductStockController::class);
Route::apiResource('stock-movements', StockMovementController::class)->only('index', 'show', 'store');
Route::apiResource('type-stock-movements', TypeStockMovementController::class)->only('index');
