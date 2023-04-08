window.addEventListener('load', function(e){
	console.log('script.js is updated');
	init();
	addWorkout();
});

function init(){
	console.log('in init');
	loadAllWorkouts();
}

function loadAllWorkouts(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'tracker/workouts');
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let workoutList = JSON.parse(xhr.responseText);
				displayWorkoutList(workoutList);
			}
		}	
	};
	
	xhr.send();
}

function displayWorkoutList(workoutList){
	let tbody = document.getElementById('workoutListBody');
	tbody.textContent = '';
	for (let workout of workoutList){
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		
		let td = document.createElement('td');
		td.textContent = workout.id;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = workout.name;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = workout.date;
		tr.appendChild(td);

		tr.addEventListener('click', function(e){
			e.preventDefault();
			let workoutId = e.target.parentElement.firstElementChild.textContent;
			console.log(workoutId);
			getWorkout(workoutId);
		});

	}
}

function getWorkout(workoutId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'tracker/workouts/' + workoutId);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workout = JSON.parse(xhr.responseText);
				displayWorkout(workout);
			}
		}
	};
	xhr.send();
};

function displayWorkout(workout){
	let detailDiv = document.getElementById('workoutDetails');
	detailDiv.textContent = '';

	let workoutName = document.createElement('h4');
	workoutName.textContent = workout.name;
	detailDiv.appendChild(workoutName);

	let workoutDate = document.createElement('p');
	workoutDate.textContent = "Date: " + workout.day;
	detailDiv.appendChild(workoutDate);

	let workoutMuscleGroup = document.createElement('p');
	workoutMuscleGroup.textContent = "Muscle Group: " + workout.group;
	detailDiv.appendChild(workoutMuscleGroup);

	let workoutWeight = document.createElement('p');
	workoutWeight.textContent = "Weight: " + workout.weight;
	detailDiv.appendChild(workoutWeight);

	let workoutReps = document.createElement('p');
	workoutReps.textContent = "Reps: " + workout.reps;
	detailDiv.appendChild(workoutReps);

	let workoutSets = document.createElement('p');
	workoutSets.textContent = "Sets: " + workout.sets;
	detailDiv.appendChild(workoutWeight);

	let workoutRpe = document.createElement('p');
	workoutRpe.textContent = "RPE: " + workout.rpe;
	detailDiv.appendChild(workoutRpe);
}

function addWorkout(){
	let newWorkoutDiv = document.getElementById('newWorkoutFormDiv');
	newWorkoutDiv.textContent = '';


	let newWorkoutForm = document.createElement('form');
	newWorkoutForm.setAttribute('method', 'POST');


	let workoutDay = document.createElement('input');
	workoutDay.setAttribute('type', 'date');
	workoutDay.setAttribute('placeholder', 'Day:');
	newWorkoutForm.appendChild(workoutDay);

	let workoutName = document.createElement('input');
	workoutName.setAttribute('type', 'text');
	workoutName.setAttribute('placeholder', 'Workout Name');
	newWorkoutForm.appendChild(workoutName);


	let workoutMuscleGroup = document.createElement('input');
	workoutMuscleGroup.setAttribute('type', 'text');
	workoutMuscleGroup.setAttribute('placeholder', 'Muscle Group');
	newWorkoutForm.appendChild(workoutMuscleGroup);

	let workoutReps = document.createElement('input');
	workoutReps.setAttribute('type', 'text');
	workoutReps.setAttribute('placeholder', 'Reps');
	newWorkoutForm.appendChild(workoutReps);

	let workoutWeight = document.createElement('input');
	workoutWeight.setAttribute('type', 'text');
	workoutWeight.setAttribute('placeholder', 'Weight');
	newWorkoutForm.appendChild(workoutWeight);

	let workoutSets = document.createElement('input');
	workoutSets.setAttribute('type', 'text');
	workoutSets.setAttribute('placeholder', 'Sets');
	newWorkoutForm.appendChild(workoutSets);

	let workoutRpe = document.createElement('input');
	workoutRpe.setAttribute('type', 'text');
	workoutRpe.setAttribute('placeholder', 'RPE');
	newWorkoutForm.appendChild(workoutRpe);

	let submitWorkout = document.createElement('input');
	submitWorkout.setAttribute('type', 'submit');
	submitWorkout.setAttribute('value', 'Add Workout');

	newWorkoutDiv.appendChild(newWorkoutForm);
	newWorkoutDiv.appendChild(submitWorkout);


}

