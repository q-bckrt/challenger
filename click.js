let nInput = "";

const sample = document.querySelector(".typing_sound");

const key = document.querySelectorAll(".key");
for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", () => {
        sample.currentTime = 0;
        sample.play();
        if (key[i].classList.contains("num")) {
            nInput += key[i].innerText.trim();
            // stack[0] = parseFloat(nInput);
            document.getElementById("reg_x_l").innerText = nInput;
        } else if (key[i].classList.contains("enter") && nInput.length) {
            rpn(parseFloat(nInput));
            nInput = "";
        } else if (key[i].classList.contains("op")) {
            if (nInput.length) {
                rpn(parseFloat(nInput));
                nInput = "";
            }
            rpn(key[i].innerText.trim());
        } else {
            console.log("Invalid!");
        }
    })
}
