var puzzleString = "609238745274561398853947621486352179792614583531879264945723816328196457167485932"

describe("Board maker", function(){
  it("should take a string and return an array of nine arrays", function(){
    var makeBoardResult = Sudoku.makeBoard(puzzleString)
    expect(makeBoardResult.length).toEqual(9);
  })

  it("should return nine arrays of numbers from the string", function(){
    var makeBoardResult = Sudoku.makeBoard(puzzleString)
    var checkNumIndex = randIndex(makeBoardResult[0])
    expect(makeBoardResult[0][checkNumIndex]).toEqual(parseInt(puzzleString[checkNumIndex]));
  })
})

describe("getRow", function(){
  it("should return the row of the current number", function(){
    var gameBoard = Sudoku.makeBoard(puzzleString)
    expect(Sudoku.getRow(0,0)).toEqual([6,0,9,2,3,8,7,4,5])
  })

})

describe("getCol", function(){
  it("should return the column of the current number", function(){
    var gameBoard = Sudoku.makeBoard(puzzleString)
    expect(Sudoku.getCol(0,0)).toEqual([6,2,8,4,7,5,9,3,1])
  })
})

describe("getBox", function(){
  it("should return the box of the current number", function(){
    var gameBoard = Sudoku.makeBoard(puzzleString)
    expect(Sudoku.getBox(0,0)).toEqual([6,0,9,2,7,4,8,5,3])
  })
})


function randIndex(array){
  return Math.floor(Math.random()*array.length)
}

// check row (row, column){
//   is 2 in board[0]
//   num = board[row][column]
// }

// function iterator(board){
//   for(i = 0; i < board.length; i++){
//     for(j = 0; i < board[i].length; j++)
//       board[i][j]
//       row = board[i]
//   }
// }