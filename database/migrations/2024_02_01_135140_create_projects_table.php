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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number');
            $table->string('name')->nullable();
            $table->date('posting_date')->default(now());
            $table->date('due_date')->nullable();
            $table->string('department')->nullable();
            $table->foreignId('employee_id')->constrained()->onDelete('cascade');
            $table->string('deposit_status')->default(0);
            $table->string('contract_status')->default(0);
            $table->string('project_manager')->nullable();
            $table->string('project_client')->nullable();
            $table->string('budget')->nullable();
            $table->string('total_cost')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
