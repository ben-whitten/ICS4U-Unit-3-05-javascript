/*
* The Main program is a recreation of the magic square program.
*
* @author  Ben Whitten
* @version 1.0
* @since   2021-1-8
*/

/////////////////////////////////////////////////////////////////////////////
/**
 * This function prints the magic squares.
 */
function printSquare(printList) {
  var s = "";
  for (var printCounter = 0; printCounter < printList.length; printCounter++) {
    s += printList[printCounter] + " ";
    if ((printCounter + 1) % 3 == 0) {
      console.log(s);
      s = ""
    } else {
      continue;
    }
  }
  console.log("=====");
}

/////////////////////////////////////////////////////////////////////////////
/**
 * This function finds the magic squares.
 */
function solveSquares(magicSquare, indexList, index) {
  for (var counter = 0; counter < magicSquare.length; counter++) {
    if (indexList[counter] == 0) {
      magicSquare[counter] = index;
      indexList[counter] = 1;
        if (index < 9) {
        solveSquares(magicSquare, indexList, index + 1);
      } else {
        if (msSolve(magicSquare) == true) {
          printSquare(magicSquare);
        }
      }

      indexList[counter] = 0;
    }
  }
}

  /////////////////////////////////////////////////////////////////////////////
/**
 * This function solves the square.
 */
function msSolve(magicSquare) {
  //Horizontal
  var check = magicSquare[0] + magicSquare[1] + magicSquare[2];
  if (check != 15) {
    return false;
  }
  check = magicSquare[3] + magicSquare[4] + magicSquare[5];
  if (check != 15) {
    return false;
  }
  check = magicSquare[6] + magicSquare[7] + magicSquare[8];
  if (check != 15) {
    return false;
  }
  
  //Vertical
  check = magicSquare[0] + magicSquare[3] + magicSquare[6];
  if (check != 15) {
    return false;
  }
  check = magicSquare[1] + magicSquare[4] + magicSquare[7];
  if (check != 15) {
    return false;
  }
  check = magicSquare[2] + magicSquare[5] + magicSquare[8];
  if (check != 15) {
    return false;
  }
  
  //Diagonal
  check = magicSquare[0] + magicSquare[4] + magicSquare[8];
  if (check != 15) {
    return false;
  }
  check = magicSquare[2] + magicSquare[4] + magicSquare[6];
  if (check != 15) {
    return false;
  }
  
  return true;
}

/////////////////////////////////////////////////////////////////////////////

/**
 * This function calls the other functions.
 */

var firstList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var secondList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Printing the inital dividing line
console.log("=====");

solveSquares(firstList, secondList, 1);
