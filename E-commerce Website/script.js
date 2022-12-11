//Searchbar
// const f = document.getElementById('search');
// const q = document.getElementById('query');
// const google = 'https://www.google.com/search?q=site%3A+';

// function submitted(event) {
//         event.preventDefault();
//         const url = google + '+' + q.value;
//         const win = window.open(url, '_blank');
//         win.focus();
// }

// f.addEventListener('submit', submitted);


//Navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}