console.log('HELLO');

// const initArray1 = [2, 4, 4, 4,]; // ===========>>> [null, 2, 8, 2]
// const initArray2 = [2, 2, 4, 2,]; // ===========>>> [null, null, 2, 4]
// const initArray3 =  [8, 2, 2,2,]; // ===========>>> [null, null, null, 16]
// const initArray4 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]
// const initArray5 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]


const gameBoard = [////////////////////////[
  [null,  8,      null,   null],////////////////[4, 2, null, null],
  [2,     null,   null,   16],///////////////////[null, null, null, null],
  [2,     2,      null,   null],//////////////////////[null, null, null, null],
  [null,  2,      4,      16]/////////////////[null, null, null, null]
];/////////////////////////////////////////];
// console.log('g', gameBoard);

// const moveTop = (arr) => {
//   for(let r = 0; r < arr.length; r++){//достала массив
//     const newArr = arr[r];
//     console.log('>>>..', newArr);
//   for(let c = 0; c < newArr.length; c++){//прохожусь по массиву который достала
//     if (newArr[r][c] !== null) {

//     }
//   }
// }
//   const sum = arr.filter(item => item !== null);
//   while (sum.length < 4) {
//     sum.push(null);
//   }
//   return sum;
// }

// const moveTop = (arr) => {
//   for(let r = 0; r < arr.length; r++){//достала массив
//     const newArr = arr[r];
//     console.log('>>>..', arr[r]);
//   for(let c = 0; c < arr.length; c++){//прохожусь по массиву который достала
//     if (arr[r][c] !== null) {
//       newArr.push(arr[r][c]);
//       console.log('newArr', newArr);
//     }
//   }
//   }
//   while (arr.length < 4) {
//     arr.push(null);
//   }
//   return arr;
// }

// function slide(result){
//   for(let c = 0; c < result.length; c++){
//     if (result[i] === result[i + 1]) {
//       result[i] *= 2;
//       console.log('result[i]',result[i] );
//       result[i + 1] = null;
//       console.log('result[i + 1]',result[i + 1] );
//     }
//   }
//   return result;
// }

// const moveTop = (arr) => {
//   for(let r = 0; r < arr.length; r++){
//     let result = arr[r];
//     console.log('result', result);
//     result = slide(result);
//   for(let c = 0; c < arr.length; c++){

//   }
//   }
//   const sum = arr.filter(item => item !== null);
//   while (sum.length < 4) {
//     sum.push(null);
//   }
//   return sum;
// }

/**
 * 
 r-c
'0-2'
'1-2'
'2-2'
'3-2'
 
*/

/**
 * 
   r-c
 * 
 * 0-0,
 * 0-1,
 * 0-2,
 * 0-3
 */



const moveTop = (arr) => {
  for(let r = 0; r < arr.length; r++){
    const result = arr[r];
    console.log('result', result);
    //const newArr = result.filter(item => item !== null);
    //console.log('newArr', newArr);
  for(let c = 0; c < result.length; c++){
    if (result[c] === result[c + 1]) {
      result[c] *= 2;
      console.log('result[i]',result[c] );
      result[c + 1] = null;
      console.log('result[i + 1]',result[c + 1] );
    }
  }
  }
  const sum = arr.filter(item => item !== null);
  while (sum.length < 4) {
    sum.push(null);
  }
  return sum;
}


// const moveTop = (arr) => {
//   for(let c = 0; c < arr.length; c++){
//     for(let r = 0; r < arr.length; r++){
//      if(arr[c][r] === arr[[c][r] + 1]){
//       arr[c][r] *= 2;
//       arr[[c][r] + 1] = null;
//      }
//     }
//   }
//   const sum = arr.filter(item => item !== null);
//   while (sum.length < 4) {
//     sum.push(null);
//   }
//   return sum;
// }


// const moveTop = (arr) => {
//   for(let c = 0; c < 4; c++){
//     for(let r = 0; r < 4; r++){
//      const newArr = [gameBoard[0][c] == [r][0], gameBoard[1][c] == [r][1], gameBoard[2][c] == [r][2],gameBoard[3][c] == [r][3]];
//         if (newArr[r] === newArr[r + 1]) {
//           newArr[r] *= 2;
//           newArr[r + 1] = null;
//       }else if(newArr[c] === newArr[c + 1]){
//         newArr[c] *= 2;
//         newArr[c + 1] = null;
//       }
//     }
//   }
//   const sum = arr.filter(item => item !== null);
//   while (sum.length < 4) {
//     sum.push(null);
//   }
//   return sum;
// }

const moveLeft = (arr) => {
  const result = arr.filter(item => item !== null);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
      result[i] *= 2;
      result[i + 1] = null;
    }
  }

  const sum = result.filter(item => item !== null);

  while (sum.length < 4) {
    sum.push(null);
  }

  return sum;
}

const moveRight = (arr) => {
  const result = arr.filter(item => item !== null);
  result.reverse();
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i - 1]) {
      result[i] *= 2;
      result[i - 1] = null;
    }
  }

  const sum = result.filter(item => item !== null);
  sum.reverse();

  while (sum.length < 4) {
    sum.unshift(null);
  }

  return sum;
}

const mr = (arr) => {
  const copy = [...arr].reverse();//
  const res = moveLeft(copy);
  return res.reverse();
}

const mvTop = (matrix) => {
  for (let c = 0; c < matrix.length; c++) {
    const arr = [];
    
    for (let r = 0; r < matrix.length; r++) {
      arr.push(matrix[r][c])
    }

    const res = moveLeft(arr);
    console.log('>>>>>>', res);
  }
}

mvTop(gameBoard)
// const res1 = moveTop(gameBoard);
// const res2 = mr(initArray2);

// const res2 = moveRight(initArray2);
// const res3 = moveRight(initArray3);

// console.log('1 ==========>', res1);
// console.log('2 ==========>', res2);
// console.log('3 ==========>', res3);




