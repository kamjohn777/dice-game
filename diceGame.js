
function isWinningRoll(CurrentPlayer, rollNumber) {
     let diceNums = [2,3,4,5,6,7,8,9,10,11,12];
    const randomRoll = Math.floor(Math.random() * diceNums.length)
    
    console.log(randomRoll)

    // function playDiceGame(randomRoll) {
    //     if (player1 = 7 || 11) {
    //         result = true
    //         console.log(result)
    //     } else if (player1 = 2 || 3 || 12) {
    //         result = false
    //         console.log(result)
    //     } else if (player1 = 4 || 5 || 6 || 8 || 9 || 10) {
    //         result = false
    //        console.log(result)
    //     }
    // }
    // for(let i = 0; i < diceNums.length; i++) {
    //     if(randomRoll) {

    //     }
    // }
    if(rollNumber === 1) {
        if(randomRoll === 7 || randomRoll === 11) {
            return `${CurrentPlayer} rolled a ${randomRoll} ${CurrentPlayer} wins!`
        } 
        else if(randomRoll === 2 || randomRoll === 3 || randomRoll === 12) {
            return `${CurrentPlayer} rolled a ${randomRoll} ${CurrentPlayer} loses!`
        }
    }
}

// const playDiceGame = (player1, player2) => {

// }

function playDiceGame(player1, player2) {

}