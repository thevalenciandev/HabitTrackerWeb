function getExistingUsers() {
    console.log(sessionStorage.users)
    return sessionStorage.users == null ? [] : JSON.parse(sessionStorage.users)
}

function addUser(user) {
    const users = getExistingUsers()
    console.log(`Adding ${user}... into ${users}}`)
    users.push(user)
    sessionStorage.users = JSON.stringify(users)
    console.log(`${user} added into ${sessionStorage.users}`)
}

function removeUser(user) {
    const users = getExistingUsers()
    console.log(`Removing ${user}... from ${users}}`)
    sessionStorage.users = JSON.stringify(users.filter(u => u !== user))
    console.log(`${user} removed from ${sessionStorage.users}`)
}