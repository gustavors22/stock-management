<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductStockController;
use App\Http\Controllers\StockMovementController;
use Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductController::class);
Route::apiResource('product-stocks', ProductStockController::class);
Route::apiResource('stock-movements', StockMovementController::class)->only('index', 'show', 'store');
