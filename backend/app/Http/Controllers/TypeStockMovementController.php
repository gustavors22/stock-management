<?php

namespace App\Http\Controllers;

use App\Models\TypeStockMovement;

class TypeStockMovementController extends Controller
{
    public function index()
    {
        return response(TypeStockMovement::all());
    }
}