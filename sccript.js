const localStorageItems = {
  SCORE: 'score',
  BEST: 'best',
  GAME_BOARD: 'gameBoard',
}

const divConteiner = document.createElement("div");
divConteiner.classList.add("conteiner");
document.body.append(divConteiner);

const currentScoreElem = document.createElement("div");
currentScoreElem.classList.add("score");
currentScoreElem.innerText = "0";
divConteiner.append(currentScoreElem);

const bestScoreElem = document.createElement("div");
bestScoreElem.classList.add("scoreTwo");
bestScoreElem.innerText = "0";
divConteiner.append(bestScoreElem);

const clear = document.createElement("button");
clear.classList.add("calc");
clear.innerText = "new game";
divConteiner.append(clear); 

const text = document.createElement("h2");
text.classList.add("text");
text.innerText = "2048";
divConteiner.append(text);

const game = document.getElementById("game-board"); //container
  game.setAttribute(
    "style",
    "position: relative; height: 525px; width: 525px; background-color: #bbada0; border: 15px solid #bbada0; border-radius: 5px; display: grid; grid-template-columns: repeat(10, 113px); grid-template-rows: repeat(10, 113px); gap: 15px;"
  );

let size = +prompt('на какой площадке вы хотите играть?','');
// console.log(size);
// let user = 3;

const createMatrix = (size) => {
  return new Array(size).fill(undefined).map(() => {
    return new Array(size).fill(null);
  });
};
console.log(createMatrix(size));


let gameBoard = createMatrix(size); //сама матрица


let rows = size; //ряд
let columns = size; //колонка
let currentScore = 0;
let bestScore = 0;
const prevGameBoard = localStorage.getItem("gameBoard"); // достаем gameboard из localStorage 1


const checkIsDirty = (board) => {
  //когда мы нажимаем на кнопку
  for (let r = 0; r < rows; r++) {
    //проходится по массиву
    for (let c = 0; c < columns; c++) {
      if (gameBoard[r][c] !== board[r][c]) {
        //сравнивает с оригинальной версией и после движения и если обнаружилось различие выводит true если ничего не поменялось false

        return true; //пока числа перекатываются в ту сторону которую нажимаем,true
      }
    }
  }

  return false; //как числа перестают двигаться в ту сторону которую кликаем,false
};

const setGame = () => {
  // 2
  if (prevGameBoard && checkIsDirty(JSON.parse(prevGameBoard).value)) { // проверяем есть ли сохраненная игра и значениея отличаются от начальных
    gameBoard = JSON.parse(prevGameBoard).value; // если есть приравниваем значения
    currentScore = Number(localStorage.getItem('score'));
    bestScore = Number(localStorage.getItem('best'));
    
  }
  //заполняем матрицу ячейками div
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.id = r + "-" + c; //0-1

      let num = gameBoard[r][c];
      updateTile(tile, num); //для цвета
      game.append(tile);
    }
  }
if(!prevGameBoard){
  rerender();
  anyСell(); //выводим число 2/4
  anyСell(); //выводим число 2/4
}
}

setGame();
renderBestScore();

clear.addEventListener('click', () => {  // добоаляем событие для кнопки очистки
  gameBoard;
  
  // 3
  // очищаем localStorage
  localStorage.removeItem('gameBoard');
  localStorage.removeItem('score');

  // очищаем счет
  currentScore = 0;
  currentScoreElem.innerText = 0;
  anyСell(); //выводим число 2/4
  anyСell(); //выводим число 2/4
})

