const currentScoreElem = document.getElementById('current-score');
const bestScoreElem = document.getElementById('best-score');
const game = document.getElementById("game-board");

const getStorageData = () => {
    const savedGameBoard = localStorage.getItem("gameBoard");
    const gameBoard = savedGameBoard ? JSON.parse(savedGameBoard).value : null;
    const savedCurrentScore = localStorage.getItem('score');
    const savedBestScore = localStorage.getItem('best');
    const currentScore = savedCurrentScore ?? null;
    const bestScore = savedBestScore ?? null;

    return {
        gameBoard,
        currentScore,
        bestScore,
    }
}

function createMatrix(numberField) {
    return new Array(numberField).fill(undefined).map(() => {
        return new Array(numberField).fill(null);
    });
}

const addGameElemToDOM = (gameBoard) => {
    for (let r = 0; r < gameBoard.length; r++) {
        for (let c = 0; c < gameBoard.length; c++) {
          const tile = document.createElement("div");
          tile.classList.add("tile");
          tile.id = r + "-" + c; //0-1
    
        //   let num = gameBoard[r][c];
          updateTile(tile, null); //для цвета
          console.log('game >>', game)
          game.append(tile);
        }
      }
}

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

const initGame = () => {
    const savedData = getStorageData();

    if (savedData.gameBoard) {
        const size = savedData.gameBoard.length;
        const rows = size;
        const columns = size;
        addGameElemToDOM(savedData.gameBoard);
    } else {
        const size = 4;
        const rows = size;
        const columns = size;
        const gameBoard = createMatrix(size);

        addGameElemToDOM(gameBoard);
    }

    if (savedData.bestScore) {
        bestScoreElem.innerText = savedData.bestScore;
    }

    if (savedData.currentScore) {
        currentScoreElem.innerText = savedData.currentScore;
    }
}

initGame()