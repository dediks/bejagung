<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResidentRequest;
use App\Models\Resident;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Resident/Index', [
            'residents' => Resident::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Resident/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResidentRequest $request)
    {
        Resident::create($request->validated());

        return to_route('residents.index')->with('message', 'Data warga berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Resident $resident)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resident $resident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resident $resident)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resident $resident)
    {
        $resident->delete();

        return to_route('residents.index')->with('message', 'Data warga berhasil dihapus.');
    }
}
