var isShown = false
function displayHeader() {
    isShown = !isShown;
    let rowXs = document.getElementsByClassName("rowx--res")
    rowXs = Array.from(rowXs);

    if (isShown) {
        rowXs.forEach(rowX => {
            rowX.style.display ="block"
        });
    } else {
        rowXs.forEach(rowX => {
            rowX.style.display ="none"
        });
    }

}
