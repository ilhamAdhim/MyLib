window.addEventListener('load', () => {
    initializeBooks()
    loadBookListToDOM()
    loadBookFinishedToDOM()
})

document.getElementsByClassName("submit_add_book")[0].addEventListener('click', () => {
    addNewBookToBookList()
    closeModalForm()
})

document.getElementsByClassName('yes_remove_book')[0].addEventListener('click', () => {
    removeBookByID(currentBookID) // Remove the actual data on localStorage
    removeBookElement()
    closeModalDeleteBook()
})

document.getElementsByClassName('yes_clear')[0].addEventListener('click', () => {
    removeDOMBookFinishedElement()
    deleteAllFinishedBooks() // Remove the actual data on localStorage
    closeModalValidation()
})

document.getElementById("btn_search").addEventListener('click', () => {
    doSearch()
})

document.getElementById("search_input").addEventListener('input', (e) => {
    if (e.target.value.length === 0) {
        removeAllBookForSearchResult(false)
        window.dispatchEvent(new Event('load'))
    }
})

