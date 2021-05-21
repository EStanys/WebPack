import "../aside/Aside.css";

const Aside = (title, btnTetx) => {
  const asideEl = document.createElement("aside");
  asideEl.className = "aside";
  const titleEl = document.createElement("h2");
  titleEl.textContent = title;
  const ulEl = document.createElement("ul");
  const liEl1 = document.createElement("li");
  liEl1.textContent = "firstLiEl";
  const liEl2 = document.createElement("li");
  liEl2.textContent = "secLiEl";
  const liEl3 = document.createElement("li");
  liEl3.textContent = "thirdLiEl";
  ulEl.append(liEl1, liEl2, liEl3);
  const btn = document.createElement("button");
  btn.textContent = btnTetx;

  asideEl.append(titleEl, ulEl, btn);
  return asideEl;
};

export default Aside;
