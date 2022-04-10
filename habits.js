class Habit {
    constructor(name, points) {
        this.name = name
        this.points = points
    }

    static from(json) {
        return new Habit(json.name, parseInt(json.points))
    }
}

function getExistingHabits() {
    console.log(sessionStorage.habits)
    return sessionStorage.habits == null 
        ? new Map() 
        : new Map(Object.entries(JSON.parse(sessionStorage.habits)))
}

function addHabit(habit, points) {
    const habits = getExistingHabits()
    console.log(`Adding ${habit} with ${points} points... into ${habits}}`)
    habits.set(habit, new Habit(habit, points))
    sessionStorage.habits = JSON.stringify(Object.fromEntries(habits))
    console.log(`${habit} added into ${sessionStorage.habits}`)
}

function removeHabit(habit) {
    const habits = getExistingHabits()
    console.log(`Removing ${habit}... from ${sessionStorage.habits}`)
    habits.delete(habit)
    sessionStorage.habits = JSON.stringify(Object.fromEntries(habits))
    console.log(`${habit} removed from ${sessionStorage.habits}`)
}