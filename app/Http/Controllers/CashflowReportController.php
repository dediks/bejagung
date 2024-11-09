<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CashflowReportController extends Controller
{
    public function index()
    {
        $income = Transaction::where('type', Transaction::TYPE_INCOME)->sum('amount');
        $expense = Transaction::where('type', Transaction::TYPE_EXPENSE)->sum('amount');
        $incomeFromContributions = Contribution::sum('amount');
        $totalIncome = $income + $incomeFromContributions;
        $totalBalance = $totalIncome - $expense;

        $latestTransactions = Transaction::latest()->limit(10)->get();

        return Inertia::render('Report/Cashflow', [
            'income' => $totalIncome,
            'expense' => $expense,
            'total_balance' => $totalBalance,
            'latest_transactions' => $latestTransactions,
        ]);
    }

    public function show(Request $request)
    {
        $transactions = Transaction::all();

        return Inertia::render('Report/CashflowDetail', [
            'transactions' => $transactions,
        ]);
    }
}
