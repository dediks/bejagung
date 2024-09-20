<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contribution extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'resident_id',
        'payment_date',
    ];

    public function setPaymentDateAttribute($value)
    {
        $this->attributes['payment_date'] = Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    public function resident()
    {
        return $this->belongsTo(Resident::class);
    }
}
