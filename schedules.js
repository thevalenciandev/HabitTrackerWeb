class Schedule {
    constructor(user, habit, days) {
        this.user = user
        this.habit = habit
        this.days = days
    }

    static from(str) {
        const schedule = str.split("|")
        return new Schedule(schedule[0],  schedule[1], schedule[2])
    }
}

function getExistingSchedules() {
    console.log(sessionStorage.schedules)
    return sessionStorage.schedules == null ? [] : JSON.parse(sessionStorage.schedules)
}

function addSchedule(schedule) {
    const schedules = getExistingSchedules()
    console.log(`Adding ${schedule}... into ${schedules}}`)
    schedules.push(schedule)
    sessionStorage.schedules = JSON.stringify(schedules)
    console.log(`${schedule} added into ${sessionStorage.schedules}`)
}

function removeSchedule(schedule) {
    const schedules = getExistingSchedules()
    console.log(`Removing ${schedule}... from ${schedules}}`)
    sessionStorage.schedules = JSON.stringify(schedules.filter(u => u !== schedule))
    console.log(`${schedule} removed from ${sessionStorage.schedules}`)
}