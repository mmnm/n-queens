/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var findNRooksSolutionUtility = function(board, col){

    if (col >= n) {
      return true;
    }

    for (var row = 0; row < n; row ++) {

      board.togglePiece(row, col);

      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
        if(findNRooksSolutionUtility(board, col+1)) {
          return true;
        }
      }
      board.togglePiece(row, col);    
    }

  };

  var solution = new Board(_(_.range(n)).map(function() { return _(_.range(n)).map(function() { return 0; }); }));


  findNRooksSolutionUtility(solution, 0);
  solution = solution.rows(); 
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

var countNRooksSolutionsUtility = function(board, col){

    if (col >= n) {
      solutionCount++;
      return true;
    }

    for (var row = 0; row < n; row ++) {

      board.togglePiece(row, col);

      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
        countNRooksSolutionsUtility(board, col+1);
      }
      board.togglePiece(row, col);    
    }

  };

  var solution = new Board(_(_.range(n)).map(function() { return _(_.range(n)).map(function() { return 0; }); }));


  countNRooksSolutionsUtility(solution, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var findNQueensSolutionUtility = function(board, col){

    if (col < 0) {
      return true;
    }

    for (var row = 0; row < n; row ++) {

      board.togglePiece(row, col);

      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col) && !board.hasMajorDiagonalConflictAt(col-row) && !board.hasMinorDiagonalConflictAt(col+row)) {
        if(findNQueensSolutionUtility(board, col-1)) {
          return true;
        }
      }
      board.togglePiece(row, col);    
    }

  };

  var solution = new Board(_(_.range(n)).map(function() { return _(_.range(n)).map(function() { return 0; }); }));
  findNQueensSolutionUtility(solution, n - 1);
  solution = solution.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var findNQueensSolutionUtility = function(board, col){

    if (col < 0) {
      solutionCount++;
      return true;
    }

    for (var row = 0; row < n; row ++) {

      board.togglePiece(row, col);

      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col) && !board.hasMajorDiagonalConflictAt(col-row) && !board.hasMinorDiagonalConflictAt(col+row)) {
        findNQueensSolutionUtility(board, col-1);
      }
      board.togglePiece(row, col);    
    }

  };

  var solution = new Board(_(_.range(n)).map(function() { return _(_.range(n)).map(function() { return 0; }); }));
  findNQueensSolutionUtility(solution, n - 1);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
