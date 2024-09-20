<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use App\Models\Resident;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContributionReportController extends Controller
{
    public function index(Request $request)
    {
        $year =  $request->selected_year ?? Carbon::now()->year;
        $month = $request->selected_month ? (int)$request->selected_month : Carbon::now()->month;

        $resicentContributions = Resident::with(['contributions' => function ($query) use ($year, $month) {
            $query->whereYear('payment_date', $year)
                ->whereMonth('payment_date', $month);
        }])->get();

        return Inertia::render('Report/Contribution', [
            'contributions' => fn() => $resicentContributions,
            'current_year' => $year,
            'current_month' => $month,
            'total_contributions' => $resicentContributions->sum(function ($resident) {
                return $resident->contributions->sum('amount');
            }),
            'total_data' => $resicentContributions->count(),
            'total_resident_paid' => $resicentContributions->filter(function ($resident) {
                return $resident->contributions->count() > 0;
            })->count(),
        ]);
    }
}
