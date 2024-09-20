<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContributionRequest;
use App\Http\Requests\UpdateContributionRequest;
use App\Models\Contribution;
use App\Models\Resident;
use Inertia\Inertia;

class ContributionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contributions = Contribution::with('resident')->latest()->get();

        return Inertia::render('Contribution/Index', [
            'contributions' => $contributions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $residents = Resident::select('id as value', 'name as label')->get();

        return Inertia::render('Contribution/Create', [
            'residents' => fn() => $residents,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContributionRequest $request)
    {
        Contribution::create($request->validated());

        return redirect()->route('contributions.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contribution $contribution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contribution $contribution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContributionRequest $request, Contribution $contribution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contribution $contribution)
    {
        $contribution->delete();

        return redirect()->route('contributions.index')->with('message', 'Data iuran berhasil dihapus.');
    }
}
