//Date element
var theDate = new Date();

var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

//hamburger functionality
var menuIcon = document.querySelector('.menu-icon');
var menuItems = document.querySelector('.menu-items');


menuIcon.addEventListener('click', function(){
    if(menuItems.style.display== "none"){
        menuItems.style.display = "flex";
    }
    else if(menuItems.style.display= "none"){
        menuItems.style.display = "flex";
    }
}
);

