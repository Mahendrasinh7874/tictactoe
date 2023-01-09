let btns = document.querySelectorAll(".box");
let activePlayer = document.querySelector(".active-player");
let notif = document.querySelector(".notif");

let count = "X";
activePlayer.textContent = count;

// For Winner explain

const isWinner = (V) => {
  const b0 = btns[0].textContent;
  const b1 = btns[1].textContent;
  const b2 = btns[2].textContent;
  const b3 = btns[3].textContent;
  const b4 = btns[4].textContent;
  const b5 = btns[5].textContent;
  const b6 = btns[6].textContent;
  const b7 = btns[7].textContent;
  const b8 = btns[8].textContent;

  const c1 = b0 === V && b1 === V && b2 === V;
  const c2 = b3 === V && b4 === V && b5 === V;
  const c3 = b6 === V && b7 === V && b8 === V;
  const c4 = b0 === V && b3 === V && b6 === V;
  const c5 = b1 === V && b4 === V && b7 === V;
  const c6 = b2 === V && b5 === V && b8 === V;
  const c7 = b0 === V && b4 === V && b8 === V;
  const c8 = b2 === V && b4 === V && b6 === V;

  if (c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8) {
    return true;
  } else {
    return false;
  }
};

function reset() {
  document.getElementById("btnfor").click();
}

// click in the box

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent != "") return;
    btn.innerHTML = count;
    console.log(count);
    if (count === "O") {
      if (isWinner(count)) {
        swal(`${count} won the Game...`);

        setInterval(() => {
          reset();
        }, 3000);
        setInterval(() => {
          reset();
        }, 2000);
      }
      count = "X";
      activePlayer.textContent = "X";
      btn.classList.add("player1");
    } else {
      if (isWinner(count)) {
        swal(`${count} won the Game...`);
        setInterval(() => {
          reset();
        }, 3000);
        setInterval(() => {
          reset();
        }, 2000);
      }

      count = "O";
      activePlayer.textContent = "O";
      btn.classList.add("player0");
    }
  });
});
