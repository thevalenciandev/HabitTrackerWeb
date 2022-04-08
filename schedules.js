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