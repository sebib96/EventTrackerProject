package com.skilldistillery.workouttracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workouttracker.entities.Workout;
import com.skilldistillery.workouttracker.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	private WorkoutRepository workoutRepo;

	@Override
	public List<Workout> listAllWorkouts() {
		return workoutRepo.findAll();
	}

	@Override
	public Workout getById(int workoutId) {
		return workoutRepo.findById(workoutId);
	}

	@Override
	public Workout create(Workout workout) {
		
		return null;
	}

	@Override
	public Workout update(int workoutId, Workout workout) {

		return null;
	}

	@Override
	public boolean deletetById(int workoutId) {

		return false;
	}

}
