//Date element
var theDate = new Date();

var footer = document.getElementById("footer-text");
footer.textContent = "@Copyright " + theDate.getFullYear();

//bookmark
var item_name = "samsung tv";
// const myObj = { itm_name: item_name, itm_type: 31, itm_picture: "New York" };
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);
var text = [
{
  itm_name: "tv",
  icon_name: "local_pizza"
},
{
  itm_name: "Icecream",
  icon_name: "icecream"
},
]


// let text = '{"items":[' +
// '{"itm_name":`${item_name}`,"lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// const obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;

// Retrieving data:
//let text = localStorage.getItem("testJSON");

text[0].itm_name = item_name;

let data = [text[0].itm_name];
      console.log(typeof text);
      console.log( data);
      let list = document.getElementById("bookmark_menu");

      data.forEach((item) => {
        let li = document.createElement("li");
        console.log(typeof item);
        li.innerText = item;
        list.appendChild(li);
      });



//document.getElementById("bookmark_menu").innerHTML = obj.itm_name;
