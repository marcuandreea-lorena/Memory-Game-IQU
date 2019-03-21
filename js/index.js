class Card {
  /*
    type -> 1, 2, 3 .... corespunzator cu clasele de css
  */
  constructor(type) {
    this.type = type;
    this.isFlipped = false;
    this.cardHtml;
  }
  
  getHtml() {
    const card = document.createElement('div');
    card.classList.add('card');
		card.addEventListener('click', this.flip.bind(this));
    
		this.cardHtml = card;
		    
    return card;
  }
  
  flip() {
    this.isFlipped = true;
		this.cardHtml.classList.add(`card${this.type}`);
    
    const flipEvent = new CustomEvent('cardFlipped', { detail:  this });
		document.dispatchEvent(flipEvent);
		
	}

	// unflip() {
  //   this.isFlipped = false;
	// //	this.cardHtml.classList.toggle("card");

	// 	//const unflipEvent = new CustomEvent('cardUnflipped', {detail: this });
	// 	//document.dispatchEvent(unflipEvent);
  // }
}

class Game {
  constructor() {
    this.cards = [1, 2, 3, 4, 5, 6]
    
    this.createPairs();
    this.shuffleCards();
		this.createCards();
		this.flippedCards = [];
		this.counter = 0;
		//this.firstCard ;
		//this.secondCard;
		//this.checkForMatch();
		//this.disableCards();
	//	this.unflipCards();

    
    document.addEventListener('cardFlipped', this.handleCardFlip.bind(this));
  }
  

  createPairs() {
    this.cards = [...this.cards, ...this.cards];
  }
  
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  createCards() {
    for (const type of this.cards) {
      const card = new Card(type);
      document.body.appendChild(card.getHtml());
    }
  }
	

  handleCardFlip(e) {
		console.log(e.detail);
		console.log('I was clicked!');
		this.flippedCards.push(e.detail);

		let i = this.flippedCards.length;

		if(i%2 !==0 )
		{ 
				console.log("unu");
				return this.flippedCards.length = i ;
		} 
			else if(i%2 ==0 ){
				if(this.flippedCards[i-2].type === this.flippedCards[i-1].type){
					console.log("we are the same");
					this.disableCards();
					//this.counter++;
					//matched();
					//console.log(this.counter);
					return this.counter++;
				}
			else {
				console.log("we are not the same");
				this.unflipCards();
				//	unmatched();
			}
		} 
		//return this.flippedCards;
	}
	
	// flippedCards(){
	// 	this.classList.add('flip');

	// 	if(isFlipped)
	// 		firstCard= this;
	// 		return;

	// 	secondCard = this;
	// 	isFlipped = false;

	// 	checkForMatch();
	// }

	// flipCard() {
  //   this.classList.add('flip');

  //   if (!hasFlippedCard) {
  //     hasFlippedCard = true;
  //     firstCard = this;
	// 	return;
	// }
	
	// secondCard = this;
	// hasFlippedCard = false;
	
	// checkForMatch();
	// }
	
	// checkForMatch() {
	// if (this.firstCard === this.secondCard) {
	// 	console.log("We are the same!");
	// 	//disableCards();
	// 	return;
	// }
	// console.log("We are not the same!");
	// unflipCards();
	// }
	
	disableCards() {
		let i = this.flippedCards.length;
		this.flippedCards[i-2].cardHtml.removeEventListener('cardFlipped', this.handleCardFlip.bind(this));
		this.flippedCards[i-1].cardHtml.removeEventListener('cardFlipped', this.handleCardFlip.bind(this));
		//this.flippedCards= [];
		this.verifyCounter();
	}
	
	unflipCards() {
		let i = this.flippedCards.length;
		this.flippedCards[i-2].isFlipped = false;
		this.flippedCards[i-1].isFlipped = false;
   setTimeout(() => {
		this.flippedCards[i-2].cardHtml.classList.remove(`card${this.flippedCards[i-2].type}`);
		//console.log(this.flippedCards[0].isFlipped);
		this.flippedCards[i-1].cardHtml.classList.remove(`card${this.flippedCards[i-1].type}`);
		//this.flippedCards= [];
		this.flippedCards.pop();
		this.flippedCards.pop();


	}, 1000);

	}

	verifyCounter() {
		if(this.counter === 5)
		  {window.alert('You WIN! Master!');
		 if (confirm("Wanna play again?")) {
			 this.wannaPlayAgain();
		} else {
			window.alert("You rock anyway!");
		}
	}
	}

	wannaPlayAgain(){
	// 	console.log(this.flippedCards.length);
	// for(let i=0 ; i<(this.flippedCards.length); i++)
	// 		{
	// 			this.flippedCards[i].cardHtml.classList.remove(`card${this.flippedCards[i].type}`);
	// 			this.shuffleCards();}
	location.reload();

}
//  cards.forEach(card => card.addEventListener('click', flipCard));
  

  // displayCard(){
    // this.classList.toggle("open");
    // this.classList.toggle("show");
    // this.classList.toggle("disabled");
// }
    
	// cardFlipped() {
		// flippedCards.push(this);
		// var len = flippedCards.length;
		// if(len === 2){
			// if(flippedCards[0].type === flippedCards[1].type){
				// matched();
			// } else {
				// unmatched();
			// }
		// }
	// }

	// matched(){
		// flippedCards[0].classList.add("match", "disabled");
		// flippedCards[1].classList.add("match", "disabled");
		// flippedCards[0].classList.remove("show", "open", "no-event");
		// flippedCards[1].classList.remove("show", "open", "no-event");
		// flippedCards = [];
	// }
  
	// unmatched(){
		// flippedCards[0].classList.add("unmatched");
		// flippedCards[1].classList.add("unmatched");
		// disable();
		// setTimeout(function(){
			// flippedCards[0].classList.remove("show", "open", "no-event","unmatched");
			// flippedCards[1].classList.remove("show", "open", "no-event","unmatched");
			// enable();
			// flippedCards = [];
		// },1100);
	// }

	// disable(){
		// Array.prototype.filter.call(cards, function(card){
			// card.classList.add('disabled');
		// });
	// }

	// enable(){
		// Array.prototype.filter.call(cards, function(card){
			// card.classList.remove('disabled');
			// for(var i = 0; i < matchedCard.length; i++){
				// matchedCard[i].classList.add("disabled");
			// }
		// });
	// }
  
//   moveCounter(){
//     moves++;
//     counter.innerHTML = moves;
   
//         }

	
}


new Game();
