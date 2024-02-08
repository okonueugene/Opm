<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Project::class;

    public function definition(): array
    {
        return [
            'serial_number' => fake()->unique()->randomNumber(8),
            'name' => fake()->word(),
            'due_date' => fake()->dateTimeBetween('-1 years', 'now'),
            'department' => fake()->word(),
            'deposit_status' => fake()->randomElement([1,0]),
            'contract_status' => fake()->randomElement([1,0]),
            'project_manager' => fake()->name(),
            'employee_id' => fake()->randomElement(\App\Models\Employee::pluck('id')->toArray()),
            'total_cost' => fake()->randomFloat(2, 100000, 10000000),

        ];
    }
}
