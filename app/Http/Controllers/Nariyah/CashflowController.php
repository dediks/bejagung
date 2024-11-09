<?php

namespace App\Http\Controllers\Nariyah;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CashflowController extends Controller
{
    public function index()
    {
        return view('nariyah.cashflow.index');
    }
}
