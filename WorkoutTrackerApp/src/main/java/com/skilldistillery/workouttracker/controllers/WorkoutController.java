package com.skilldistillery.workouttracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workouttracker.data.WorkoutDAO;
import com.skilldistillery.workouttracker.entities.Workout;
import com.skilldistillery.workouttracker.services.WorkoutService;

@RestController
@RequestMapping("tracker")
public class WorkoutController {

	@Autowired
	private WorkoutService workoutService;

	@Autowired
	WorkoutDAO workoutDao;

	@GetMapping("workouts")
	public List<Workout> getWorkouts() {
		return workoutService.listAllWorkouts();
	}

	@PostMapping("workouts")
	public Workout createWorkout(@RequestBody Workout workout, HttpServletRequest req, HttpServletResponse res) {
		workout = workoutDao.create(workout);
		res.setStatus(201);
		StringBuffer url = req.getRequestURL();
		url.append("/").append(workout.getId());
		res.setHeader("Location", null);
		return workout;
	}

	@PutMapping("workouts/{workoutId}")
	public Workout updateWorkout(@PathVariable int workoutId, @RequestBody Workout workout,
			HttpServletResponse res) {

		try {
			workout = workoutDao.update(workoutId, workout);
			if (workout == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
			workout = null;
		}
		return workout;
	}
	
	@DeleteMapping("workouts/{workoutId}")
	public void deleteWorkout(@PathVariable int workoutId, HttpServletResponse res) {
		try {
			if(workoutDao.deleteById(workoutId)) {
				res.setStatus(0);
			} else
				res.setStatus(404);
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
	}
}
