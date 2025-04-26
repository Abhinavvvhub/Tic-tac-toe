// selecting html elements in js//
const box = document.querySelectorAll(".box");  //getting all buttons from html//
const p = document.getElementById("p");  //getting wining para from html which shows the winner//
const newbtn = document.getElementById("butn");  //getting newgame button from html//
const audio = document.getElementById("gamesound")  //getting the sound of gameover//
const newgamesound = document.getElementById("new")  //getting the sound of new game//
const winpatterns = [
    [0, 1, 2], // row //
    [3, 4, 5], // middile row //
    [6, 7, 8], // last row //
    [0, 3, 6], // 1st colomn //
    [1, 4, 7], // middile colomn //
    [2, 5, 8], // last colomn // 
    [6, 4, 2], // 1s diagonal // 
    [0, 4, 8], // other diagonal //
]
// function for alternate turn of players// 
let turnx = true;
box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.textContent = "x";
            turnx = false;
        }
        else {
            turnx
            box.textContent = "o"
            turnx = true;
        }
        box.disabled = true;
        checkwin();
        // alternate turn function ends here//

    })
});
// this function starts a new game after winning//
const newgame = () => {
    box.forEach((box) => {
        box.disabled = false;
        box.textContent = "";
        p.textContent = "";
        newgamesound.play();
    });
}
// this function stops game after winning//
const btndisbale = () => {
    box.forEach((box) => {
        box.disabled = true;
    });
}
//this function tracks the winning patterns//
const checkwin = () => {
    winpatterns.forEach((winpatterns) => {
        let pos1val = box[winpatterns[0]].textContent;
        let pos2val = box[winpatterns[1]].textContent;
        let pos3val = box[winpatterns[2]].textContent;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                audio.play()
                p.textContent = `Congratulations Winner is ${pos2val}`
                p.style.opacity = 1;
                btndisbale();
            }
        }
    });
};
//this function calls the newgame function when the new game button gets clicked//
newbtn.addEventListener("click", newgame);