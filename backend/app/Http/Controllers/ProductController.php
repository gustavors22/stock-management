<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrUpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response(Product::all());
    }

    public function store(StoreOrUpdateProductRequest $request)
    {
        $product = Product::create($request->validated());
        return response($product, 201);
    }

    public function show(Product $product)
    {
        return response($product);
    }

    public function update(StoreOrUpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return response($product);
    }

    public function destroy(Product $product)
    {
        return response($product->delete());
    }
}
