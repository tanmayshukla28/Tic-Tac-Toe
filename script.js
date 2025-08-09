let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#message");
let turn0 = true; 
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

console.log("Let's begin the game");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        if (box.innerText !== "") return; 

        box.innerText = turn0 ? "O" : "X";
        turn0 = !turn0;

        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            disableAllBoxes();
            return;
        }
    }

    let isDraw = Array.from(boxes).every(box => box.innerText !== "");
    if (isDraw) {
        msg.innerText = "It's a Draw!";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Reset game
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    msg.innerText = "";
});
