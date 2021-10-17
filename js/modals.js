let modalForm = document.getElementById("modal_form");
let modalValidation = document.getElementById("modal_validation");

let btnAddBook = document.getElementById("button_add_book");
let btnClearFinished = document.getElementById("button_clear_finished");

let spanAddBook = document.getElementsByClassName("close")[0];
let spanClear = document.getElementsByClassName("close")[1];

let modalElement = document.getElementById("modal_detail")
let deleteButton = document.getElementsByClassName("btn_delete")[0];

const closeModalForm = () => { modalForm.style.display = "none" }
const openModalForm = () => { modalForm.style.display = "block" }

btnAddBook.onclick = () => openModalForm()
spanAddBook.onclick = () => closeModalForm()

const closeModalValidation = () => { modalValidation.style.display = "none" }
const openModalValidation = () => { modalValidation.style.display = "block" }

btnClearFinished.onclick = () => openModalValidation()
spanClear.onclick = () => closeModalValidation()

// When the user clicks anywhere outside of the modalForm or modalValidation, close it
window.onclick = (event) => {
    if (event.target == modalForm || event.target == modalValidation) {
        closeModalForm()
        closeModalValidation()
    }
}