//Date element
var theDate = new Date();
var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

//bookmark
var material = document.getElementById("item1-get");
var item = document.getElementById("item1");
var bookItem = document.getElementById("item1-bookmark");


//hamburger icon functionality
function showMenu(){
  /*when the user clicks on the hamburger,
  toggle between hiding and showing the menu items*/
  document.getElementById("menu-items").classList.toggle("show");
}

function bookmark() {
  if (bookItem.textContent === "bookmark_border") {
    bookItem.textContent = "bookmark";
  } else {
    bookItem.textContent = "bookmark_border";
  }
}

bookItem.addEventListener("click", bookmark);
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

item.addEventListener("click", show);
