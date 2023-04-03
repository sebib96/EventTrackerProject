package com.skilldistillery.workouttracker.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.skilldistillery.workouttracker.entities.Workout;

@Service
@Transactional
public class WorkoutDAOImpl implements WorkoutDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Workout> findAll() {
		String jpql = "SELECT w from Workout w";
		return em.createQuery(jpql, Workout.class).getResultList();
	}

	@Override
	public Workout findById(int workoutId) {
		return em.find(Workout.class, workoutId);
	}

	@Override
	public Workout create(Workout workout) {
		if(workout.getName() == null) {
			workout.setName(null);
		}
		em.persist(workout);
		return workout;
	}

	@Override
	public Workout update(int workoutId, Workout workout) {
		Workout existing = em.find(Workout.class, workoutId);
		if(existing != null) {
			if (workout.getName() != null) {
				existing.setName(workout.getName());
			}
			workout.setDay(workout.getDay());
			workout.setGroup(workout.getGroup());
			workout.setName(workout.getName());
			workout.setReps(workout.getReps());
			workout.setRpe(workout.getRpe());
			workout.setSets(workout.getSets());
			workout.setWeight(workout.getWeight());
		}
		return existing;
	}

	@Override
	public boolean deleteById(int workoutId) {
		boolean deleted = false;
		Workout toDelete = em.find(Workout.class, workoutId);
		if(toDelete != null) {
			em.remove(toDelete);
			deleted = true;
		}
		return deleted;
	}

}
