//Date element
var theDate = new Date();

var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

var item = document.getElementById("item1");

function show() {
  console.log("clicked");
}
item.addEventListener("click", show);

var bookItem = document.getElementById("item1-bookmark");
function bookmark() {
  if (bookItem.textContent === "bookmark_border") {
    bookItem.textContent = "bookmark";
    alert("Item bookmarked");
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
