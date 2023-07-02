const { isWinningRoll } = require('./diceGame');
const { playDiceGame } = require('./diceGame')

describe('isWinningRoll', () => {
    it('should have an array of numbers between 2 and 12', () => {
        // const diceNums = [];
        // expect(diceNums).toEqual([2,3,4,5,6,7,8,9,10,11,12]);
        // expect(diceNums).toBeGreaterThanOrEqual(2);
        // expect(diceNums).toBeLessThanOrEqual(12);
        const diceNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        expect(diceNums).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it('should retrun true for the first roll being 7', () => {
        const winningRoll = 7;
        const result = isWinningRoll(winningRoll);
        expect(result).toBe(true);
    });

    it('should retrun true for the first roll being 11', () => {
        const winningRoll = 11;
        const result = isWinningRoll(winningRoll);
        expect(result).toBe(true);
    });

    it('should retrun false for the first roll being 2', () => {
        const losingRoll = 2;
        const result = isWinningRoll(losingRoll);
        expect(result).toBe(false);
    });

    it('should retrun false for the first roll being 3', () => {
        const losingRoll = 3;
        const result = isWinningRoll(losingRoll);
        expect(result).toBe(false);
    });

    it('should retrun false for the first roll being 12', () => {
        const losingRoll = 12;
        const result = isWinningRoll(losingRoll);
        expect(result).toBe(false);
    });
});

describe('playDiceGame', () => {
    
  it('should correctly handle a single winning roll of 7 for Player 1', () => {
    const player1 = { name: 'Alice', totalPoints: 20 }; 
    const player2 = { name: 'Bob', totalPoints: 25 };   
    playDiceGame(player1, player2, 7);
    expect(player1.totalPoints).toBe(25); 
    expect(player2.totalPoints).toBe(20); 
  });

 
  it('should correctly handle a single winning roll of 11 for Player 2', () => {
    const player1 = { name: 'Alice', totalPoints: 25 }; 
    const player2 = { name: 'Bob', totalPoints: 20 };  
    playDiceGame(player1, player2, 11);
    expect(player1.totalPoints).toBe(20); 
    expect(player2.totalPoints).toBe(25); 
  });

  
  it('should correctly handle a single losing roll of 2 for Player 1', () => {
    const player1 = { name: 'Alice', totalPoints: 25 };
    const player2 = { name: 'Bob', totalPoints: 20 }; 
    playDiceGame(player1, player2, 2);
    expect(player1.totalPoints).toBe(20); 
    expect(player2.totalPoints).toBe(25); 
  });

  it('should correctly handle a single losing roll of 3 for Player 2', () => {
    const player1 = { name: 'Alice', totalPoints: 20 }; 
    const player2 = { name: 'Bob', totalPoints: 25 };   
    playDiceGame(player1, player2, 3);
    expect(player1.totalPoints).toBe(25);
    expect(player2.totalPoints).toBe(20);  
  });

  it('should correctly handle rerolling 7 after getting 4 initially for Player 1', () => {
    const player1 = { name: 'Alice', totalPoints: 20 };
    const player2 = { name: 'Bob', totalPoints: 25 };

    playDiceGame(player1, player2, 4);
    expect(player1.totalPoints).toBe(20);
    expect(player2.totalPoints).toBe(25);
  
    playDiceGame(player1, player2, 7);
    expect(player1.totalPoints).toBe(15);
    expect(player2.totalPoints).toBe(30); 
  });
  
});