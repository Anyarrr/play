const game = document.getElementById('game-board');//conteiner
game.setAttribute('style',' --cell-size:128px; position: relative;height: 525px; width: 525px; background-color: #bbada0; border: 15px solid #bbada0; border-radius: 5px; display: grid; grid-template-columns: repeat(4, 113px); grid-template-rows: repeat(4, 113px); gap: 15px;');

let gameBoard;//сама матрица
let rows = 4;//ряд
let columns = 4;//колонка

// gameBoard = [
//     ['', '', '', ''],
//     ['', '', '', ''],
//     ['', '', '', ''],
//     ['', '', '', '']
// ];

gameBoard = [
    [null, null, null, null],
    [null, 2, null, null],
    [null, null, null, null],
    [null, null, null, null]
];


function setGame() {//заполняем матрицу ячейками div
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const tile = document.createElement('div');
            tile.classList.add("tile");
            tile.id = r + "-" + c;
            tile.setAttribute('style', 'background-color: rgba(238, 228, 218, 0.35); border-radius: 3px; display: flex; justify-content: center; align-items: center;');
            let num = gameBoard[r][c];
            updateTile(tile, num);
            game.append(tile);
        
        }   
        
    }
    anyСell();//выводим число 2/4
    anyСell();//выводим число 2/4
    rerender();

}

setGame();


function anyСell(){//любая ячейка, число 2/4

    const randomIndex = Math.floor(Math.random() * rows);
    const randomIndexTwo = Math.floor(Math.random() * columns); 
    const number = Math.random() > 0.5  ? 2 : 4;
    gameBoard[randomIndex][randomIndexTwo] = number;
    //rerender(randomIndex, number);
    
}

function rerender(){
    for(let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++) {
            const cell = document.getElementById(r + '-' + c);
            if (gameBoard[r][c] === null) {
                continue;
            }
            cell.innerText = gameBoard[r][c];
            //updateTile(cell, number);
        }
    }
}   

 document.addEventListener('keydown', (event) => {
    if(event.code == 'ArrowLeft'){
        slideLeft();
    }
    if (event.code == 'ArrowRight') {
        //slideRight();
       }
    // ...
    console.log('>>>', gameBoard);

    rerender();
})


// function slide(row){
//     row = stepSlide(row);
//     for(let i = 0; i < row.lenght; i++){
//         if(row[i]== row[i+1]);
//         row[i] *= 2;
//         row[i+1] = 0;
//     }

// }

function slideLeft(){
    for (let r = 0; r < rows.length; r++) {
            if(gameBoard[r] !== null && gameBoard[r] === gameBoard[r+1]){ 
            gameBoard[r] *= 2;
            gameBoard[r+1] = null;
    for(let c = 0; c < columns.length; c++){
            if(gameBoard[c] !== null){
            let tile = document.getElementById(r + '-' + c);
            gameBoard[c+1] = null;
            let num = gameBoard[r][c];
            updateTile(tile, num);
        }
    }
          }
        }

    }


// function slideLeft(){
//     for (let r = 0; r < rows; r++) {
//         for(let c = 0; c < columns; c++){
//             const newArr = arr.filter(item => item != null);
//             console.log(newArr);
//             for(let i = 0; newArr.length < 4; i++) {
//             newArr.push(null);
//             console.log(newArr);
//             }
//             return newArr;
//             }
//         }
//     }

    // const slideLeft = (gameBoard) => {
    //     for(let i = 0; i < gameBoard.length; i++){
    //       if(gameBoard[i] !== null && gameBoard[i] === gameBoard[i+1]){ 
    //         gameBoard[i] *= 2;
    //         gameBoard[i+1] = null;
    //       }
    //     }
        
    //     const result = gameBoard.filter(item => item !== null);
    //     for(; result.length < gameBoard.length;){
    //       result.push(null);
    //     }
    //     return result;
    //     }





// function slideLeft(){
//     for (let r = 0; r < rows; r++) {
//         for(let c = 0; c < columns; c++){
//             let row = gameBoard[r];
//             row = slide(row);
//             let tile = document.getElementById(r + '-' + c);
//             let num = gameBoard[r][c];
//             updateTile(tile, num);


//         }
//     }
// }

// gameBoard = [                 r
//     ['', '', '', ''],    ---- 0
//     ['', '', '', ''],         1
//     ['', '', '', ''],         2
//     ['', '2', '', '']         3
// ];

// function slideRight(){
//     for (let r = 0; r < rows; r++) {
//     let row = gameBoard[r];
//     //row.push(row.shift());
//     row = stepSlide(row);
//     for(let c = 4; c < columns; c++){
//         let tile = document.getElementById(r + '-' + c);
//         let num = gameBoard[r][c];
//         updateTile(tile, num);
//     }
//     }
// }

// function slideLeft(){
//     for (let r = 0; r < rows; r++) {
//     let row = gameBoard[r];
//     row.push(row.shift());
//     gameBoard[r] = row;
//     }
// }

// function slideLeft(){
//     for (let r = 0; r < rows; r++) {
//     let row = gameBoard[r];
//     row.push(row.shift());
//     gameBoard[r] = row;
//     }
// }

function updateTile(tile, num){

    switch (num) {
        case 2:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x2");
            tile.innerText = num;
            break;
        case 4:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x4");
            tile.innerText = num;
            break;
        case 8:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x8");
            tile.innerText = num;
            break;
        case 16:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x16");
            tile.innerText = num;
            break;
        case 32:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x32");
            tile.innerText = num;
            break;
        case 64:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x64");
            tile.innerText = num;
            break;
        case 128:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x128");
            tile.innerText = num;
            break;
        case 256:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x256");
            tile.innerText = num;
            break;
        case 512:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x512");
            tile.innerText = num;
             break;
        case 1024:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x1024");
            tile.innerText = num;
            break;
        case 2048:
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x2048");
            tile.innerText = num;
            break;
    }
 }