const loadBookListToDOM = () => {
    let bookListElement = document.getElementById("book_list")
    let bookList = getBookList()
    if (bookList.length > 0)
        renderDataToDOM(bookListElement, bookList, "bookList")
    else
        renderEmptyDataToDOM(bookListElement, "Book List")
}

const loadBookFinishedToDOM = () => {
    let finishedBookListElement = document.getElementById("finished_book_list")
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
    data.forEach(book => {
        let newCardElement = document.createElement('div')
        newCardElement.classList.add("cardBook")

        // Image
        let imageElement = document.createElement('img')
        imageElement.setAttribute('src', book.imageURL)
        imageElement.setAttribute('alt', book.title)
        imageElement.classList.add('book_image')
        newCardElement.append(imageElement)

        let descriptionElement = document.createElement('div')
        descriptionElement.classList.add("book_description")
        descriptionElement.innerHTML = `
        <div class="book_title">
            ${book.title}
        </div>
        <div class="book_year">
            ${book.year}
        </div>
        <div class="book_actions">
            <button class="btn_delete">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button class="btn_done" onclick='updateBookByID(${book.id}, "${category}")'>
            ${category === "bookList" ? "✔" :
                '<i class="fa fa-undo" aria-hidden="true"></i>'
            }
            </button >
        </div >
    `
        newCardElement.append(descriptionElement)
        element.append(newCardElement)
    });
}

loadBookListToDOM()
loadBookFinishedToDOM()