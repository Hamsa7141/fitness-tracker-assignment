// script.js
class Workout {
    constructor(exerciseType, exerciseName, duration) {
        this.exerciseType = exerciseType;
        this.exerciseName = exerciseName;
        this.duration = duration;
    }

    displaySummary() {
        return `${this.exerciseName} (${this.exerciseType}) - ${this.duration} minutes`;
    }
}

const workoutLogs = [];

function calculateTotalDuration() {
    return workoutLogs.reduce((total, workout) => total + workout.duration, 0);
}

function displayWorkoutSummary() {
    const summaryDisplay = document.querySelector('.summary-display');
    const totalDuration = calculateTotalDuration();
    summaryDisplay.textContent = `Total Workout Duration: ${totalDuration} minutes`;
}

function addWorkoutToLog(workout) {
    workoutLogs.push(workout);
    const logList = document.querySelector('.log-list');
    const logItem = document.createElement('li');
    logItem.textContent = workout.displaySummary();
    logList.appendChild(logItem);
}

const addWorkoutButton = document.getElementById('add-workout');
addWorkoutButton.addEventListener('click', () => {
    const exerciseType = document.getElementById('exercise-type').value;
    const exerciseName = document.getElementById('exercise-name').value;
    const exerciseDuration = parseInt(document.getElementById('exercise-duration').value);

    if (exerciseName && exerciseDuration) {
        const newWorkout = new Workout(exerciseType, exerciseName, exerciseDuration);
        addWorkoutToLog(newWorkout);
        displayWorkoutSummary();
    } else {
        alert('Please enter a valid exercise name and duration.');
    }
});

displayWorkoutSummary();