var deck = [
	{ name: "Trickster" },
  { name: "Death" },
	// bones
	{ name: "Ace of Bones" },
	{ name: "Two of Bones" },
	{ name: "Three of Bones" },
	{ name: "Four of Bones" },
	{ name: "Five of Bones" },
	{ name: "Six of Bones" },
	{ name: "Seven of Bones" },
	{ name: "Eight of Bones" },
	{ name: "Nine of Bones" },
	{ name: "Ten of Bones" },
	{ name: "Jack of Bones" },
	{ name: "Queen of Bones" },
	{ name: "King of Bones" },
	// flowers
	{ name: "Ace of Flowers" },
	{ name: "Two of Flowers" },
	{ name: "Three of Flowers" },
	{ name: "Four of Flowers" },
	{ name: "Five of Flowers" },
	{ name: "Six of Flowers" },
	{ name: "Seven of Flowers" },
	{ name: "Eight of Flowers" },
	{ name: "Nine of Flowers" },
	{ name: "Ten of Flowers" },
	{ name: "Jack of Flowers" },
	{ name: "Queen of Flowers" },
	{ name: "King of Flowers" },
	// fruits
	{ name: "Ace of Fruits" },
	{ name: "Two of Fruits" },
	{ name: "Three of Fruits" },
	{ name: "Four of Fruits" },
	{ name: "Five of Fruits" },
	{ name: "Six of Fruits" },
	{ name: "Seven of Fruits" },
	{ name: "Eight of Fruits" },
	{ name: "Nine of Fruits" },
	{ name: "Ten of Fruits" },
	{ name: "Jack of Fruits" },
	{ name: "Queen of Fruits" },
	{ name: "King of Fruits" },
	// hearts
	{ name: "Ace of Hearts" },
	{ name: "Two of Hearts" },
	{ name: "Three of Hearts" },
	{ name: "Four of Hearts" },
	{ name: "Five of Hearts" },
	{ name: "Six of Hearts" },
	{ name: "Seven of Hearts" },
	{ name: "Eight of Hearts" },
	{ name: "Nine of Hearts" },
	{ name: "Ten of Hearts" },
	{ name: "Jack of Hearts" },
	{ name: "Queen of Hearts" },
	{ name: "King of Hearts" },
	// arcana
  { name: "Star" },
  { name: "World" },
  { name: "Sun" },
  { name: "Moon" },
  { name: "Priest" },
  { name: "Temperance" },
  { name: "Strength" },
  { name: "Dream" },
  { name: "Hermit" },
  { name: "Tower" },
  { name: "Chariot" },
  { name: "Desire" },
  { name: "Judgement" },
  { name: "Devil" },
  { name: "Hanged Man" },
  { name: "Chance" },
]



// from mike bostock
// via https://www.frankmitchell.org/2015/01/fisher-yates/

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}



function addElement(text) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div");
  newDiv.classList.add("card")
  var newContent = document.createTextNode(text); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("table"); 
  currentDiv.insertAdjacentElement("beforeend", newDiv); 
}





shuffle(deck).forEach(function(value) {
  
  addElement(value.name)

})
