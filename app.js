const awesomeBooks = document.getElementById('awesomeBooks');

class Book {
  constructor(awesomeBooks) {
    this.awesomeBooks = awesomeBooks;
    this.books = [];
  }

  updateLocalstorage() {
    localStorage.setItem('bookLibarie', JSON.stringify(this.books));
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  removeDom(element) {
    element.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        this.remove(parent.id);
        parent.remove();
      });
    });
<    } else {
      link.style.color = 'rgb(241, 43, 43)';
      link.previousElementSibling.style.color = '#000';
      link.previousElementSibling.previousElementSibling.style.color = '#000';
      page.classList.remove('hiden');
      page.previousElementSibling.classList.add('hiden');
      page.previousElementSibling.previousElementSibling.classList.add('hiden');
    }
  };
});

const date = document.querySelector('.date');
const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
const ampm = hour >= 12 ? 'pm' : 'am';

date.innerHTML = `${mo} ${da}th ${ye}, ${hour}:${minute}:${second} ${ampm}`;

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
