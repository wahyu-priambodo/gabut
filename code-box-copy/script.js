const codeWrapper = document.querySelectorAll(".codeWrapper");
const output = document.querySelectorAll(".output");
const copyText = document.querySelectorAll(".copyText");


const copyToClipboard = () => {
    copyText.forEach((l) => {
        l.addEventListener("click", () => {
            if (l == copyText[0]) {
                const bashCode = document.getElementById("bashCode").textContent;
                navigator.clipboard.writeText(bashCode);
                console.log(bashCode);
                l.textContent = "copied";
                l.style.borderColor = "rgb(55,175,101)";
            } else if (l == copyText[1]) {
                const javaCode = document.getElementById("javaCode").textContent;
                navigator.clipboard.writeText(javaCode);
                l.textContent = "copied";
                l.style.borderColor = "rgb(55,175,101)";
            }
        });
    });
};

codeWrapper.forEach((i) => {
    i.addEventListener('mouseenter', () => {
        if (i == codeWrapper[0]) {
            codeWrapper[0].classList.toggle('highlightBoxes');
            output[0].classList.toggle('highlightBoxes');
            output[0].classList.toggle('highlightBorderOutput1');
            copyText[0].removeAttribute("hidden", "");
            copyToClipboard();
        } else {
            codeWrapper[1].classList.toggle('highlightBoxes');
            output[1].classList.toggle('highlightBoxes');
            output[1].classList.toggle('highlightBorderOutput2');
            copyText[1].removeAttribute("hidden", "");
            copyToClipboard();
        }
    });
    i.addEventListener('mouseleave', () => {
        i.classList.toggle('highlightBoxes');
        output.forEach((j) => {
            j.classList.remove('highlightBoxes');
            j.classList.remove('highlightBorderOutput1');
            j.classList.remove('highlightBorderOutput2');
        });

        copyText.forEach((k) => {
            k.setAttribute("hidden", "");
            k.textContent = "copy";
            k.style.borderColor = "rgb(130, 140, 150)";
        });
    });
});