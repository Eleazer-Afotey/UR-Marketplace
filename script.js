//Date element
var theDate = new Date();

var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();


//bookmark
var text = [
{
  itm_name: "Samsung Television",
  icon_name: "local_pizza"
},
]

var material = document.getElementById("item1-get");

//Check Bookmark
function checkBookmark() {
  return bookItem.textContent === "bookmark";
}

function bookmarkItem(){
  if(checkBookmark()){
    text[0].itm_name = material.textContent;
  }
}

let data = [text[0].itm_name];
console.log(typeof text);
console.log( data);
let list = document.getElementById("bookmark_menu");
//hamburger icon functionality
function showMenu(){
    /*when the user clicks on the hamburger,
    toggle between hiding and showing the menu items*/
    document.getElementById("menu-items").classList.toggle("show");
}


var item = document.getElementById("item1");
var material = document.getElementById("item1-get");
var bookItem = document.getElementById("item1-bookmark");

data.forEach((it) => {
  let li = document.createElement("li");
  console.log(typeof it);
  li.innerText = it;
  list.appendChild(li);
  li.style.listStyleType = "numbered";
  li.style.listStylePosition = "outside"
  });



//document.getElementById("bookmark_menu").innerHTML = obj.itm_name;
var item = document.getElementById("item1");
      console.log(item);
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


//Check Bookmark
function checkBookmark() {
  return bookItem.textContent === "bookmark";
}

item.addEventListener("click", show);
