//Date element
var theDate = new Date();

var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

//hamburger icon functionality
function showMenu(){
    /*when the user clicks on the hamburger,
    toggle between hiding and showing the menu items*/
    document.getElementById("menu-items").classList.toggle("show");
}


var item = document.getElementById("item1");
var material = document.getElementById("item1-get");
var bookItem = document.getElementById("item1-bookmark");

function show() {
  console.log("clicked");
}

function bookmark() {
  if (bookItem.textContent === "bookmark_border") {
    bookItem.textContent = "bookmark";
  } else {
    bookItem.textContent = "bookmark_border";
  }
}
bookItem.addEventListener("click", bookmark);

//Check Bookmark
function checkBookmark() {
  return bookItem.textContent === "bookmark";
}

item.addEventListener("click", show);
