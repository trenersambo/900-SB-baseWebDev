
let data = document.querySelector('.form__input--data[type="text"]') // инициализация поля ввода имени
let dataTxt = document.querySelector('.form__labelerror-txt') // инициализация слова "Ошибка"

foo=(ev)=>{

  let name =  ev.target.value // в режиме он-лайн: посимовльная проверка- что вводится 
  let item = name.match(/[^A-Za-zА-Яа-яЁ-ё]/gi) // regExp: есть ли НЕбуквы

  // console.log(item)

  if(item == null) {
    ev.target.classList.remove('form__nameerror') // удалить стиль ошибки
    dataTxt.style.display='none' // скрыть слово "ошибка"    

  } else if( item.length > 0) {
    //console.log("стиль - красный")
    // ev.currentTarget.classList.add('nameerror')

    ev.target.classList.add('form__nameerror') // встраивание стиля ошибки
    dataTxt.style.display='inline-block' // показать слово "ошибка"

  }

}

data.addEventListener('input', foo ) // на каждый клик клавиши в поле - прослушиваю события в поле ввода "Имя"


 

