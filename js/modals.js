// Get the modalForm
let modalForm = document.getElementById("modal_form");
let modalValidation = document.getElementById("modal_validation");

// Get the button that opens the modalForm
let btnAddBook = document.getElementById("button_add_book");
let btnClearFinished = document.getElementById("button_clear_finished");

// Get the <span> element that closes the modalForm
let spanAddBook = document.getElementsByClassName("close")[0];
let spanClear = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modalForm
btnAddBook.onclick = function () {
    modalForm.style.display = "block";
}

// When the user clicks on <span> (x), close the modalForm and modalValidation
spanAddBook.onclick = function () {
    modalForm.style.display = "none";
}

spanClear.onclick = function () {
    modalValidation.style.display = "none";
}

// When the user clicks on the button, open the modal_validation
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