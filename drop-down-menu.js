function createButton(btnName, dropdownId) {
  const div = document.createElement("div");
  const btn = document.createElement("button");
  btn.textContent = btnName;
  btn.classList.add("dropDownBtn");
  btn.setAttribute("data-dropdown", dropdownId);
  return btn;
}

function createDropDown(list) {
  const div = document.createElement("div");
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("drop-down-menu");
  dropdownMenu.id = list.id;
  list.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    dropdownMenu.appendChild(listItem);
  });
  div.appendChild(dropdownMenu);
  return div;
}

function toggleDropdown(button) {
  const dropdownId = button.getAttribute("data-dropdown");
  const dropdownMenu = document.getElementById(dropdownId);
  const computedStyle = window.getComputedStyle(dropdownMenu); // Get the computed style
  if (computedStyle.display === "block") {
    // Check the computed display style
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

function initializeDropdowns(navData) {
  const navbar = document.getElementById("navbar");

  navData.forEach((data) => {
    const button = createButton(data.buttonName, data.dropdownId);
    const dropdownMenu = createDropDown(data.list);
    button.addEventListener("click", () => toggleDropdown(button));
    navbar.appendChild(button);
    navbar.appendChild(dropdownMenu);
  });
}

const navData = [
  {
    buttonName: "Programming Languages",
    dropdownId: "programming-languages-dropdown",
    list: {
      id: "programming-languages-dropdown",
      items: ["JavaScript", "Python", "Java", "C++", "Swift", "Ruby"],
    },
  },
  {
    buttonName: "Frameworks",
    dropdownId: "frameworks-dropdown",
    list: {
      id: "frameworks-dropdown",
      items: [
        "React",
        "Angular",
        "Vue.js",
        "Django",
        "Spring",
        "Ruby on Rails",
      ],
    },
  },
];

// initializeDropdowns(navData);
