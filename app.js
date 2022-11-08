
    let books = [];

    const awesomeBooks = document.getElementById('awesomeBooks');

    function updateLocalstorage() {
    localStorage.setItem('bokLibrarie', JSON.stringify(books));
    }

    function remove(id) {
    books = books.filter((book) => book.id !== id);
    updateLocalstorage();
    }

    function removeDom(element) {
    element.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        remove(parent.id);
        parent.remove();
        });
    });
    }

    function render(book) {
    awesomeBooks.innerHTML += `
        <li id="${book.id}">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <button class="btn">remove</button>
        <hr>  
        </li>
        
        `;
    removeDom(awesomeBooks);
    }

    function add(book) {
    render(book);
    books.push(book);
    removeDom(awesomeBooks);
    updateLocalstorage();
    }

    document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const error = document.getElementById('error');
    const { title, author } = e.target;
    if (title.value.length < 1 || author.value.length < 1) {
        error.innerHTML = 'Input must contain characters';
    } else {
        error.innerHTML = '';
        add({
        id: Date.now().toString(),
        title: title.value,
        author: author.value,
        });
        e.target.title.value = '';
        e.target.author.value = '';
    }
    };

    if (localStorage.getItem('bokLibrarie')) {
    books = JSON.parse(localStorage.getItem('bokLibrarie'));
    } else {
    localStorage.setItem('bokLibrarie', JSON.stringify([]));
    }

    books.forEach((book) => render(book));





























































































































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


































