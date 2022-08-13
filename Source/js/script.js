const $ = document;
let inputUserName = $.querySelector(".userName");
let wordCount = $.querySelector(".counter");
function userNameHandler() {
    let maxLength = inputUserName.getAttribute("maxlength");
    let lengthInput = inputUserName.value.length;
    wordCount.innerHTML = maxLength - lengthInput ;
}
inputUserName.addEventListener('keyup', userNameHandler);