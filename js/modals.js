let modalForm = document.getElementById("modal_form");
let modalValidation = document.getElementById("modal_validation");

let btnAddBook = document.getElementById("button_add_book");
let btnClearFinished = document.getElementById("button_clear_finished");

let spanAddBook = document.getElementsByClassName("close")[0];
let spanClear = document.getElementsByClassName("close")[1];

btnAddBook.onclick = function () {
    modalForm.style.display = "block";
}

spanAddBook.onclick = function () {
    modalForm.style.display = "none";
}

spanClear.onclick = function () {
    modalValidation.style.display = "none";
}

btnClearFinished.onclick = function () {
    modalValidation.style.display = "block";
}

// When the user clicks anywhere outside of the modalForm or modalValidation, close it
window.onclick = function (event) {
    if (event.target == modalForm || event.target == modalValidation) {
        modalForm.style.display = "none";
        modalValidation.style.display = "none";
    }
}