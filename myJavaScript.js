// function buttonClick() {
//   document.getElementById("button1").onclick = function () {
//        location.href = "mainPage.html";
//    };
// }

var shiftWindow = function() { scrollBy(0, -72) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
