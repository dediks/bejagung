<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('resident')->latest()->get();

        return Inertia::render('Transaction/Index', [
            'transactions' => $transactions,
        ]);
    }

    public function create()
    {
        return Inertia::render('Transaction/Create');
    }

    public function store(StoreTransactionRequest $request)
    {
        $validated = $request->validated();

        Transaction::create($validated);

        return redirect()->route('transactions.index')->with('message', 'Transaction created.');
    }
}