function anyСell() {
  // любая ячейка, число 2/4

  let randomIndex = Math.floor(Math.random() * rows); //рандомное место в ряде
  let randomIndexTwo = Math.floor(Math.random() * columns); // рандомное место в колонке
  
  // Найти пустую ячейку
  do {
    randomIndex = Math.floor(Math.random() * rows); // случайный индекс строки
    randomIndexTwo = Math.floor(Math.random() * columns); // случайный индекс колонки
  } while (gameBoard[randomIndex][randomIndexTwo] !== null); // повторять, пока ячейка занята

  // Генерируем случайное число 2 или 4
  const number = Math.random() < 0.9 ? 2 : 4; // 90% шанс получить 2, 10% — 4

  // Заполняем найденную пустую ячейку
  gameBoard[randomIndex][randomIndexTwo] = number; // равняем ячейке сгенерированное число
  
  // Перерисовка (rerender)
  rerender();
}


function rerender() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cell = document.getElementById(r + "-" + c); //присваиваем результат id ячейки
      cell.innerText = gameBoard[r][c]; //обновление текста ячейки
      updateTile(cell, gameBoard[r][c]);
    }
  }

  // 4
  // добавляем значения в localStorage при обновлении
  localStorage.setItem("gameBoard", JSON.stringify({ value: [ ...gameBoard ] }));//сохраняем gameBoatd как строку 
  localStorage.setItem("score", currentScore);//соxраняем total как строку  
  bestScoreElem.innerText = bestScore;//присваиваем рекорду ее let
  currentScoreElem.innerText = currentScore;//присваиваем счету игры ее let 

  if (currentScore > bestScore) {//если счетчик больше рекорда
    setNewBestScore(currentScore);
  }

  if (completion(gameBoard)) {
    setTimeout( "alert('игра окончена!')",1000);
  }
}

function setNewBestScore(score) {
  bestScore = score;
  bestScoreElem.innerText =  score;
  localStorage.setItem("best", score);//тогда мы сохраняем в рекорд счетчик
}

function renderBestScore() {
  const score = localStorage.getItem('best');
  if (!score) {
    return;
  }
  bestScoreElem.innerText = score;
  bestScore = score
}

function completion(board) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === null) {
        return false;
      }
      if (c < board[r].length - 1 && board[r][c] === board[r][c + 1]) {
        return false;
      }
      if (r < board[c].length - 1 && board[r][c] === board[r + 1][c]) {
        return false;
      }
    }
  }
  return true; //игра завершена
}

document.addEventListener("keydown", (event) => {
  let isDirty;
  if (event.code === "ArrowLeft") {
    isDirty = checkIsDirty(moveLeft(gameBoard)); //следит за событиями было ли изменение

    gameBoard = [...moveLeft(gameBoard)]; //если изменение произошло обновляется значение gameBoard результатом движения
    if (isDirty) {
      anyСell();
    }
  }
  if (event.code === "ArrowRight") {
    isDirty = checkIsDirty(mvRight(gameBoard));

    gameBoard = [...mvRight(gameBoard)];
    if (isDirty) {

      anyСell();
    }
  }

  if (event.code === "ArrowUp") {
    isDirty = checkIsDirty(mvTop(gameBoard));

    gameBoard = [...mvTop(gameBoard)];
    if (isDirty) {

      anyСell();
    }
  }
  if (event.code === "ArrowDown") {
    isDirty = checkIsDirty(moveDown(gameBoard));

    gameBoard = [...moveDown(gameBoard)];
    if (isDirty) {

      anyСell();
    }
  }

});



const moveLeft = (arr) => {
  const asd = [];
  for (let c = 0; c < arr.length; c++) {
    const result = arr[c].filter((item) => item !== null);
    for (let i = 0; i < result.length; i++) {
      if (result[i] && result[i] === result[i + 1]) {
        currentScore += result[i];

        result[i] *= 2;
        result[i + 1] = null;
      }
    }
    const sum = result.filter((item) => item !== null);

    while (sum.length < rows) {//?rows
      sum.push(null);
    }

    asd.push(sum);
  }
  return asd;
};
const mvRight = (arr) => {
  const reversedRows = arr.map((row) => [...row].reverse()); //распаковываем для копии
  const movedRows = moveLeft(reversedRows);
  return movedRows.map((row) => [...row].reverse());
};

