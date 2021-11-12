let myLibrary =[];
let bookCollection = document.querySelector('.books');
let myForm = document.querySelector('form');

function Book(){
    this.bookNumber;
    this.title;
    this.author;
    this.pages;

}



function addBookToLibrary(){
    let bAuthor = document.getElementById('author').value;
    let bTitle = document.getElementById('title').value;
    let bPages= document.getElementById('pages').value;

    let cBook= new Book();
    cBook.bookNumber = myLibrary.length+1;
    cBook.title = bTitle;
    cBook.author =bAuthor;
    cBook.pages = bPages;
    myLibrary.push(cBook);
    //getting the value inside the array myLibrary[arrayvalue].key
    console.log(myLibrary);
    displayBook(cBook)
    //myForm.reset();//reset the input field
}



function displayBook(curBook){
    let cardVal = document.createElement('div');
    let imageCon =document.createElement('div');
    let curImage =document.createElement('img');
    //add image in card
    curImage.src = 'images/noimage.png'
    imageCon.appendChild(curImage);
    imageCon.classList.add('image');
    cardVal.appendChild(imageCon);
    //add details in card
    let stat = ['Book Number','Title', 'Author','Pages']
    let counter = 0;
    for(const key in curBook){
        let item = document.createElement('div'); 
        item.textContent = `${stat[counter]} : ${curBook[key]}`;
        cardVal.appendChild(item);
        counter++;
    }
    cardVal.classList.add('card');
    bookCollection.appendChild(cardVal);
}


let closeModal = document.querySelector('.closebtn');
let openModal = document.querySelector('.open');
let modal = document.getElementById('modal');

openModal.addEventListener('click',function(){
    modal.style.display = 'block';
})
closeModal.addEventListener('click',function(){
    modal.style.display = 'none';
})

window.addEventListener('click',function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
})

