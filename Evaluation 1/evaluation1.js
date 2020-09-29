"use strict";

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }


    shuffle() {
        let c = this.deck.length;
        let temp, i;
        let deck = this.deck;
        while (c) {
            i = Math.floor(Math.random() * c--);
            temp = this.deck[c];
            this.deck[c] = this.deck[i];
            this.deck[i] = temp;

        }
        return this.deck;

    }
    dealACard() {
        return this.deck.list.shift(); //top card from deck open faced
    }
    addCard(card) {
        this.deck.add(card);
    }

}

class Player extends Deck {
    player(name) {
        this.name = name;
        this.hand = new Hand(name);
    }
    pile() {
        this.list = new Array();
        this.rank = "";

        function isValid(card) {
            let val = false;
            let topCard = this.getTopCard;
            if (card != null) {
                if (card.getValue() == "8") {
                    val = true;
                } else if (topCard.getValue() == "8") {
                    val = (card.getsuit() == this.rank);
                }
            }
            return val;

        }

        function acceptCard(card) {
            return this.list.splice(0, 0, card); //accept a card to make top of discard pile
        }

        function setRank(suit) {
            this.rank = suit; //when card is 8 change of that type of card(suit)
        }

        function getTopCard() {
            return this.list[0]; //return card from top pile
        }

        function removeTopCard() {
            return this.list.shift(); //remove top card from pile
        }

    }
    deal() {
        let hand = [];
        while (hand.length < 5) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
    topCardEight() {
        return this.deck[0].getValue() == "8";
    }



}
/*
Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
};
Player.extends(Deck);

function Player(deck) {
    
    this.deck = [];
    this.list = new Array();

    
    for (let i = 1; i <= 7; i++) {
        this.list.push(deck.dealACard());
    }
}

Player.prototype = {
    
    isHandEmpty: function () {
        return this.list.length == 0;
    },

    
    add: function (card) {
        this.list.push(card);
    },

    
    remove: function (i) {
        this.list.splice(i, 1);
    },

   
    find: function (cardString) {
        let i = 0;
        let card = null;
        while (i < this.list.length && !card) {
            if (this.list[i].toString() == cardString) {
                card = this.list[i];
            }
            i++;
        }
        return card;
    },

    
    indexOf: function (card) {
        return this.list.indexOf(card);
    },

    
    getHandCopy: function () {
        return this.list.slice(0);
    },

};*/

/*
class Eights {
    Hand() {
        let hand = [];
        while (hand.length < 5) {
            hand.push(this.deck.pop());
        }
        return hand;
    }

    constructor() {
        this.one = Player();
        this.two = Player();
        this.drawPile = Hand();
        this.discardPile = Hand();
    }
    playGame() {
        Player player = one;


        // keep playing until there's a winner
        while (!isDone()) {
            displayState();
            takeTurn(player);
            player = nextPlayer(player);
        }

        // display the final score
        one.displayScore();
        two.displayScore();
    }
    isDone() {
        return one.hand.isEmpty() || two.hand.isEmpty();
    }
}
*/
/*function main() {
    const game = new Player();
    game.Player();
}*/

//main();
const deck1 = new Deck();
console.log(deck1.deck);
console.log(deck1.shuffle());
const p = new Player();
console.log(p.deal());
console.log(p.pile());