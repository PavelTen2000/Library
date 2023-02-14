function Book(title, author, pages, read) {
    (this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.read = read);
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    // do stuff here
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const openWindowButtons = document.querySelectorAll('[data-window-target]');
// мы выбираем как будто у нас несколько путей как мы можем открыть
// наше окно, все кнопки с атрибутом data-window-target
const closeWindowButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openWindowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const window = document.querySelector(button.dataset.windowTarget);
        openModal(window);
    });
});

closeWindowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const window = button.closest('.window');
        closeModal(window);
    });
});

function openModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    const modal = document.querySelectorAll('.window.active');
    modal.forEach((modal) => closeModal(modal));
});
