<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockMovement extends Model
{
    use HasFactory;

    protected $fillable = ['product_stock_id', 'type_stock_movement_id' ,'quantity'];

    public function productStock()
    {
        return $this->belongsTo(ProductStock::class);
    }

    public function typeStockMovement()
    {
        return $this->belongsTo(TypeStockMovement::class);
    }
}
