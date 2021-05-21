import "./Modal.css";

export default class Modal {
  constructor() {}

  create() {
    const wrapperEl = document.createElement("div");
    wrapperEl.className = "modal-wrapper";
    const modalEl = document.createElement("div");
    modalEl.className = "modal";
    const modalTextEl = document.createElement("p");
    modalTextEl.className = "modal_txt";
    modalTextEl.innerText =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, sequi voluptates consectetur placeat totam aperiam necessitatibus quia beatae impedit nobis veniam, ad nisi consequuntur adipisci sapiente quibusdam, sed dicta illo.";
    const modalBtnEl = document.createElement("button");
    modalBtnEl.className = "modal__btn";
    modalBtnEl.textContent = "Close modal";
    modalEl.append(modalTextEl, modalBtnEl);
    wrapperEl.append(modalEl);
    return wrapperEl;
  }
}
