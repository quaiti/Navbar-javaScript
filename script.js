

let body = document.body;
let nav = document.createElement("nav");
let logo = document.createElement("a");
let ul = document.createElement("ul");
let btnDrop = document.createElement("div");

// append
body.append(nav);
nav.append(logo);
nav.append(ul);
nav.append(btnDrop);

// Elemets innerHTML
logo.innerHTML = "logo";
ul.innerHTML = `
    <li><a href="#" class="nav-link"> server </a> </li>
    <li><a href="#" class="nav-link"> contact </a> </li>
    <li><a href="#" class="nav-link"> about </a> </li>
    <li><a href="#" class="nav-link"> home </a> </li>
`;
btnDrop.innerHTML = `<i class="fa-solid fa-bars"></i>`;

// attr
logo.setAttribute("href", "#");
















function elementsStyle() {
  document.querySelectorAll("*").forEach((elements) => {
    elements.style.padding = "0";
    elements.style.margin = "0";
    elements.style.boxSizing = "border-box";
  });

  body.style.fontFamily = "sans-serif";
  body.style.overflowX = "hidden";

  nav.style.width = "100%";
  nav.style.height = "80px";
  nav.style.padding = "0 5%";
  nav.style.backgroundColor = "gold";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.justifyContent = "space-between";

  logo.style.color = "#000";
  logo.style.fontSize = "36px";
  logo.style.fontWeight = "bold";
  logo.style.textDecoration = "none";

  ul.style.cssText = `
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  `;














  document.querySelectorAll(".nav-link").forEach((element) => {
    element.style.cssText = `
    display: inline-block;
    color: #fff;
    margin-right: 10px;
    font-size: 21px;
    text-decoration: none;
    `;
  });

  btnDrop.style.cssText = `
  margin-right: 20px;
  display: none;
  `;
  btnDrop.style.width = "fit-content";
  btnDrop.style.fontSize = "22px";
  btnDrop.style.color = "#fff";
  btnDrop.style.cursor = "pointer";
}

elementsStyle();


















function maxWidth550() {
  if (window.innerWidth < 550) {
    btnDrop.style.display = "block";
    nav.style.padding = "0 0";
    logo.style.marginLeft = "20px";
    ul.style.cssText = `
    width: 100%;
    display: block;
    height: 0px;
    position: absolute;
    top: 80px;
    left: 0;
    background: #fff;
    box-shadow: 2px 2px 5px gray;
    text-align: center;
    padding: 0;
    margin: 0;
    overflow: hidden;
    transition: 0.6s;
    `;
    document.querySelectorAll(".nav-link").forEach((element) => {
      element.style.cssText = `
      display: block;
      width: 100%;
      color: #000;
      margin-right: 0;
      font-size: 20px;
      padding: 5px;
      text-decoration: none;
      `;
    });




    
    btnDrop.onclick = () => {
      if (ul.style.height == "0px") {
        ul.style.height = "140px";
      } else if (ul.style.height == "140px") {
        ul.style.height = "0";
      }
    };
  }
}
maxWidth550();

window.onresize = () => {
  elementsStyle();
  maxWidth550();
};
