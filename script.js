//Date element
var theDate = new Date();
var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

//bookmark
var material = document.getElementById("item1-get");
var item = document.getElementById("item1");
var bookItem = document.getElementById("item1-bookmark");
var upload = document.getElementById("submit");
var submit = document.getElementById("submit-request");

/*
 *Bookmark Item
 */
function bookmark() {
  if (bookItem.textContent === "bookmark_border") {
    bookItem.textContent = "bookmark";
  } else {
    bookItem.textContent = "bookmark_border";
  }
}

bookItem.addEventListener("click", bookmark);

//bookmark
var text = [
  {
    itm_name: "Samsung Television",
    icon_name: "local_pizza",
  },
];

function uploaded() {
  alert("Item Uploaded Successfully");
}

function request() {
  alert("Request Submitted Successfully");
}
upload.addEventListener("click", uploaded);
submit.addEventListener("click", request);
//hamburger icon functionality
function showMenu() {
  /*when the user clicks on the hamburger,
    toggle between hiding and showing the menu items*/
  document.getElementById("menu-items").classList.toggle("show");
}

let li = document.createElement("li");
console.log(typeof data);
console.log(data);
li.textContent = data;
list.appendChild(li);
li.style.listStyleType = "numbered";
li.style.listStylePosition = "outside";

// data.forEach((it) => {
//   let li = document.createElement("li");
//   console.log(typeof it);
//   li.innerText = it;
//   list.appendChild(li);
//   li.style.listStyleType = "numbered";
//   li.style.listStylePosition = "outside";
// });

//hamburger functionality
var menuIcon = document.querySelector(".menu-icon");
var menuItems = document.querySelector(".menu-items");

menuIcon.addEventListener("click", function () {
  if (menuItems.style.display == "none") {
    menuItems.style.display = "flex";
  } else if ((menuItems.style.display = "none")) {
    menuItems.style.display = "flex";
  }
});
