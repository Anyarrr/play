console.log('HELLO');

const initArray1 = [null, null, 2, null,]; // ===========>>> [2, null, null, null,]
const initArray2 = [null, 4, null, 2,]; // ===========>>> [4, 2, null, null,]
const initArray3 = [2, null, null, 4,]; // ===========>>> [2, 4, null, null,]
// const initArray4 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]
// const initArray5 = [null, null, null, null,]; // ===========>>> [null, null, null, null,]

// const moveLeft1 = (initArray1) => {
//     return initArray1.sort();
// }


// const moveLeft2 = (initArray2) => {
//     let number = initArray2.filter(item => item != null);
//     let result = number.concat(initArray2.filter(item => item === null));
//     return result;
// }

const moveLeft = () => {
    let number = initArray3.filter(item => item != null);
    let result = number.concat(initArray3.filter(item => item === null));
    return result;
}

const res1 = moveLeft(initArray1);
const res2 = moveLeft(initArray2);
const res3 = moveLeft(initArray3);

console.log('1 ==========>', res1);
console.log('2 ==========>', res2);
console.log('3 ==========>', res3);

function customLogger(){
    console.log('do something'); // 1
    console.log('end'); // 101
    // 102

    return 5;
}

function sum(a, b) {
    return a + b;
  }

const aaa = sum(3, 4);

// customLogger();
// const r = customLogger();
console.log('>', aaa);


function sum(a, b) {
    return a + b;
  }

