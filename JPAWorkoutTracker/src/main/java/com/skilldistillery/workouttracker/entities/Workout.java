package com.skilldistillery.workouttracker.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Workout {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name="muscle_group")
	private String group; 

	private String day;
	
	private Double weight;
	
	private Integer reps;
	
	private String name;
	
	private Integer rpe;
	
	private Integer sets;

//----//

public Workout() {
	
}

public Workout(int id, String group, String day, Double weight, Integer reps, String name, Integer rpe, Integer sets) {
	super();
	this.id = id;
	this.group = group;
	this.day = day;
	this.weight = weight;
	this.reps = reps;
	this.name = name;
	this.rpe = rpe;
	this.sets = sets;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getGroup() {
	return group;
}

public void setGroup(String group) {
	this.group = group;
}

public String getDay() {
	return day;
}

public void setDay(String day) {
	this.day = day;
}

public Double getWeight() {
	return weight;
}

public void setWeight(Double weight) {
	this.weight = weight;
}

public Integer getReps() {
	return reps;
}

public void setReps(Integer reps) {
	this.reps = reps;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public Integer getRpe() {
	return rpe;
}

public void setRpe(Integer rpe) {
	this.rpe = rpe;
}

public Integer getSets() {
	return sets;
}

public void setSets(Integer sets) {
	this.sets = sets;
}

@Override
public int hashCode() {
	return Objects.hash(day, group, id, name, reps, rpe, sets, weight);
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Workout other = (Workout) obj;
	return Objects.equals(day, other.day) && Objects.equals(group, other.group) && id == other.id
			&& Objects.equals(name, other.name) && Objects.equals(reps, other.reps) && Objects.equals(rpe, other.rpe)
			&& Objects.equals(sets, other.sets) && Objects.equals(weight, other.weight);
}

@Override
public String toString() {
	return "Workout [id=" + id + ", group=" + group + ", day=" + day + ", weight=" + weight + ", reps=" + reps
			+ ", name=" + name + ", rpe=" + rpe + ", sets=" + sets + "]";
}




}
