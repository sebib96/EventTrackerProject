window.addEventListener('load', function(e){
	console.log('script.js is loaded');
	init();
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

		tr.addEventListener('click', function(e){
			e.preventDefault();
			let workoutId = e.target.parentElement.firstElementChild.textContent;
			console.log(workoutId);
			getWorkout(workoutId);
		});
		
		let td = document.createElement('td');
		td.textContent = workout.id;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = workout.name;
		tr.appendChild(td);


	}
}

function getWorkout(workoutId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'tracker/workouts' + workoutId);
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
	let h2 = document.createElement('h2');
	h2.textContent = workout.name;
	detailDiv.appendChild(h2);
}

