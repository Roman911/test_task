//імгорт глобальних зміних
import { posts, removePosts } from "./index";

//Елемент в який будемо добавляти модалку
const bodySelector = document.querySelector("body");

let modalIsOpen = false

//Шаблон карточок в модальному вікні
const modalContentItemHTML = (post) => {
  return `<div class="modal__img"></div>
        <div class="modal__title">
          <h2>Card ${post.id}</h2>
        </div>
        <div class="modal__body">
          <h4>
            ${post.title}
          </h4>
          <p>
            ${post.body}
          </p>
        </div>`;
};

//Шаблон модального вікна
const modalCardsHTML = () => {
  const cardsMap = removePosts
    .map((i) => {
      return `<div class="modal__card shadow" data-id="${i.id}">
            <div class="card__img"></div>
            <div class="card__body">
              <button class="card__btn" data-action="reestablish">
                <svg class="card__svg" aria-hidden="true" viewBox="0 0 24 24" data-action="reestablish">
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" data-action="reestablish"></path>
                </svg>
              </button>
              <h5>Card ${i.id}</h5>
              <p>
                ${i.title}
              </p>
            </div>
          </div>`;
    })
    .join("");
  
  if (removePosts.length === 0) {
    return `<div class="modal__body">
      <h2>Ничего ненайдено</h2>
    </div>`;
  } else {
    return `<div class="modal__body">
          ${cardsMap}
          <div class="modal__btn">
            <button data-action="reestablishAll">Востановыть все</button>
          </div>
        </div>`;
  }
};

const modalItemHTML = (content) => {
  return `<div class="modal" data-content="modal">
      <div class="modal__content">
        ${content}
      </div>
    </div>`;
};

//Відкриваємо модальне вікно з меню
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "cart") {
    if(!modalIsOpen) {
      bodySelector.insertAdjacentHTML("beforeend", modalItemHTML(modalCardsHTML()));
      modalIsOpen = true
    }
  }
})

//Відкриваємо модальне вікно з карточок
window.addEventListener("click", (event) => {
  if (event.target.dataset.action === "more") {
    const counterWrapper = event.target.closest(".card");

    const post = posts.find((item) => item.id === +counterWrapper.dataset.id);

    bodySelector.insertAdjacentHTML(
      "beforeend",
      modalItemHTML(modalContentItemHTML(post))
    );
  }
});

//Закриваємо модалку
//Відслідковуємо клік
export const closeModal = () => {
  const modal = document.querySelector('[data-content="modal"]');
  if(modal) {
    modal.remove();
    modalIsOpen = false;
  }
}

window.addEventListener("click", (event) => {
  if (event.target.dataset.content === "modal") {
    //const modal = document.querySelector('[data-content="modal"]');
    closeModal()
  }
});

//Відслідковуємо натиску "Escape"
window.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    //const modal = document.querySelector('[data-content="modal"]');
    closeModal()
  }
});
