document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
});

window.addEventListener('load', () => {
    initializeBooks()
    loadBookListToDOM()
    loadBookFinishedToDOM()
})

document.getElementsByClassName("submit_add_book")[0].addEventListener('click', () => {
    addNewBookToBookList()
    closeModalForm()
})

document.getElementsByClassName('yes_clear')[0].addEventListener('click', () => {
    removeDOMBookFinishedElement()
    closeModalValidation()
    deleteAllFinishedBooks()
})

document.getElementById("btn_search").addEventListener('click', () => {
    doSearch()
})