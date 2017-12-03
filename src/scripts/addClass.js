function addClass(selector) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector('.btn');
  const modal = rootElement.querySelector('.addClass');

  function addClassActive() {
    modal.classList.toggle('showed');
  }

  button.addEventListener('click', addClassActive);

  button.addEventListener('click', function () {

    if (addClassActive == true) {
    } else {
      addClassActive
    }
  });
}

export default addClass;
