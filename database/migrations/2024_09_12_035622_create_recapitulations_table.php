<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recapitulations', function (Blueprint $table) {
            $table->id();
            $table->date('month');
            $table->integer('total_income');
            $table->integer('total_expense');
            $table->integer('ending_balance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recapitulations');
    }
};
