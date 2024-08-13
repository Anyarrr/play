console.log('HELLO');

const initArray1 = [2, 4, 4, 2,]; // ===========>>> [null, 2, 8, 2]
const initArray2 = [null, 4, 2, 2,]; // ===========>>> [null, null, 4, 4]
const initArray3 =  [8, null, 8, null,]; // ===========>>> [null, null, null, 16]
// const initArray4 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]
// const initArray5 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]

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

  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
      result[i] *= 2;
      result[i + 1] = null;
    }
  }

  const sum = result.filter(item => item !== null);

  while (sum.length < 4) {
    sum.unshift(null);
  }

  return sum;
}


const res1 = moveRight(initArray1);
const res2 = moveRight(initArray2);
const res3 = moveRight(initArray3);

console.log('1 ==========>', res1);
console.log('2 ==========>', res2);
console.log('3 ==========>', res3);


