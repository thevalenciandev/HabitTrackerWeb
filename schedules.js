function getExistingSchedules() {
    console.log(sessionStorage.schedules)
    return sessionStorage.schedules == null ? [] : JSON.parse(sessionStorage.schedules)
}

function addSchedule(user, habit, schedule) {
    const schedules = getExistingSchedules()
    const actualSchedule = `${user}-${habit}-${schedule}`
    console.log(`Adding ${actualSchedule}... into ${schedules}}`)
    schedules.push(actualSchedule)
    sessionStorage.schedules = JSON.stringify(schedules)
    console.log(`${actualSchedule} added into ${sessionStorage.schedules}`)
}

function removeSchedule(schedule) {
    const schedules = getExistingSchedules()
    console.log(`Removing ${schedule}... from ${schedules}}`)
    sessionStorage.schedules = JSON.stringify(schedules.filter(u => u !== schedule))
    console.log(`${schedule} removed from ${sessionStorage.schedules}`)
}