var Sudoku = {
  makeBoard: function(puzzleString){
    var array = puzzleString.split('')
    gameBoard = []
    var row = []
    for ( var i=0; i < array.length; i++ ){
      row.push(parseInt(array[i]))
      if (row.length === 9) {
        gameBoard.push(row)
        var row = []
      }
    }
    return gameBoard
  },

  getRow: function(row,col){
    return gameBoard[row]
  },

  getCol: function(row,col){
    column = []
    for(var i=0; i < gameBoard.length; i++){
      column.push(gameBoard[i][col])
    }
    return column
  },

  getBox: function(row,col){
    var boxNum = (3*(Math.floor(row/3))) + Math.floor(col/3)
    var box = []
    for(r = 0; r < gameBoard.length; r++ ){
      for(c = 0; c < gameBoard[r].length; c++){
        if ((3*(Math.floor(r/3))) + Math.floor(c/3) === boxNum){
          box.push(gameBoard[r][c])
        }
      }
    }
    return box
  }

}

