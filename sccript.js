const dye = document.getElementById('dye');

dye.setAttribute('style', 
    'background-color: #faf8ef; display: flex; justify-content: center; align-items: center; height: 100vh; color: #776e65; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box; margin: 0px; padding: 0px;');

const game = document.getElementById('game-board');

const sum = 4;
const result = sum * sum;

function getListContent() {
    let newCell = [];
  
    for(let i = 1; i <= result; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.append(i);
      newCell.push(cell);
      cell.innerHTML = null;
      cell.setAttribute('style', 'background-color: rgba(238, 228, 218, 0.35); border-radius: 3px; ');
    }
  
    return newCell;
  }
game.append(...getListContent());

const tile = document.createElement('div');
tile.classList.add('tile');
const value = Math.random() > 0.5 ? 2 : 4; 
tile.textContent = value;
game.append(tile);

tile.setAttribute('style', 'position: absolute; top: calc(0 * 15px + 15px); left: calc(0 * 15px + 15px); display: flex; justify-content: center; align-items: center; width: 113px; height: 113px; border-radius: 3px; font-size: 55px; font-weight: bold;  background-color: #eee4da;');

game.setAttribute('style',
     ' background:#bbada0; height: 500px; width: 500px; border-radius: 6px; position: relative; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr; gap: 15px; padding: 15px;');