const dye = document.getElementById('dye');//body

dye.setAttribute('style', 
    'background-color: #faf8ef; display: flex; justify-content: center; align-items: center; height: 100vh; color: #776e65; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box; margin: 0px; padding: 0px;');

const game = document.getElementById('game-board');//conteiner
game.setAttribute('style',' --cell-size:128px; position: relative;height: 500px; width: 500px; background-color: #bbada0; border: 15px solid #bbada0; border-radius: 5px; display: grid; grid-template-columns: repeat(4, 113px); grid-template-rows: repeat(4, 113px); gap: 15px;');

const sum = 4;
const result = sum * sum;
let newCell = [];

// const matrix = [
//   [null,null,null,null],
//   [null,null,null,null],
//   [null,null,null,null],
//   [null,null,null,null],
// ];



function getListContent() {//ячейки
  
    for(let i = 1; i <= result; i++) {
      let cell = document.createElement('div');//ячейки
      cell.classList.add('cell');
      cell.append(i);
      newCell.push(cell);
      cell.innerHTML = null;
      cell.setAttribute('style', 'background-color: rgba(238, 228, 218, 0.35); border-radius: 3px;');
    }
  
    return newCell;
  }
game.append(...getListContent());

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

const h = 4;

function matrix(h){
    let result = new Array(h).fill().map(() => new Array(h).fill(""));
    let couter = null;//счетчик
    let startCol = 0;//начинаем с 0 заполнять оbj
    let endCol = h - 1;//конец первого массива ,-1 для того чтобы получилась ширина в 3 элетента с 0 индексом а не 4 элемента
    let startRow = 0;//
    let endRow = h - 1;//для того чтобы не изменить первый элемент не пошел на 1

    while(startCol <= endCol && startRow <= endRow) {//первый массив          startRow   >        endCol
        for(let i = startCol; i <= endCol; i++){
            result[startRow][i] = couter;          //                          startCol      <      endRow
            couter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++){
            result[i][endCol] = couter;
            couter++;
        }
        endCol--;

        for(let i = endCol; i >= startCol; i--){
            result[endRow][i] = couter;
            couter++;
        }
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = couter;
            couter++;
        }
        startCol++;
    }

    return result;
}
game.append(matrix(h));
