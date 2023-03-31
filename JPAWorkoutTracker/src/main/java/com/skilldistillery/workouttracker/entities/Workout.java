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


//----//

public Workout() {
	
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

@Override
public String toString() {
	return "Workout [id=" + id + ", group=" + group + "]";
}

@Override
public int hashCode() {
	return Objects.hash(group, id);
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
	return Objects.equals(group, other.group) && id == other.id;
}


}
