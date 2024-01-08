let resultRankedPoints = rankedPoints(105, 10)
let rankName = rank(resultRankedPoints)
console.log(`O herói tem saldo de ${resultRankedPoints} e está no nível ${rankName}`)

function rankedPoints(win, lose) {
    return win - lose
}

function rank(resultRankedPoints) {
    let whatRank
    if (resultRankedPoints < 10) {
        whatRank = "Ferro"
    } else if (resultRankedPoints >= 11 && resultRankedPoints <= 20) {
        whatRank = "Bronze"
    } else if (resultRankedPoints >= 21 && resultRankedPoints <= 50) {
        whatRank = "Prata"
    } else if (resultRankedPoints >= 51 && resultRankedPoints <= 80) {
        whatRank = "Ouro"
    } else if (resultRankedPoints >= 81 && resultRankedPoints <= 90) {
        whatRank = "Diamante"
    } else if (resultRankedPoints >= 91 && resultRankedPoints <= 100) {
        whatRank = "Lendário"
    } else if (resultRankedPoints >= 101) {
        whatRank = "Imortal"
    } else {
        whatRank = "Nível de herói inexistente"
    }
    return whatRank
}