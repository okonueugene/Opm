<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Task::class;
    
    public function definition(): array
    {
        return [
            'project_id' => fake()->randomElement(\App\Models\Project::pluck('id')->toArray()),
            'description' => fake()->word(),
            'name' => fake()->word(),
        ];
    }
}
