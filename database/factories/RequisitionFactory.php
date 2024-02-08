<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Requisition>
 */
class RequisitionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'serial_number' => fake()->unique()->randomNumber(8),
            'project_id' => fake()->randomElement(\App\Models\Project::pluck('id')->toArray()),
            'date' => fake()->dateTimeBetween('-1 years', 'now'),
            'employee_id' => fake()->randomElement(\App\Models\Employee::pluck('id')->toArray()),
            'department' => fake()->word(),
            'vendor' => fake()->company(),
            'total_cost' => fake()->randomFloat(2, 1000, 10000),
        ];
    }
}
