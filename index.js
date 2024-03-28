function createButton(btnName, dropDownMenu) {
  const btn = document.createElement("button");
  btn.textContent = btnName;
  btn.classList.add("dropDownBtn");
  btn.addEventListener("click", () => handleButtonClick(dropDownMenu));
  return btn;
}

// function createDropDown(dropDownMenuListName) {
//   const dropDown = document.querySelector(`.${dropDownMenuListName}`);
//   // const items = ["C++", "Rust", "Zig", "Go"];
//   // items.forEach((element) => {
//   //   createDropDownElement(element);
//   // });
//   dropDown.classList.add(dropDownMenuListName);
//   dropDown.style.display = "none";
//   return dropDown;
// }

function createDropDown(dropDownMenuListName) {
  const dropDown = document.createElement("ul");
  dropDown.classList.add(dropDownMenuListName);
  dropDown.style.display = "none";
  return dropDown;
}

// function handleButtonClick(event) {
//   //   console.log(event.target.nextSibling.style.display);
//   if (event.target.nextSibling.style.display === "block") {
//     event.target.nextSibling.style.display = "none";
//   } else {
//     event.target.nextSibling.style.display = "block";
//   }
// }

function handleButtonClick(dropDownMenu) {
  if (dropDownMenu.style.display === "inline-block") {
    dropDownMenu.style.display = "none";
  } else {
    dropDownMenu.style.display = "inline-block";
  }
}

function getDropDowns(dropDownMenuName) {
  const dropDownMenu = document.querySelector(`.${dropDownMenuName}`);
  console.log(dropDownMenu.children);
  const lists = dropDownMenu.children;
  Array.from(lists).forEach((element) => {
    console.log(element.textContent);
  });
}
function createDropDownElement(text) {
  const dropDownMenu = document.querySelector(".drop-down-menu");
  const newItem = document.createElement("li");
  newItem.textContent = text;
  dropDownMenu.appendChild(newItem);
}

// function loadNav() {
//   const nav = document.querySelector(".navbar");
//   const dropDownButton1 = createButton("Drop Down 1");
//   const dropDownButton2 = createButton("Drop Down 2");
//   const dropDown1 = createDropDown("drop-down-menu-1");
//   const dropDown2 = createDropDown("drop-down-menu-2");
//   nav.appendChild(dropDownButton1);
//   nav.appendChild(dropDown1);
//   nav.appendChild(dropDownButton2);
//   nav.appendChild(dropDown2);
// }

function loadNav() {
  const nav = document.querySelector(".navbar");
  const dropDownButton1 = createButton(
    "Drop Down 1",
    document.querySelector(".drop-down-menu-1")
  );
  const dropDownButton2 = createButton(
    "Drop Down 2",
    document.querySelector(".drop-down-menu-2")
  );
  const dropDown1 = createDropDown("drop-down-menu-1");
  const dropDown2 = createDropDown("drop-down-menu-2");
  nav.appendChild(dropDownButton1);
  nav.appendChild(dropDown1);
  nav.appendChild(dropDownButton2);
  nav.appendChild(dropDown2);
}
loadNav();
