
    const awesomeBooks = document.getElementById('awesomeBooks');

    class Book {
        constructor(awesomeBooks) {
            this.awesomeBooks = awesomeBooks;
            this.books = [];
        }


        updateLocalstorage() {
            localStorage.setItem('bookLibarie', JSON.stringify(this.books))
        }

        remove (id) {
            this.books = this.books.filter((book) => book.id !== id)
        }

        
    removeDom(element) {
        element.querySelectorAll('.btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
            const parent = e.target.parentNode;
            this.remove(parent.id);
            parent.remove();
            });
        });
        }



        render(book) {
            this.awesomeBooks.innerHTML += `
                <li id="${book.id}">
                <p><span>${book.title}</span> by <span>${book.author}</span>. </p>
                </div>
                <button class="btn">Remove</button>
                </li>
                `;
            this.removeDom(awesomeBooks);
            }
    
        add(book) {
            this.render(book);
            this.books.push(book);
            this.removeDom(awesomeBooks);
            this.updateLocalstorage();
            }
    }

    
    const libary = new Book (awesomeBooks);

    document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const error = document.getElementById('error');
    const { title, author } = e.target;

    if (title.value.length < 3 || author.value.length < 1) {
        error.innerHTML = 'input filed must contain characters ';
    } else {
        error.innerHTML = '';
        libary.add({
        id: Date.now().toString(),
        title: title.value,
        author: author.value,
        });
        e.target.title.value = '';
        e.target.author.value = '';
    }
    };

    if (localStorage.getItem('bookLibarie')) {
    libary.books = JSON.parse(localStorage.getItem('bookLibarie'));
    } else {
    localStorage.setItem('bookLibarie', JSON.stringify([]));
    }

    libary.books.forEach((book) => libary.render(book));





























































































































// const titleInput = document.querySelector('#title');
// const authorInput = document.querySelector('#author');
// const bookFormInput = document.querySelector('#book_form');
// const button = document.querySelector('#btn');

// button.addEventListener('click', (event)=> {
// event.preventDefault();
//     if(titleInput.value == "" && authorInput) {
        // return
//     }

//     else {
//         const booklist = document.querySelector('#book-list')
//         const newbook = document.createElement('div');
//         const newAuthor = document.createElement('div');

//         newbook.innerHTML = titleInput.value;
//         booklist.appendChild(newbook);

//         newAuthor.innerHTML = authorInput.value;
//         booklist.appendChild(newAuthor);

//         const removeBtn = document.createElement('button');
//         removeBtn.innerHTML = 'Remove';

//         removeBtn.addEventListener('click', ()=>{
//         booklist.removeChild(newbook) ;
//         booklist.removeChild(newAuthor);
//         booklist.removeChild(removeBtn);
//         booklist.removeChild(horizontalRule);
//         });
//         booklist.appendChild(removeBtn)

//         const horizontalRule = document.createElement('hr')

//         booklist.appendChild(horizontalRule)
//         bookFormInput.appendChild(newbook)
//     }

// });



































