<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'transaction_date',
        'description',
        'type',
        'resident_id',
    ];

    const TYPE_EXPENSE = 0;
    const TYPE_INCOME = 1;

    public function setTransactionDateAttribute($value)
    {
        $this->attributes['transaction_date'] = Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    public function resident()
    {
        return $this->belongsTo(Resident::class);
    }
}
