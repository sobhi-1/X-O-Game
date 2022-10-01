let title = document.querySelector(".title");
let turn = "x";
let arr = [];
function end(num1, num2, num3) {
  title.innerHTML = `${arr[num1]} Winner`;
  document.getElementById("sec" + num1).style.background = "#000";
  document.getElementById("sec" + num2).style.background = "#000";
  document.getElementById("sec" + num3).style.background = "#000";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function win() {
  for (let i = 1; i < 10; i++) {
    arr[i] = document.getElementById("sec" + i).innerHTML;
  }
  if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != "") {
    end(1, 2, 3);
  } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[5] != "") {
    end(4, 5, 6);
  } else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[9] != "") {
    end(7, 8, 9);
  } else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != "") {
    end(1, 4, 7);
  } else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != "") {
    end(2, 5, 8);
  } else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[9] != "") {
    end(3, 6, 9);
  } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] != "") {
    end(1, 5, 9);
  } else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != "") {
    end(3, 5, 7);
  }
}
function game(id) {
  ele = document.getElementById(id);
  if (turn === "x" && ele.innerHTML == "") {
    ele.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn == "o" && ele.innerHTML == "") {
    ele.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  win();
}

// let title = document.querySelector(".title");
// let turn = "x";

// let dataPro = [];
// function winner() {
//   for (let i = 1; i < 10; i++) {
//     dataPro[i] = document.getElementById("sec" + i).innerHTML;
//   }
//   if (
//     dataPro[1] == dataPro[2] &&
//     dataPro[2] == dataPro[3] &&
//     dataPro[1] != ""
//   ) {
//     console.log("done");
//     title.innerHTML = `${dataPor[1]} Winner`;
//     document.getElementById("sec" + 1).style.background = "#000";
//     document.getElementById("sec" + 2).style.background = "#000";
//     document.getElementById("sec" + 3).style.background = "#000";
//     setInterval(function () {
//       title.innerHTML += ".";
//     }, 1000);
//     setTimeout(function () {
//       location.reload();
//     }, 4000);
//   }
// }
// // else if (
//     dataPro[4] == dataPro[5] &&
//     dataPro[5] == dataPro[6] &&
//     dataPro[5] != ""
//   ) {
//   } else if (
//     dataPro[7] == dataPro[8] &&
//     dataPro[8] == dataPro[9] &&
//     dataPro[9] != ""
//   ) {
//   } else if (
//     dataPro[1] == dataPro[4] &&
//     dataPro[4] == dataPro[7] &&
//     dataPro[7] != ""
//   ) {
//   } else if (
//     dataPro[3] == dataPro[5] &&
//     dataPro[5] == dataPro[8] &&
//     dataPro[5] != ""
//   ) {
//   } else if (
//     dataPro[4] == dataPro[6] &&
//     dataPro[6] == dataPro[9] &&
//     dataPro[9] != ""
//   ) {
//   } else if (
//     dataPro[1] == dataPro[5] &&
//     dataPro[5] == dataPro[9] &&
//     dataPro[9] != ""
//   ) {
//   } else if (
//     dataPro[3] == dataPro[5] &&
//     dataPro[5] == dataPro[7] &&
//     dataPro[7] != ""
//   ) {
//   }

// function game(id) {
//   let element = document.getElementById(id);
//   if (turn == "x" && element.innerHTML == "") {
//     element.innerHTML = "X";
//     turn = "o";
//     title.innerHTML = "O";
//   } else if (turn == "o" && element.innerHTML == "") {
//     element.innerHTML = "O";
//     turn = "x";
//     title.innerHTML = "X";
//   }
// }
