//імгорт глобальних зміних
import { posts, removePosts } from './index'
import { closeModal } from './modal'

//Елемент в який будемо добавляти карточки
const gridWrapper = document.querySelector(".grid");

//Кнопка додати
const btnAdd = document.querySelector('[data-action="add"]');

let curent = 1;

export let fill = false;

let column;
let line;

//Шаблон картки
const cardItemHTML = (json) => {
  const windowInnerWidth = document.documentElement.clientWidth;

  const st = windowInnerWidth < 420 ? `style="width: ${windowInnerWidth - 40}px"` : 'style=""'
  return `<div class="card opacityNull shadow loading" ${st} data-id="${json.id}">
            <div class="card__img">
            </div>
            <div class="card__body">
              <div class="card__title">
                <h3>Card ${json.id}</h3>
              </div>
              <div class="card__text">
                <p>
                  ${json.title}
                </p>
              </div>
              <button class="btn" data-action="more">Подробнее</button>
            </div>
          </div>`;
};

//Додаємо карточку
export const addCard = (json) => {
  gridWrapper.insertAdjacentHTML("beforeend", cardItemHTML(json));
  const card = document.querySelector(`[data-id="${json.id}"]`);
  setTimeout(() => {
    card.classList.remove("opacityNull");
  }, 50);
  setTimeout(() => {
    card.classList.remove("loading");
  }, 3000);
  ++curent;
};

//Получаєм дані із сервера
export const newCard = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${curent}`)
    .then((response) => response.json())
    .then((json) => {
      addCard(json);
      posts.push(json);
    });
};

//обробляємо клік на "Добавить"
btnAdd.addEventListener("click", () => {
  newCard();
});

//Заповнюємо контейнер
//цикл для плавного заповнення
function* genFunc(a) {
  for (let i = 0; i < a; i++) {
    yield newCard();
  }
}

const fnSetInterval = (elements) => {
  let gen = genFunc(elements);
  const int = setInterval(() => {
    let val = gen.next();

    if (val.done) {
      clearInterval(int);
   }
  }, 200);
}

export const fn = (f) => {
  fill = f
}

//обробляємо клік на "Заполнить"
window.addEventListener("click", (event) => {
  if(event.target.dataset.action === "fill") {
    //Визначаємо ширину та висоту екрану
    const windowInnerWidth = document.documentElement.clientWidth;
    const windowInnerHeight = document.documentElement.clientHeight;

    //Визначаємо кількість елементів
    line = Math.ceil((windowInnerHeight - 160) /380);

    if(windowInnerWidth > 941 ) {
      column = 4
    } else if(windowInnerWidth > 681 && windowInnerWidth < 920) {
      column = 3
    } else if(windowInnerWidth > 421 && windowInnerWidth < 680) {
      column = 2
    } else {
      column = 1
    }

    let elements = column*line - posts.length;

    fnSetInterval(elements)

    fn(true)
  }
});

//Відслідковуєм скрол
window.addEventListener('scroll', () =>{
  if(fill){
    const pageHeight = document.documentElement.scrollHeight;
    const windowInnerHeight = document.documentElement.clientHeight;
    if(pageHeight===windowInnerHeight+window.scrollY){

      const el = posts.length%column === 0 ? column : column - posts.length%column+4;
      
      fnSetInterval(el)
    }
  }
})

//Відновлюємо видаленні карточки
//Відновлюєм по одні
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "reestablish") {
    const counterWrapper = event.target.closest(".modal__card");

    removePosts.forEach((i, index)=> {
      if(i.id === +counterWrapper.dataset.id) {
        addCard(i);
        posts.push(i);
        removePosts.splice(index,1);
      }
    });

    counterWrapper.remove()
    if(removePosts.length === 0) {
      closeModal()
    }
  }
})

//Відновлюєм всі
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "reestablishAll") {
    for(let i = 0; i < removePosts.length; i++) {
      addCard(removePosts[i]);
      posts.push(removePosts[i]);
    }
    closeModal()
  }
})