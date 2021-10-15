const loadBookListToDOM = () => {
    console.log("book list ", getBookList())

    let bookListElement = document.getElementById("book_list")

    let count = 0;
    getBookList().forEach(book => {
        count++;
        let newCardElement = document.createElement('div')
        newCardElement.classList.add("cardBook")
        newCardElement.innerText = `${book.title}, ${book.id}`
        bookListElement.append(newCardElement)
        if (count % 3 == 0)
            bookListElement.append(document.createElement('hr'))
    });
}

const loadBookFinishedToDOM = () => {
    console.log("finished reading ", getFinishedBookList())

    let finishedBookListElement = document.getElementById("finished_book_list")
    let count = 0;

    getFinishedBookList().forEach(book => {
        count++;
        let newCardElement = document.createElement('div')
        newCardElement.classList.add("cardBook")
        newCardElement.innerText = `${book.title}, ${book.id}`
        finishedBookListElement.append(newCardElement)
        if (count % 3 == 0)
            bookListElement.append(document.createElement('hr'))
    });
}

loadBookListToDOM()
loadBookFinishedToDOM()