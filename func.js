let myLibrary =[];
let bookCollection = document.querySelector('.books');
let myForm = document.querySelector('form');
let buttonVal = 1;
let BookDef = new Book()
    BookDef.bookNumber = 1;
    BookDef.title = "Harry Potter and the Philosopher's Stone";
    BookDef.author = "J.K. Rowling";
    BookDef.pages = "223";
    BookDef.read = "notyet";
    myLibrary.push(BookDef);
    displayBook(BookDef);



function Book(){
    this.bookNumber;
    this.title;
    this.author;
    this.pages;
    this.read;
}

function addBookToLibrary(){
    let bAuthor = document.getElementById('author').value;
    let bTitle = document.getElementById('title').value;
    let bPages= document.getElementById('pages').value;
    let bRead = document.querySelector('.checkBox:checked').value;
    let cBook= new Book();
    if(!([bAuthor.length,bTitle.length,bPages.length,bRead.length].includes(0))){
        cBook.bookNumber = myLibrary.length+1;
        cBook.title = bTitle;
        cBook.author =bAuthor;
        cBook.pages = bPages;
        cBook.read = bRead;
        myLibrary.push(cBook);
        //getting the value inside the array myLibrary[arrayvalue].key
        displayBook(cBook);
        let check = document.querySelectorAll('.checkBox');
        check.forEach(a=> a.disabled = false);
        myForm.reset();//reset the input field
    }
}

function disableOther(c){//disable other checkbox if the other is checked
    let check = document.querySelectorAll('.checkBox');
    for(let a = 0,b;b = check[a];a++ ){
        b.disabled = !(!c.checked || b === c);
    } 
}


function displayBook(curBook){
    let cardVal = document.createElement("div");
    
    //add details in card
    let stat = ['Title', 'Author','Pages']
    let counter = 0;
    for(const key in curBook){
        let item = document.createElement("div"); 
        let title = document.createElement("div"); 

        if(`${key}`== "bookNumber"){
            continue;
        }else if(['read','notyet'].includes(`${curBook[key]}`)){
            let buttonRead = document.createElement('button'); 
            let remove = document.createElement("button"); 
            let word;
            buttonRead.classList.add("read"); 
            `${curBook[key]}`=='read'? word = "Already Read":word = "Didn\'t Read Yet";
            buttonRead.textContent = word;
            remove.textContent = "Remove";
            remove.classList.add("remove");
            item.setAttribute("id",buttonVal); 
            item.classList.add("buttons");
            item.appendChild(buttonRead);
            item.appendChild(remove);
            cardVal.appendChild(item);
        }else{
       //bold the title page author 
        item.innerHTML =`<strong>${stat[counter]}</strong>:${curBook[key]}`;
        cardVal.appendChild(item);
        }
        counter++;
    } 
    cardVal.classList.add('card');
    cardVal.setAttribute("id","card"+buttonVal); 
    bookCollection.appendChild(cardVal);
    buttonVal++;
}

let addBook = document.getElementById('addBook');
let closeModal = document.querySelector('.closebtn');
let openModal = document.querySelector('.open');
let modal = document.getElementById('modal');


addBook.addEventListener('click',addBookToLibrary);



openModal.addEventListener('click',function(){
    modal.style.display = 'block';
})

closeModal.addEventListener('click',function(){
    modal.style.display = 'none';
})

window.addEventListener('click',function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }else if(e.target.classList.value == 'read'){
        if( e.target.textContent == "Already Read"){
            e.target.textContent = "Didn\'t Read Yet"
            myLibrary[e.target.parentNode.id-1].read = "notyet";
        }else if(e.target.textContent == "Didn\'t Read Yet"){
            e.target.textContent = "Already Read"
            myLibrary[e.target.parentNode.id-1].read = "read";
        }
       
    }else if(e.target.classList.value == 'remove'){  
        let curCard = document.querySelector(`[id=card${e.target.parentNode.id}]`)
        myLibrary.splice(myLibrary.findIndex(a=>a.bookNumber == e.target.parentNode.id),1);
        bookCollection.removeChild(curCard);

    }
    
})

