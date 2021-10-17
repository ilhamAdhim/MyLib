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
}


const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
    if (data !== null)
        dataBooks = data;
}

const initializeBooks = () => {
    if (isStorageExist() && localStorage.getItem(STORAGE_KEY) === null) {
        dataBooks = [
            {
                "id": 1634376225400,
                "title": "Harry Potter and the Philosopher's Stone",
                "author": "Ilham Rowling",
                "imageURL": "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg?h=375&resize=fit&w=250",
                "year": 2000,
                "isCompleted": true
            },
            {
                "id": 1634391145501,
                "title": "Rich Dad Poor Dad",
                "author": "Robert Kiyosaki",
                "year": "2017",
                "imageURL": "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg",
                "isCompleted": true
            },
            {
                "id": 1634391847252,
                "title": "Atomic Habits",
                "author": "James Clear",
                "year": "2018",
                "imageURL": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/6/6/5105a9a3-3e95-4639-ba4e-b7ca91db8f4f.jpg",
                "isCompleted": false
            },
            {
                "id": 1634392008893,
                "title": "How to Win Friends and Influence People",
                "author": "Dale Carnegie",
                "year": "1936",
                "imageURL": "https://miro.medium.com/max/644/1*2jWzEpx7pPLD4hTiXrGroQ.jpeg",
                "isCompleted": false
            },
            {
                "id": 1634392102756,
                "title": "Future We Choose",
                "author": "Christiana Figueres",
                "year": "2020",
                "imageURL": "https://images-na.ssl-images-amazon.com/images/I/4135O-8cnmL._SX329_BO1,204,203,200_.jpg",
                "isCompleted": true
            },
            {
                "id": 1634392125165,
                "title": "Coba judul",
                "author": "Saya sendiri",
                "year": "2000",
                "imageURL": "",
                "isCompleted": false
            }
        ]
        updateDataToStorage(dataBooks)
    } else
        loadDataFromStorage(STORAGE_KEY)
}

const addNewBook = (title, author, year, imageURL = "", isCompleted = false) => {
    return {
        id: +new Date(),
        title,
        author,
        year,
        imageURL,
        isCompleted,
    };
}

const searchBookByTitle = (title) => {
    return dataBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
}

const searchBookByID = (bookID) => {
    return dataBooks.filter(book => book.id === bookID)
}

const removeBookByID = bookID => {
    dataBooks = dataBooks.filter(item => item.id !== bookID);
    updateDataToStorage();
    /* window.location.reload(false); */
}

// This function is used for changing from bookList -> Finished, and vice versa
const updateBookByID = (bookID, category) => {
    document.dispatchEvent(new Event('onBookSwitched'))
    // Compare the id, if IDs are similar, then replace the object into the updated ones
    dataBooks.map(book =>
        book.id === bookID ?
            book.isCompleted = category === "bookList" ? true : false
            :
            book
    );
    updateDataToStorage();
}

const getBookList = () => {
    return dataBooks.filter(item =>
        item.isCompleted === false
    );
}

const getFinishedBookList = () => {
    return dataBooks.filter(item =>
        item.isCompleted === true
    )
}

const deleteAllBookList = () => {
    dataBooks = dataBooks.filter(item => item.isCompleted === true)
    updateDataToStorage();
}

const deleteAllFinishedBooks = () => {
    dataBooks = dataBooks.filter(item => item.isCompleted === false)
    updateDataToStorage();
}