<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CashflowReportController extends Controller
{
    public function index()
    {
        return Inertia::render('Report/Cashflow');
    }
}
