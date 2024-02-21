/*jshint esversion: 6 */
const resetRack = require("./resetRack");

const resetGame = (function () {
  const undoLastPointButton = document.querySelector(".undo-last-point");
  const resetGameButton = document.querySelector(".reset-game");
  const gameButtons = document.querySelector(".game-buttons");

  let undoLastPoint = function () {
    const finalScore = document.querySelector(".final-score");
    const lastClicked = document.querySelector("#lastClicked");
    const lastClickedSelector = lastClicked.innerHTML;
    const neutral = document.querySelectorAll(".neutral");
    document.getElementsByClassName(lastClickedSelector)[0].click();
    resetRack.displayBlock();
    gameButtons.style.marginTop = "";
    gameButtons.style.display = "none";
    gameButtons.classList.add("hidden");
    finalScore.innerHTML = "";
    clickPreventUndo();
    if (neutral.length <= 8) {
      document.querySelector(".edit-score").click();
    }
  };

  const undoLastPointDetails = function () {
    undoLastPoint();
  };

  const clickPreventUndo = function () {
    let inputs = document.querySelectorAll(".row");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("row-top")) {
        inputs[i].style.pointerEvents = "auto";
      }
    }
  };

  const resetGameDetails = function () {
    if (confirm("Are you sure you've finished your game?")) {
      window.location.reload();
    } else {
      return;
    }
  };

  const showGameButtons = function () {
    resetRack.displayNone();
    gameButtons.style.marginTop = ".5rem";
    gameButtons.style.display = "block";
    gameButtons.classList.remove("hidden");
  };

  const hideGameButtons = function () {
    gameButtons.classList.add("hidden");
  };
  undoLastPointButton.addEventListener("click", undoLastPointDetails);
  resetGameButton.addEventListener("click", resetGameDetails);

  return {
    showGameButtons: showGameButtons,
    hideGameButtons: hideGameButtons,
  };
})();

module.exports = resetGame;
