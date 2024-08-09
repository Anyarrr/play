const game = document.getElementById('game-board');//conteiner
game.setAttribute('style',' --cell-size:128px; position: relative;height: 525px; width: 525px; background-color: #bbada0; border: 15px solid #bbada0; border-radius: 5px; display: grid; grid-template-columns: repeat(4, 113px); grid-template-rows: repeat(4, 113px); gap: 15px;');

let gameBoard;//сама матрица
let rows = 4;//ряд
let columns = 4;//колонка

gameBoard = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
];

function setGame() {

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const tile = document.createElement('div');
            tile.classList.add("tile");
            tile.id = r + '-' + c;
            tile.setAttribute('style', 'background-color: rgba(238, 228, 218, 0.35); border-radius: 3px; display: flex; justify-content: center; align-items: center;');
            let num = gameBoard[r][c];
            updateTile(tile, num);
            game.append(tile);
        
        }   
        
    }
}

setGame();


function anyСell(){//любая ячейка, число 2/4

    const randomIndex = Math.floor(Math.random() * (gameBoard.length));
    // console.log('>>>>>>>>>', randomIndex)
    gameBoard[randomIndex][randomIndex] = Math.random() > 0.5 ? 2 : 4;
    // console.log(gameBoard);
    const cell = document.getElementById(randomIndex);
     cell.innerText = gameBoard[randomIndex];



}



function updateTile(tile, num){
    // const a = {"2": "x2", };
    switch (num) {
        case "2":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x2");
            tile.innerText = num;
            break;
        case "4":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x4");
            tile.innerText = num;
            break;
        case "8":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x8");
            tile.innerText = num;
            break;
        case "16":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x16");
            tile.innerText = num;
            break;
        case "32":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x32");
            tile.innerText = num;
            break;
        case "64":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x64");
            tile.innerText = num;
            break;
        case "128":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x128");
            tile.innerText = num;
            break;
        case "256":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x256");
            tile.innerText = num;
            break;
        case "512":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x512");
            tile.innerText = num;
             break;
        case "1024":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x1024");
            tile.innerText = num;
            break;
        case "2048":
            tile.setAttribute('style', 'background-color: none;' )
            tile.classList.add("x2048");
            tile.innerText = num;
            break;
    }
}

anyСell()


// const randomIndex = Math.floor(Math.random() * game);
// game[randomIndex].tile.value = Math.random() > 0.5 ? 2 : 4;


// const value = Math.random() > 0.5 ? 2 : 4; //возвращает случайное число
// tile.textContent = value;
// game.append(tile);



// const sum = 4;
// const result = sum * sum;
// let newCell = [];

// const matrix = [
//   [null,null,null,null],
//   [null,null,null,null],
//   [null,null,null,null],
//   [null,null,null,null],
// ];

// function getListContent() {//ячейки
  
//     for(let i = 1; i <= result; i++) {
//       let cell = document.createElement('div');//ячейки
//       cell.classList.add('cell');
//       cell.append(i);
//       newCell.push(cell);
//       cell.innerHTML = null;
//       cell.setAttribute('style', 'background-color: rgba(238, 228, 218, 0.35); border-radius: 3px;');
//     }
  
//     return newCell;
//   }
// game.append(...getListContent());

// const tile = document.createElement('div');//ячейка с цифрой
// tile.classList.add('tile');
// const value = Math.random() > 0.5 ? 2 : 4; //возвращает случайное число
// tile.textContent = value;
// game.append(tile);


// let linkTile = () => {
//   const linkedTitle = tile;
// }

// const grid = newCell;//получаем случайную свободную ячейку
// grid.getRandomCell().linkTile(tile);



// tile.setAttribute('style', ' --y:0; --x:0; position: absolute; top: calc(var(--y) * var(--cell-size)); left: calc(var(--x) * var(--cell-size)); display: flex; justify-content: center; align-items: center; width: 113px; height: 113px; border-radius: 3px; font-size: 55px; font-weight: bold;  background-color: #eee4da; animation: show 200ms; transition: 100ms; @keyframes show {0% {opacity: 0.5;transform: scale(0);}}');
