// Скрипт для появления / скрытия строки поиска

// переменные
let btnSearch = document.querySelector('.header__btn--search')
let btnClose = document.querySelector('.search-form__close')
let searchForm = document.querySelector('.search-form')

//  клик по Лупе: раскрытие строки поиска
btnSearch.addEventListener('click', ()=>{
  searchForm.classList.add('search-form--display');

  setTimeout(()=> {
    searchForm.classList.add('search-form--visible');
  }, 350) ;
})

//  клик по Крестику: зарытие строки поиска
btnClose.addEventListener('click', ()=>{

  searchForm.classList.remove('search-form--visible') ;

  setTimeout(()=>{
    searchForm.classList.remove('search-form--display')
    searchForm.reset()// очистка содержимого строки поиска в форме
  }, 250) ;
})


