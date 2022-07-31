<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateProductStockRequest extends FormRequest
{
    public function rules()
    {
        return [ 
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|numeric|gt:0'
        ];
    }
}