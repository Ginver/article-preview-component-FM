const popup = document.querySelector(".popup--social")
// console.log(popup)
const btn1 = document.querySelector(".btn__arrow");
const btn2 = document.querySelector(".btn__arrow--responsive");

btn1.addEventListener("click", popupSocial);
btn2.addEventListener("click", popupSocial);

function popupSocial() {
    // console.log("test")
    if (popup.style.visibility === "visible") {
        popup.style.visibility = "hidden";
    } else {
        popup.style.visibility = "visible";
    }
}

