import "../banner/ban.css";

export default function banner(title, btnText) {
  const section = document.createElement("section");
  section.className = "banner";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const p = document.createElement("p");
  p.textContent = "This is very nice banner";
  const btn = document.createElement("button");
  btn.textContent = btnText;

  section.append(h2, p, btn);

  return section;
}
