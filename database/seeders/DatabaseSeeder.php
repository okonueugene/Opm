<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //call the seeder class
        $this->call([
            UserSeeder::class,
        ]);

        \App\Models\User::factory(10)->create();
        \App\Models\Employee::factory(15)->create();
        \App\Models\Project::factory(30)->create();
        \App\Models\Requisition::factory(30)->create();
        \App\Models\Item::factory(100)->create();
        \App\Models\Task::factory(65)->create();


    }
}
