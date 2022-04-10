class RankingPoints {
    constructor(user, points) {
        this.user = user
        this.points = points
    }

    static zero(user) {
        return new RankingPoints(user, 0)
    }

    static from(json) {
        return new RankingPoints(json.user, json.points)
    }

    plus(points) {
        return new RankingPoints(this.user, this.points + points)
    }
}

function getExistingRanking() {
    console.log(sessionStorage.ranking)
    if (sessionStorage.ranking == null) {
        return new Map()
    }
    return new Map(Object.entries(JSON.parse(sessionStorage.ranking)))
}

function addRankingPoints(user, points) {
    const rankingMap = getExistingRanking()
    console.log(`Adding ${points} points to ${user}... into ${rankingMap}}`)
    const usrRanking = rankingMap.get(user) == null ? RankingPoints.zero(user) : RankingPoints.from(rankingMap.get(user))
    rankingMap.set(user, usrRanking.plus(points))
    sessionStorage.ranking = JSON.stringify(Object.fromEntries(rankingMap))
    console.log(`${points} points added to ${user} in ${sessionStorage.ranking}`)
}