package com.skilldistillery.workouttracker.services;

import java.util.List;

import com.skilldistillery.workouttracker.entities.Workout;

public interface WorkoutService {

	List<Workout> listAllWorkouts();
	Workout getById(int workoutId);
	Workout create(Workout workout);
	Workout update(int workoutId, Workout workout);
	boolean deletetById(int workoutId);
}
