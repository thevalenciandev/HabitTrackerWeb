function getExistingHabits() {
    console.log(sessionStorage.habits)
    return sessionStorage.habits == null ? [] : JSON.parse(sessionStorage.habits)
}

function addHabit(habit) {
    const habits = getExistingHabits()
    console.log(`Adding ${habit}... into ${habits}}`)
    habits.push(habit)
    sessionStorage.habits = JSON.stringify(habits)
    console.log(`${habit} added into ${sessionStorage.habits}`)
}

function removeHabit(habit) {
    const habits = getExistingHabits()
    console.log(`Removing ${habit}... from ${sessionStorage.habits}`)
    sessionStorage.habits = JSON.stringify(habits.filter(u => u !== habit))
    console.log(`${habit} removed from ${sessionStorage.habits}`)
}