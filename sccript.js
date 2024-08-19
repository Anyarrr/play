const divConteiner = document.createElement("div");
  divConteiner.classList.add("conteiner");
  divConteiner.setAttribute(
    "style",
    "height: 2 00px;display: flex;justify-content: center;align-items: center; padding: 20px;"
  );
  document.body.append(divConteiner);

  const score = document.createElement("div");
  score.classList.add("score");
  score.innerText = "0";
  divConteiner.append(score);
  
  const scoreTwo = document.createElement("div");
  scoreTwo.classList.add("scoreTwo");
  scoreTwo.innerText = "0";
  divConteiner.append(scoreTwo);

  const game = document.getElementById("game-board"); //container
  game.setAttribute(
    "style",
    "position: relative;height: 525px; width: 525px; background-color: #bbada0; border: 15px solid #bbada0; border-radius: 5px; display: grid; grid-template-columns: repeat(4, 113px); grid-template-rows: repeat(4, 113px); gap: 15px;"
  );



  let gameBoard; //сама матрица
  let rows = 4; //ряд
  let columns = 4; //колонка
  let total = 0;
  let totalTwo = 0;

  gameBoard = [ 
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  function setGame() {
    //заполняем матрицу ячейками div
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tile = document.createElement("div");
        tile.classList.add("tile"); 
        tile.id = r + "-" + c; //0-1
        // tile.setAttribute(
        //   "style",
        //   "background-color: rgba(238, 228, 218, 0.35); border-radius: 3px; display: flex; justify-content: center; align-items: center; "
        // );
        let num = gameBoard[r][c];
        updateTile(tile, num); //для цвета
        game.append(tile);
      }
    }
    anyСell(); //выводим число 2/4
    anyСell(); //выводим число 2/4
    rerender(); //
  }
  setGame();

  function anyСell() {
    //любая ячейка, число 2/4

    const randomIndex = Math.floor(Math.random() * rows); //рандомное место в ряде
    const randomIndexTwo = Math.floor(Math.random() * columns); // рандомное место в колонке
    const number = Math.random() < 0.9 ? 2 : 4; //рандомное число , 2 чащe на 90 процентов чем 4

    if (gameBoard[randomIndex][randomIndexTwo] === null) {//если найденая ячейка null 
      gameBoard[randomIndex][randomIndexTwo] = number; //равно рандомному числу
    }
    rerender(randomIndex, number);
  }

  function rerender(randomIndex, number) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const cell = document.getElementById(r + "-" + c); //присваиваем результат id ячейки
        cell.innerText = gameBoard[r][c];//обновление текста ячейки
        updateTile(cell, gameBoard[r][c]);
      }
    }

    score.innerText = total;
    scoreTwo.innerText = totalTwo;
  }

  const checkIsDirty = (board) => {//когда мы нажимаем на кнопку 
    for (let r = 0; r < 4; r++) {//проходится по массиву
      for (let c = 0; c < 4; c++) {
        if (gameBoard[r][c] !== board[r][c]) {//сравнивает с оригинальной версией и после движения и если обнаружилось различие выводит true если ничего не поменялось false
          console.log(true);
          
          return true;//пока числа перекатываются в ту сторону которую нажимаем,true
        }
      }
    }
  //console.log(false);

    return false;//как числа перестают двигаться в ту сторону которую кликаем,false
  };

  function completion(board){
    for(let r = 0; r < rows; r++){
      for(let c = 0; c < columns; c++){
        if(board[r][c] === null){
          return false;
        }
      if(c < board[r].length-1 && board[r][c] === board[r][c + 1]){
        return false;
      }
      if(r < board[c].length-1 && board[r][c] === board[r + 1][c] ){
        return false;
      }
      }
    }
    return true;//игра завершена
  }

  document.addEventListener("keydown", (event) => {
    let isDirty;
    if (event.code === "ArrowLeft") {
      isDirty = checkIsDirty(moveLeft(gameBoard));//следит за событиями было ли изменение

      gameBoard = [ ...moveLeft(gameBoard)];//если изменение произошло обновляется значение gameBoard результатом движения
    if (isDirty) {
      anyСell();
    }    
    }
    if (event.code === "ArrowRight") {
      isDirty = checkIsDirty(mvRight(gameBoard));

      gameBoard = [...mvRight(gameBoard)]
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

      gameBoard = [...moveDown(gameBoard)]
    if (isDirty) {
      anyСell();
    }
  }

    if(completion(gameBoard)){
      alert('игра окончена!');
    }
    rerender();
  });

  const moveLeft = (arr) => {
    const asd = [];
    for (let c = 0; c < arr.length; c++) {
      const result = arr[c].filter((item) => item !== null);
      for (let i = 0; i < result.length; i++) {
        if (result[i] && result[i] === result[i + 1]) {
          total +=result[i];
          totalTwo += result[i];
          result[i] *= 2;
          result[i + 1] = null;
        }
      }
      const sum = result.filter((item) => item !== null);

      while (sum.length < 4) {
        sum.push(null);
      }

      asd.push(sum);
    }
    return asd;
  };
  const mvRight = (arr) => {
    const reversedRows = arr.map((row) => [...row].reverse());//распаковываем для копии
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
        tile.setAttribute("style", "background-color: #eee4da;color: #776e65; display: flex;  justify-content: center;  align-items: center;");
        tile.innerText = num;
        break;
      case 4:
        tile.setAttribute("style", "background-color: #eee1c9;color: #776e65;display: flex; justify-content: center; align-items: center;");
        tile.innerText = num;
        break;
      case 8:
        tile.setAttribute("style", "background-color: #f3b27a;color: white;display: flex; justify-content: center; align-items: center;");
        tile.innerText = num;
        break;
      case 16:
        tile.setAttribute("style", "background-color: #f69664;color: white;display: flex; justify-content: center; align-items: center;");
        tile.innerText = num;
        break;
      case 32:
        tile.setAttribute("style", "background-color: #f77c5f;color: white;display: flex; justify-content: center; align-items: center;");
        tile.innerText = num;
        break;
      case 64:
        tile.setAttribute("style", "background-color: #f75f3b;color: white;display: flex; justify-content: center; align-items: center;");
        tile.innerText = num;
        break;
      case 128:
        tile.setAttribute("style", "background-color: #edce71;color: white;display: flex; justify-content: center; align-items: center;font-size: 45px;");
        tile.innerText = num;
        break;
      case 256:
        tile.setAttribute("style", "background-color: #edcc62;color: white;display: flex; justify-content: center; align-items: center;font-size: 45px;");
        tile.innerText = num;
        break;
      case 512:
        tile.setAttribute("style", "background-color: #edc651; color: white; display: flex;  justify-content: center;  align-items: center; font-size: 45px;");
        tile.innerText = num;
        break;
      case 1024:
        tile.setAttribute("style","background-color: #eec744;color: white;display: flex; justify-content: center; align-items: center;font-size: 40px;");
        tile.innerText = num;
        break;
      case 2048:
        tile.setAttribute("style", "background-color: #ecc230;color: white;display: flex; justify-content: center; align-items: center;font-size: 40px;");
        tile.innerText = num;
        break;
      default:
        tile.setAttribute("style", "background-color: rgba(238, 228, 218, 0.35)");
        tile.innerText = "";
        break;
    }
  };
