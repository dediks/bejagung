<?php

use App\Http\Controllers\CashflowReportController;
use App\Http\Controllers\ContributionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResidentController;
use App\Http\Controllers\ContributionReportController;
use App\Http\Controllers\Nariyah\CashflowController;
use App\Http\Controllers\TransactionController;
use App\Models\Transaction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::domain('nariyah.localhost')->group(function () {
//     Route::get('/cashflow', [CashflowController::class, 'index']);
// });

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('iuran', [ContributionReportController::class, 'index'])->name('contributions-report.index');
Route::get('kas', [CashflowReportController::class, 'index'])->name('cashflow.index');
Route::get('kas-detail', [CashflowReportController::class, 'show'])->name('cashflow.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/residents', [ResidentController::class, 'index'])->name('residents.index');
    Route::get('/residents/create', [ResidentController::class, 'create'])->name('residents.create');
    Route::post('/residents', [ResidentController::class, 'store'])->name('residents.store');
    Route::get('/residents/{resident}/edit', [ResidentController::class, 'edit'])->name('residents.edit');
    Route::patch('/residents/{resident}', [ResidentController::class, 'update'])->name('residents.update');
    Route::delete('/residents/{resident}', [ResidentController::class, 'destroy'])->name('residents.destroy');

    Route::get('/contributions', [ContributionController::class, 'index'])->name('contributions.index');
    Route::get('/contributions/create', [ContributionController::class, 'create'])->name('contributions.create');
    Route::post('/contributions', [ContributionController::class, 'store'])->name('contributions.store');
    Route::delete('/contributions/{contribution}', [ContributionController::class, 'destroy'])->name('contributions.destroy');

    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions.index');
    Route::get('/transactions/create', [TransactionController::class, 'create'])->name('transactions.create');
    Route::post('/transactions', [TransactionController::class, 'store'])->name('transactions.store');
});

require __DIR__ . '/auth.php';
