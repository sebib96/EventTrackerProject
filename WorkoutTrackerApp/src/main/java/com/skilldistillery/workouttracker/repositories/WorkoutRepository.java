package com.skilldistillery.workouttracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workouttracker.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {

	Workout findById(int workoutId);
}
