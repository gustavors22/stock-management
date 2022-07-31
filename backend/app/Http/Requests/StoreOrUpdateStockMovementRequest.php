<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateStockMovementRequest extends FormRequest
{
    public function rules()
    {
        return [ 
            'product_stock_id' => 'required|exists:product_stocks,id',
            'type_stock_movement_id' => 'required|exists:types_stock_movement,id',
            'quantity' => 'required|numeric|gt:0'
        ];
    }
}