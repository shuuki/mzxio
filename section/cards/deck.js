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

	{ name: "One of Bones", suit: "bone", pip: "1"  },
	{ name: "Two of Bones", suit: "bone", pip: "2"  },
	{ name: "Three of Bones", suit: "bone", pip: "3"  },
	{ name: "Four of Bones", suit: "bone", pip: "4"  },
	{ name: "Five of Bones", suit: "bone", pip: "5"  },
	{ name: "Six of Bones", suit: "bone", pip: "6"  },
  { name: "Seven of Bones", suit: "bone", pip: "7"  },
	{ name: "Eight of Bones", suit: "bone", pip: "8"  },
	{ name: "Nine of Bones", suit: "bone", pip: "9"  },
	{ name: "Ace of Bones", suit: "bone", pip: "A"  },
	{ name: "Jack of Bones", suit: "bone", pip: "J"  },
	{ name: "Queen of Bones", suit: "bone", pip: "Q"  },
	{ name: "King of Bones", suit: "bone", pip: "K"  },

	{ name: "One of Stones", suit: "stone", pip: "1" },
	{ name: "Two of Stones", suit: "stone", pip: "2" },
	{ name: "Three of Stones", suit: "stone", pip: "3" },
	{ name: "Four of Stones", suit: "stone", pip: "4" },
	{ name: "Five of Stones", suit: "stone", pip: "5" },
	{ name: "Six of Stones", suit: "stone", pip: "6" },
	{ name: "Seven of Stones", suit: "stone", pip: "7" },
	{ name: "Eight of Stones", suit: "stone", pip: "8" },
	{ name: "Nine of Stones", suit: "stone", pip: "9" },
	{ name: "Ace of Stones", suit: "stone", pip: "A" },
	{ name: "Jack of Stones", suit: "stone", pip: "J" },
	{ name: "Queen of Stones", suit: "stone", pip: "Q" },
	{ name: "King of Stones", suit: "stone", pip: "K" },
	// fruits
	{ name: "Ace of Flowers", suit: "flower", pip: "1" },
	{ name: "Two of Flowers", suit: "flower", pip: "2" },
	{ name: "Three of Flowers", suit: "flower", pip: "3" },
	{ name: "Four of Flowers", suit: "flower", pip: "4" },
	{ name: "Five of Flowers", suit: "flower", pip: "5" },
	{ name: "Six of Flowers", suit: "flower", pip: "6" },
	{ name: "Seven of Flowers", suit: "flower", pip: "7" },
	{ name: "Eight of Flowers", suit: "flower", pip: "8" },
	{ name: "Nine of Flowers", suit: "flower", pip: "9" },
	{ name: "Ten of Flowers", suit: "flower", pip: "A" },
	{ name: "Jack of Flowers", suit: "flower", pip: "J" },
	{ name: "Queen of Flowers", suit: "flower", pip: "Q" },
	{ name: "King of Flowers", suit: "flower", pip: "K" },

	{ name: "Ace of Hearts", suit: "heart", pip: "1" },
	{ name: "Two of Hearts", suit: "heart", pip: "2" },
	{ name: "Three of Hearts", suit: "heart", pip: "3" },
	{ name: "Four of Hearts", suit: "heart", pip: "4" },
	{ name: "Five of Hearts", suit: "heart", pip: "5" },
	{ name: "Six of Hearts", suit: "heart", pip: "6" },
	{ name: "Seven of Hearts", suit: "heart", pip: "7" },
	{ name: "Eight of Hearts", suit: "heart", pip: "8" },
	{ name: "Nine of Hearts", suit: "heart", pip: "9" },
	{ name: "Ten of Hearts", suit: "heart", pip: "A" },
	{ name: "Jack of Hearts", suit: "heart", pip: "J" },
	{ name: "Queen of Hearts", suit: "heart", pip: "Q" },
	{ name: "King of Hearts", suit: "heart", pip: "K" },

  { name: "Star", suit: "arcana", pip: "1" },
  { name: "World", suit: "arcana", pip: "2" },
  { name: "Sun", suit: "arcana", pip: "3" },
  { name: "Moon", suit: "arcana", pip: "4" },
  { name: "Priest", suit: "arcana", pip: "5" },
  { name: "Temperance", suit: "arcana", pip: "6" },
  { name: "Strength", suit: "arcana", pip: "7" },
  { name: "Dream", suit: "arcana", pip: "8" },
  { name: "Hermit", suit: "arcana", pip: "9" },
  { name: "Tower", suit: "arcana", pip: "10" },
  { name: "Chariot", suit: "arcana", pip: "11" },
  { name: "Desire", suit: "arcana", pip: "12" },
  { name: "Judgement", suit: "arcana", pip: "13" },
  { name: "Devil", suit: "arcana", pip: "14" },
  { name: "Hanged Man", suit: "arcana", pip: "15" },
  { name: "Chance", suit: "arcana", pip: "16" },
  { name: "???", suit: "arcana", pip: "17" },
  { name: "???", suit: "arcana", pip: "18" },
  { name: "???", suit: "arcana", pip: "19" },
  { name: "???", suit: "arcana", pip: "20" },
  { name: "???", suit: "arcana", pip: "21" },
  { name: "???", suit: "arcana", pip: "22" },
  { name: "???", suit: "arcana", pip: "23" },
  { name: "???", suit: "arcana", pip: "24" }

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

  // text.name
  // text.suit
  // text.pip

  var table = document.getElementById("table"),
    card = document.createElement("div"),
    cardName = document.createElement("div"),
    cardPip = document.createElement("div"),
    cardNameText = document.createTextNode(text.name),
    cardPipText = document.createTextNode(text.pip);

  card.classList.add("card", "flip", text.suit);
  card.appendChild(cardPip);
  card.appendChild(cardName);

  cardName.classList.add("text");
  cardName.appendChild(cardNameText);

  cardPip.classList.add("pip");
  cardPip.appendChild(cardPipText);

  table.insertAdjacentElement("beforeend", card); 

}





shuffle(deck).forEach(function(text) {
  
  addElement(text)
  //console.log(text)

})


var cards = document.getElementsByClassName("card");

for (c in cards) {
  if (cards.hasOwnProperty(c)) {
    cards[c].addEventListener("click", function() {
      
      this.classList.toggle("flip")

    }, false)
  }
}
