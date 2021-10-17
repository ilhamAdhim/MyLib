let bookListElement = document.getElementById("book_list")
let finishedBookListElement = document.getElementById("finished_book_list")

const loadBookListToDOM = () => {
    let bookList = getBookList()
    if (bookList.length > 0)
        renderDataToDOM(bookListElement, bookList, "bookList")
    else
        renderEmptyDataToDOM(bookListElement, "Book List")
}

const loadBookFinishedToDOM = () => {
    let bookFinished = getFinishedBookList()
    if (bookFinished.length > 0)
        renderDataToDOM(finishedBookListElement, bookFinished, "bookFinished")
    else
        renderEmptyDataToDOM(finishedBookListElement, "Finished Book")
}

const renderEmptyDataToDOM = (element, category) => {
    let emptySectionElement = document.createElement('div')

    // Image
    let imageElement = document.createElement('img')
    imageElement.setAttribute('src', '../assets/undraw_Taking_notes_re_bnaf.svg')
    imageElement.setAttribute('alt', "No data")
    imageElement.classList.add('no_data_image')
    emptySectionElement.append(imageElement)

    let captionElement = document.createElement('div')
    captionElement.classList.add('caption_empty')

    captionElement.innerText = `No ${category} is found`
    emptySectionElement.append(captionElement)

    element.append(emptySectionElement)
}

const renderDataToDOM = (element, data, category) => {
    let delayAnimation = 0;
    data.forEach(book => {
        delayAnimation = delayAnimation + 150
        renderEachBookDOM(book, element, category, delayAnimation)
    });
}

const renderEachBookDOM = (book, element, category, delayAnimation = 0) => {
    let newCardElement = document.createElement('div')
    newCardElement.classList.add("card_book")
    newCardElement.setAttribute('data-aos', 'flip-right')
    newCardElement.setAttribute('data-aos-duration', 500)
    newCardElement.setAttribute('data-aos-delay', delayAnimation)

    // Image
    let imageElement = document.createElement('img')
    imageElement.setAttribute('src', book.imageURL.length !== 0 ? book.imageURL : '../assets/undraw_Images_re_0kll.svg')
    imageElement.setAttribute('alt', book.title)
    imageElement.classList.add('book_image')
    newCardElement.append(imageElement)

    let descriptionElement = document.createElement('div')
    descriptionElement.classList.add("book_description")
    descriptionElement.innerHTML = `
        <div class="book_title">
            ${book.title}
        </div>
        <div class="book_details">
            <div class="book_author">
                By ${book.author}
            </div>
            <div class="book_year">
                ${book.year}
            </div>
        </div>
        <div class="book_actions">
            <button class="btn_delete" onclick='removeBookElement(event, ${book.id})'>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button class="btn_done" onclick='changeBookshelfElement(event, ${book.id}, "${category}")'>
            ${category === "bookList" ?
            "✔" : '<i class="fa fa-undo" aria-hidden="true"></i>'
        }
            </button >
        </div >
    `
    newCardElement.append(descriptionElement)
    element.append(newCardElement)
}

const addNewBookToBookList = () => {
    let titleValue = document.getElementById("inputTitle").value;
    let authorValue = document.getElementById("inputAuthor").value;
    let yearValue = document.getElementById("inputYear").value;
    let imageURLValue = document.getElementById("inputImageURL").value;

    let validatorTitleElement = document.getElementsByClassName("validatorTitle")[0]
    let validatorAuthorElement = document.getElementsByClassName("validatorAuthor")[0]
    let validatorYearElement = document.getElementsByClassName("validatorYear")[0]

    // Validator codes
    if (titleValue.length === 0 || authorValue.length === 0 || yearValue.length === 0) {
        if (titleValue.length === 0) {
            validatorTitleElement.style.color = "red"
            validatorTitleElement.innerText = "Required field"
        }
        else if (titleValue.length > 0) {
            validatorTitleElement.style.display = "none"
        }

        if (authorValue.length === 0) {
            validatorAuthorElement.style.color = "red"
            validatorAuthorElement.innerText = "Required field"
        }
        else if (authorValue.length > 0) {
            validatorAuthorElement.style.display = "none"
        }

        if (yearValue.length === 0) {
            validatorYearElement.style.color = "red"
            validatorYearElement.innerText = "Required field"
        }
        else if (yearValue.length > 0) {
            validatorYearElement.style.display = "none"
        }

    } else {
        let newBook = addNewBook(titleValue, authorValue, yearValue, imageURLValue)
        dataBooks.push(newBook)
        updateDataToStorage();
        // Render new book object
        renderEachBookDOM(newBook, bookListElement, "bookList")
    }
}

const searchBook = () => {
    let inputSearchValue = document.getElementById('search_input').value

    dataBooks = searchBookByTitle(inputSearchValue)
}

const searchBookByEnter = (e) => {
    if (e.key == "Enter")
        searchBook()
}

const resetSearch = () => {
    window.dispatchEvent(Event('load'))
}

const removeDOMBookFinishedElement = () => {
    let bookFinished = getFinishedBookList()
    bookFinished.forEach(item => {
        let children = document.querySelector('#finished_book_list .card_book');
        children.remove()
    })
    renderEmptyDataToDOM(finishedBookListElement, "Finished Book")
}

const removeBookElement = (event, bookID) => {
    let bookElement = event.target.parentElement.offsetParent

    bookElement.remove()
    removeBookByID(bookID)

    let bookList = getBookList()
    let bookFinished = getFinishedBookList()

    if (bookList.length > 0)
        renderEmptyDataToDOM(bookListElement, "Book List")

    if (bookFinished.length > 0)
        renderEmptyDataToDOM(finishedBookListElement, "Finished Book")

}

const changeBookshelfElement = (event, bookID, category) => {
    // current card book
    let currentBookElement = event.target.parentElement.offsetParent

    // destructure element to object
    let currentImgSrc = currentBookElement.querySelector('img').src
    let currentBookTitle = currentBookElement.querySelector('.book_title').innerText
    let currentBookAuthor = currentBookElement.querySelector('.book_author').innerText
    let currentBookYear = currentBookElement.querySelector('.book_year').innerText

    let currentBook = {
        id: bookID,
        imageURL: currentImgSrc,
        title: currentBookTitle,
        author: currentBookAuthor,
        year: currentBookYear
    }
    // Move to another shelf
    if (category === "bookList")
        renderEachBookDOM(currentBook, finishedBookListElement, 'bookFinished')
    else if (category === "bookFinished")
        renderEachBookDOM(currentBook, bookListElement, 'bookList')

    currentBookElement.remove()

    updateBookByID(bookID, category)
}

const doSearch = () => {
    let inputSearchValue = document.getElementById('search_input').value
    if (inputSearchValue.length > 0) {
        console.log("typing")
        searchBookByTitle(inputSearchValue)
    } else {
        console.log("reset")
        resetSearch()
    }
}


