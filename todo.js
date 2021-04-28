let books = document.querySelectorAll('#book-list li .name');

const bookList = document.querySelector('#book-list');
bookList.innerHTML += '<p>'

const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = ' Delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');


    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});


//filter boooks
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display='block';
        } else {
            book.style.display='none';
        }
    });
});



//set initial count
let count = 0;


// select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});