<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Item::class;

    public function definition(): array
    {
        return [
            'requisition_id' => fake()->randomElement(\App\Models\Requisition::pluck('id')->toArray()),
            'description' => fake()->word(),
            'quantity' => fake()->numberBetween(1, 100),
            'unit_price' => fake()->randomFloat(2, 1, 1000),
            'total_price' => fake()->randomFloat(2, 1000, 10000),
        ];
    }
}
