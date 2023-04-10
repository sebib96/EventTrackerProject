window.addEventListener('load', function(e){
	console.log('script.js is updated 2');
	init();
	addWorkout();
	deleteWorkout();
});

linebreak = document.createElement('br');

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
		
		let workoutId = document.createElement('td');
		workoutId.textContent = workout.id;
		tr.appendChild(workoutId);
		
		let workoutName = document.createElement('td');
		workoutName.textContent = workout.name;
		tr.appendChild(workoutName);

		let workoutDate = document.createElement('td');
		workoutDate.textContent = workout.date;
		tr.appendChild(workoutDate);

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


	// UPDATE WORKOUT DIV
	let updateWorkoutDiv = document.createElement('div');
	let updateWorkoutTitle = document.createElement('h3');
	updateWorkoutTitle.textContent = "Update Workout";
	updateWorkoutDiv.appendChild(updateWorkoutTitle);
	detailDiv.appendChild(updateWorkoutDiv);

	let updateWorkoutForm = document.createElement('form');
	updateWorkoutForm.setAttribute('method', 'PUT');

	let updateWorkoutDate = document.createElement('input');
	let updateWorkoutDateTitle = document.createElement('p');
	updateWorkoutDateTitle.textContent = 'Date:';
	updateWorkoutDate.setAttribute('type', 'date');
	updateWorkoutDiv.appendChild(updateWorkoutDateTitle);
	updateWorkoutDiv.appendChild(updateWorkoutDate);

	let updateWorkoutName = document.createElement('input');
	updateWorkoutName.setAttribute('type', 'text');
	let updateWorkoutNameTitle = document.createElement('p');
	updateWorkoutNameTitle.textContent = 'Name:';
	updateWorkoutDiv.appendChild(updateWorkoutNameTitle);
	updateWorkoutDiv.appendChild(updateWorkoutName);

	let updateWorkoutGroup = document.createElement('input');
	updateWorkoutGroup.setAttribute('type','text');
	let updateWorkoutGroupTitle = document.createElement('p');
	updateWorkoutGroupTitle.textContent = 'Group:';
	updateWorkoutDiv.appendChild(updateWorkoutGroupTitle);
	updateWorkoutDiv.appendChild(updateWorkoutGroup);

	let updateWorkoutWeight = document.createElement('input');
	updateWorkoutWeight.setAttribute('type','text');
	let updateWorkoutWeightTitle = document.createElement('p');
	updateWorkoutWeightTitle.textContent = 'Weight:';
	updateWorkoutDiv.appendChild(updateWorkoutWeightTitle);
	updateWorkoutDiv.appendChild(updateWorkoutWeight);

	let updateWorkoutReps = document.createElement('input');
	updateWorkoutReps.setAttribute('type', 'text');
	let updateWorkoutRepsTitle = document.createElement('p');
	updateWorkoutRepsTitle.textContent = 'Reps:';
	updateWorkoutDiv.appendChild(updateWorkoutRepsTitle);
	updateWorkoutDiv.appendChild(updateWorkoutReps);

	let updateWorkoutSets = document.createElement('input');
	updateWorkoutSets.setAttribute('type', 'text');
	let updateWorkoutSetsTitle = document.createElement('p');
	updateWorkoutSetsTitle.textContent = 'Sets:';
	updateWorkoutDiv.appendChild(updateWorkoutSetsTitle);
	updateWorkoutDiv.appendChild(updateWorkoutSets);

	let updateWorkoutRpe = document.createElement('input');
	updateWorkoutRpe.setAttribute('type', 'text');
	let updateWorkoutRpeTitle = document.createElement('p');
	updateWorkoutRpeTitle.textContent = 'RPE:';
	updateWorkoutDiv.appendChild(updateWorkoutRpeTitle);
	updateWorkoutDiv.appendChild(updateWorkoutRpe);

	let updateWorkout = document.createElement('input');
	updateWorkout.setAttribute('type', 'submit');
	updateWorkout.setAttribute('value', 'Update Workout');

	let deleteWorkoutForm = document.createElement('form');
	deleteWorkoutForm.setAttribute('method', 'DELETE');

	let deleteWorkoutBtn = document.createElement('input');
	deleteWorkoutBtn.setAttribute('type', 'submit');
	deleteWorkoutBtn.setAttribute('value', 'Delete Workout');

	detailDiv.appendChild(deleteWorkoutForm);
	detailDiv.appendChild(deleteWorkoutBtn);
}

function addWorkout(){
	let newWorkoutDiv = document.getElementById('newWorkoutFormDiv');
	newWorkoutDiv.textContent = '';
	let newWorkoutTitle = document.createElement("h3");
	newWorkoutTitle.textContent = "Log Workout";
	newWorkoutDiv.appendChild(newWorkoutTitle);

	let newWorkoutForm = document.createElement('form');
	newWorkoutForm.setAttribute('method', 'POST');

	let workoutDay = document.createElement('input');
	workoutDay.setAttribute('type', 'date');
	workoutDay.setAttribute('placeholder', 'Day:');
	newWorkoutForm.appendChild(document.createElement('br'));
	newWorkoutForm.appendChild(workoutDay);

	let workoutName = document.createElement('input');
	workoutName.setAttribute('type', 'text');
	workoutName.setAttribute('placeholder', 'Workout Name');
	newWorkoutForm.appendChild(document.createElement('br'));
	newWorkoutForm.appendChild(workoutName);


	let workoutMuscleGroup = document.createElement('input');
	workoutMuscleGroup.setAttribute('type', 'text');
	workoutMuscleGroup.setAttribute('placeholder', 'Muscle Group');
	newWorkoutForm.appendChild(document.createElement('br'));
	newWorkoutForm.appendChild(workoutMuscleGroup);

	let workoutReps = document.createElement('input');
	workoutReps.setAttribute('type', 'text');
	workoutReps.setAttribute('placeholder', 'Reps');
	newWorkoutForm.appendChild(workoutReps);

	let workoutWeight = document.createElement('input');
	workoutWeight.setAttribute('type', 'text');
	workoutWeight.setAttribute('placeholder', 'Weight');
	newWorkoutForm.appendChild(document.createElement('br'));
	newWorkoutForm.appendChild(workoutWeight);

	let workoutSets = document.createElement('input');
	workoutSets.setAttribute('type', 'text');
	workoutSets.setAttribute('placeholder', 'Sets');
	newWorkoutForm.appendChild(workoutSets);

	let workoutRpe = document.createElement('input');
	workoutRpe.setAttribute('type', 'text');
	workoutRpe.setAttribute('placeholder', 'RPE');
	newWorkoutForm.appendChild(document.createElement('br'));
	newWorkoutForm.appendChild(workoutRpe);


	let submitWorkout = document.createElement('input');
	submitWorkout.setAttribute('type', 'submit');
	submitWorkout.setAttribute('value', 'Add Workout');

	newWorkoutDiv.appendChild(newWorkoutForm);
	newWorkoutDiv.appendChild(submitWorkout);

};


