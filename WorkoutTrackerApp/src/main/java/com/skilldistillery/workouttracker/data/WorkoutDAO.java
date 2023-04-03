package com.skilldistillery.workouttracker.data;

import java.util.List;

import com.skilldistillery.workouttracker.entities.Workout;

public interface WorkoutDAO {
List<Workout> findAll();
Workout findById(int workoutId);
Workout create(Workout workout);
Workout update(int workoutId, Workout workout);
boolean deleteById(int workoutId);
}
