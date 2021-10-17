// Handling modal Form
let modalForm = document.getElementById("modal_form");
let btnAddBook = document.getElementById("button_add_book");
let spanAddBook = document.getElementsByClassName("close")[0];

const closeModalForm = () => { modalForm.style.display = "none" }
const openModalForm = () => { modalForm.style.display = "block" }

btnAddBook.onclick = () => openModalForm()
spanAddBook.onclick = () => closeModalForm()


// Handling modal Validation
let modalValidation = document.getElementById("modal_validation");
let btnClearFinished = document.getElementById("button_clear_finished");
let spanClear = document.getElementsByClassName("close")[1];

const closeModalValidation = () => { modalValidation.style.display = "none" }
const openModalValidation = () => { modalValidation.style.display = "block" }

btnClearFinished.onclick = () => openModalValidation()
spanClear.onclick = () => closeModalValidation()


// Handling modal Remove Book

let modalDeleteBook = document.getElementById("modal_delete_book");
let spanRemoveBook = document.getElementsByClassName("close")[2];

const closeModalDeleteBook = () => { modalDeleteBook.style.display = "none" }
const openModalDeleteBook = () => { modalDeleteBook.style.display = "block" }

// button remove tiap object buku diatur dalam dom.js
spanRemoveBook.onclick = () => closeModalDeleteBook()


// When the user clicks anywhere outside of the modalForm or modalValidation, close it
window.onclick = (event) => {
    if (event.target == modalForm || event.target == modalValidation || event.target == modalDeleteBook) {
        closeModalForm()
        closeModalValidation()
        closeModalDeleteBook()
    }
}