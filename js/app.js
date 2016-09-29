window.onload=function(){

var cart = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, "image": "images/cuteJello.jpg" },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99, "image": "images/cuteJello.jpg"},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44, "image": "images/cuteJello.jpg"},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99, "image": "images/cuteJello.jpg" },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32, "image": "images/cuteJello.jpg"},
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "image": "images/cuteJello.jpg" }];


function listItems(items){
for (var i =0; i< items.length; i++){
	console.log(items[i].name);
	console.log(items[i].description);
	console.log(items[i].price);



	var NameBox = document.createElement('div');
	NameBox.className= "product";
	NameBox.innerHTML=items[i].name;
	main.appendChild(NameBox);

	var imageBox= document.createElement('img');
	imageBox.className= "images";
	imageBox.src= items[i].image;
	main.appendChild(imageBox);

	var descriptionBox = document.createElement('div');
	descriptionBox.className="description";
	descriptionBox.innerHTML=items[i].description;
	main.appendChild(descriptionBox);

	var priceBox= document.createElement('div');
	priceBox.className= "price";
	priceBox.innerHTML=items[i].price;
	main.appendChild(priceBox);




	}
} 

listItems(cart);

var sum=0;

function total(allThePrices){
for (var i=0; i< allThePrices.length; i++){
	sum += allThePrices[i].price;

	}
var totalBox = document.createElement('div');
	totalBox.className="theTotal";
	totalBox.innerHTML=sum;
	sub.appendChild(totalBox);
}
console.log(total(cart));



};