const rotate = (arr, callback) => {
  const allResults = [];
  for (let c = 0; c < arr.length; c++) {
    //прошлись по столбцам
    const newArr = [];
    for (let r = 0; r < arr.length; r++) {
      //прошлись по рядам
      newArr.push(arr[r][c]); //добавили в переменную arr результат прохождения с начала ряда сверху вних по колонке
    }

    allResults.push(newArr);
  }
  return callback(allResults);
};

const createEmptyMatrix = (size) => {
  return new Array(size).fill(undefined).map(() => {
    return new Array(size).fill(null);
  });
};

const rotateBack = (allResults) => {
  const newResults = createEmptyMatrix(gameBoard.length);

  for (let c = 0; c < allResults.length; c++) {
    //прошлись по столбцам
    for (let r = 0; r < allResults.length; r++) {
      newResults[r][c] = allResults[c][r];
    }
  }

  return newResults;
};

const mvTop = (arr) => {
  const allResults = rotate(arr, moveLeft);
  return rotateBack(allResults);
};

const moveDown = (arr) => {
  const allResults = rotate(arr, mvRight);
  return rotateBack(allResults);
};

function updateTile(tile, num) {

  tile.classList.remove(
    "x2",
    "x4",
    "x8",
    "x16",
    "x32",
    "x64",
    "x128",
    "x256",
    "x512",
    "x1024",
    "x2048"
  );
  tile.removeAttribute("style");

  switch (num) {
    case 2:
      tile.setAttribute(
        "style",
        "background-color: #eee4da;color: #776e65; display: flex;  justify-content: center;  align-items: center;"
      );
      tile.innerText = num;
      break;
    case 4:
      tile.setAttribute(
        "style",
        "background-color: #eee1c9;color: #776e65;display: flex; justify-content: center; align-items: center;"
      );
      tile.innerText = num;
      break;
    case 8:
      tile.setAttribute(
        "style",
        "background-color: #f3b27a;color: white;display: flex; justify-content: center; align-items: center;"
      );
      tile.innerText = num;
      break;
    case 16:
      tile.setAttribute(
        "style",
        "background-color: #f69664;color: white;display: flex; justify-content: center; align-items: center;"
      );
      tile.innerText = num;
      break;
    case 32:
      tile.setAttribute(
        "style",
        "background-color: #f77c5f;color: white;display: flex; justify-content: center; align-items: center;"
      );
      tile.innerText = num;
      break;
    case 64:
      tile.setAttribute(
        "style",
        "background-color: #f75f3b;color: white;display: flex; justify-content: center; align-items: center;"
      );
      tile.innerText = num;
      break;
    case 128:
      tile.setAttribute(
        "style",
        "background-color: #edce71;color: white;display: flex; justify-content: center; align-items: center;font-size: 45px;"
      );
      tile.innerText = num;
      break;
    case 256:
      tile.setAttribute(
        "style",
        "background-color: #edcc62;color: white;display: flex; justify-content: center; align-items: center;font-size: 45px;"
      );
      tile.innerText = num;
      break;
    case 512:
      tile.setAttribute(
        "style",
        "background-color: #edc651; color: white; display: flex;  justify-content: center;  align-items: center; font-size: 45px;"
      );
      tile.innerText = num;
      break;
    case 1024:
      tile.setAttribute(
        "style",
        "background-color: #eec744;color: white;display: flex; justify-content: center; align-items: center;font-size: 40px;"
      );
      tile.innerText = num;
      break;
    case 2048:
      tile.setAttribute(
        "style",
        "background-color: #ecc230;color: white;display: flex; justify-content: center; align-items: center;font-size: 40px;"
      );
      tile.innerText = num;
      break;
    default:
      tile.setAttribute("style", "background-color: rgba(238, 228, 218, 0.35)");
      tile.innerText = "";
      break;
  }
}

