const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookFormInput = document.querySelector('#book_form');
const button = document.querySelector('#btn');

button.addEventListener('click', (event)=> {
event.preventDefault();
    if(titleInput.value == "" && authorInput) {
        return
    }

    else {
        const booklist = document.querySelector('#book-list')
        const newbook = document.createElement('div');
        const newAuthor = document.createElement('div');

        newbook.innerHTML = titleInput.value;
        booklist.appendChild(newbook);

        newAuthor.innerHTML = authorInput.value;
        booklist.appendChild(newAuthor);

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';



        removeBtn.addEventListener('click', ()=>{
        booklist.removeChild(newbook) ;
        booklist.removeChild(newAuthor);
        booklist.removeChild(removeBtn);
        booklist.removeChild(horizontalRule);
        });
        booklist.appendChild(removeBtn)

        const horizontalRule = document.createElement('hr')

        booklist.appendChild(horizontalRule)
        bookFormInput.appendChild(newbook)
    }

});


































