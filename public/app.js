
var app = function(){
var catArticle = document.createElement("ul");
catArticle.classList.add("cat");

var list = document.createElement("li");
list.innerText = "Name: Sophie";
var list2 =document.createElement("li");
list2.innerText = "Favourite Food: Can of tuna";
var list3 = document.createElement("li");

var image = document.createElement("img");



list3.appendChild(image);
catArticle.appendChild(list);
catArticle.appendChild(list2);

var catList = document.querySelector("#cats");
catList.appendChild(catArticle);
};

window.onload = app;