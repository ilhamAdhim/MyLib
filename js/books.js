const STORAGE_KEY = "MYLIB_APPS"
let dataBooks = [];

const isStorageExist = () => {
    if (typeof (Storage) === undefined) {
        alert("Local Storage is not supported by your browser");
        return false
    }
    return true;
}

const updateDataToStorage = () => {
    if (isStorageExist())
        saveData();
}

const saveData = () => {
    const parsed = JSON.stringify(dataBooks);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}


const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
    if (data !== null)
        dataBooks = data;
    document.dispatchEvent(new Event("ondataloaded"));
}

const initializeBooks = () => {
    if (isStorageExist() && localStorage.getItem(STORAGE_KEY) === null) {
        dataBooks = [
            {
                id: +new Date(),
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K Rowling",
                year: 1997,
                isComplete: false,
            },
            {
                id: +new Date() + 1,
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K Rowling",
                year: 1997,
                isComplete: false,
            },
            {
                id: +new Date() + 2,
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K Rowling",
                year: 1997,
                isComplete: false,
            },
            {
                id: +new Date() + 3,
                title: "Harry Potter and Ilham Gokil",
                author: "J.K Rowling",
                year: 2012,
                isComplete: true,
            },
            {
                id: +new Date() + 4,
                title: "Harry Potter and the Philosopher's Stone",
                author: "Ilham Rowling",
                year: 2000,
                isComplete: false,
            },
        ]
        updateDataToStorage(dataBooks)
    } else
        loadDataFromStorage(STORAGE_KEY)
}


const addNewBook = ({ title, author, year, isComplete }) => {
    return {
        id: +new Date(),
        title,
        author,
        year,
        isComplete,
    };
}

const searchBookByTitle = (title) => {
    return dataBooks.filter(book => book.title === title)
}

const removeBookByID = bookID => {
    dataBooks = dataBooks.filter(item => item.id !== bookID);
    updateDataToStorage();
}

const updateBookByID = (updatedBook) => {
    // Compare the id, if IDs are similar, then replace the object into the updated ones
    dataBooks.map(book =>
        book.id === updatedBook.id ? updatedBook : x
    );
    updateDataToStorage();
}

const getBookList = () => {
    return dataBooks.filter(item =>
        item.isComplete === false
    );
}

const getFinishedBookList = () => {
    return dataBooks.filter(item =>
        item.isComplete === true
    )
}

const deleteAllBookList = () => {
    dataBooks = dataBooks.filter(item => item.isComplete === true)
    updateDataToStorage();
    getBookList();
    window.location.reload(false)
}

const deleteAllFinishedBooks = () => {
    dataBooks = dataBooks.filter(item => item.isComplete === false)
    updateDataToStorage();
    getFinishedBookList();
    window.location.reload(false)
}

initializeBooks()
// removeBookByID(1634304968375)
// console.log(getBookList())
// console.log(getFinishedBookList());