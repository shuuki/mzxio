// shuffle from mike bostock
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



var deck = [
	{ name: "Trickster" },
  { name: "Death" },
	// bones
	{ name: "One of Bones", peek: "1 B", pip: "1"  },
	{ name: "Two of Bones", peek: "2 B", pip: "2"  },
	{ name: "Three of Bones", peek: "3 B", pip: "3"  },
	{ name: "Four of Bones", peek: "4 B", pip: "4"  },
	{ name: "Five of Bones", peek: "5 B", pip: "5"  },
	{ name: "Six of Bones", peek: "6 B", pip: "6"  },
	{ name: "Seven of Bones", peek: "7 B", pip: "7"  },
	{ name: "Eight of Bones", peek: "8 B", pip: "8"  },
	{ name: "Nine of Bones", peek: "9 B", pip: "9"  },
	{ name: "Ace of Bones", peek: "A B", pip: "10"  },
	{ name: "Jack of Bones", peek: "J B", pip: "11"  },
	{ name: "Queen of Bones", peek: "Q B", pip: "12"  },
	{ name: "King of Bones", peek: "K B", pip: "13"  },
	// flowers
	{ name: "One of Flowers", peek: "", pip: "" },
	{ name: "Two of Flowers", peek: "", pip: "" },
	{ name: "Three of Flowers", peek: "", pip: "" },
	{ name: "Four of Flowers", peek: "", pip: "" },
	{ name: "Five of Flowers", peek: "", pip: "" },
	{ name: "Six of Flowers", peek: "", pip: "" },
	{ name: "Seven of Flowers", peek: "", pip: "" },
	{ name: "Eight of Flowers", peek: "", pip: "" },
	{ name: "Nine of Flowers", peek: "", pip: "" },
	{ name: "Ace of Flowers", peek: "", pip: "" },
	{ name: "Jack of Flowers", peek: "", pip: "" },
	{ name: "Queen of Flowers", peek: "", pip: "" },
	{ name: "King of Flowers", peek: "", pip: "" },
	// fruits
	{ name: "Ace of Fruits", peek: "", pip: "" },
	{ name: "Two of Fruits", peek: "", pip: "" },
	{ name: "Three of Fruits", peek: "", pip: "" },
	{ name: "Four of Fruits", peek: "", pip: "" },
	{ name: "Five of Fruits", peek: "", pip: "" },
	{ name: "Six of Fruits", peek: "", pip: "" },
	{ name: "Seven of Fruits", peek: "", pip: "" },
	{ name: "Eight of Fruits", peek: "", pip: "" },
	{ name: "Nine of Fruits", peek: "", pip: "" },
	{ name: "Ten of Fruits", peek: "", pip: "" },
	{ name: "Jack of Fruits", peek: "", pip: "" },
	{ name: "Queen of Fruits", peek: "", pip: "" },
	{ name: "King of Fruits", peek: "", pip: "" },
	// hearts
	{ name: "Ace of Hearts", peek: "", pip: "" },
	{ name: "Two of Hearts", peek: "", pip: "" },
	{ name: "Three of Hearts", peek: "", pip: "" },
	{ name: "Four of Hearts", peek: "", pip: "" },
	{ name: "Five of Hearts", peek: "", pip: "" },
	{ name: "Six of Hearts", peek: "", pip: "" },
	{ name: "Seven of Hearts", peek: "", pip: "" },
	{ name: "Eight of Hearts", peek: "", pip: "" },
	{ name: "Nine of Hearts", peek: "", pip: "" },
	{ name: "Ten of Hearts", peek: "", pip: "" },
	{ name: "Jack of Hearts", peek: "", pip: "" },
	{ name: "Queen of Hearts", peek: "", pip: "" },
	{ name: "King of Hearts", peek: "", pip: "" },
	// arcana
  { name: "Star", peek: "", pip: "" },
  { name: "World", peek: "", pip: "" },
  { name: "Sun", peek: "", pip: "" },
  { name: "Moon", peek: "", pip: "" },
  { name: "Priest", peek: "", pip: "" },
  { name: "Temperance", peek: "", pip: "" },
  { name: "Strength", peek: "", pip: "" },
  { name: "Dream", peek: "", pip: "" },
  { name: "Hermit", peek: "", pip: "" },
  { name: "Tower", peek: "", pip: "" },
  { name: "Chariot", peek: "", pip: "" },
  { name: "Desire", peek: "", pip: "" },
  { name: "Judgement", peek: "", pip: "" },
  { name: "Devil", peek: "", pip: "" },
  { name: "Hanged Man", peek: "", pip: "" },
  { name: "Chance", peek: "", pip: "" },
]


// card container
//.card

// outer border
//.border

// corner symbols
//.peek

// repeated symbols
//.pips

// art
//.art

// description
//.description





function addElement(text) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div");
  newDiv.classList.add("card", "flip") 
  
  var newContent = document.createTextNode(text); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("table"); 

  currentDiv.insertAdjacentElement("beforeend", newDiv); 
}





shuffle(deck).forEach(function(value) {
  
  addElement(value.name)
  

})


var cards = document.getElementsByClassName("card");

for (c in cards) {
  if (cards.hasOwnProperty(c)) {
    cards[c].addEventListener("click", function() {
      
      this.classList.toggle("flip")

    }, false)
  }
}
