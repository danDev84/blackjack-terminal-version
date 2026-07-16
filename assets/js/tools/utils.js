export const random = (deck) => Math.round(Math.random() * deck.length);
export const getRandomCard = (deck) => deck[random(deck) - 1];
export const cleanDeck = (outGoingCard, deck) => deck = deck?.filter(item => item.id !== outGoingCard.id);
export const hasBeenRemoved = (outGoingCard, deck) => console.log(!deck?.some(item => item.id == outGoingCard.id));

const hasMoreThanOneAce = (hand) => {
  let count = 0;
  let bool = false;

  for(let card of hand){
    if(card.name.indexOf("A")>-1) count++;
  }

  if(count > 1) bool = true;

  return bool;
}

const hasAtLeastOneAce = (hand) => {
  let count = 0;
  let bool = false;

  for(let card of hand){
    if(card.name.indexOf("A")>-1) count++;
  }

  if(count > 0) bool = true;

  return bool;
}

const isSumGreaterThan21 = (hand) => {

  let sum = 0;
  let bool = false;

  for(let card of hand) {
    sum += card.value;
  }
  if(sum > 21) bool = true;
  return bool;
}

export const getPoints = (hand) => {
  let sum = 0;

  for(let card of hand) {
    sum += card.value;
  }
  return sum;
}

const indexOfAce = (hand) => hand.findIndex((card)=> card.name.indexOf("A")> -1 && card.value === 11);
const changeAceValueTo1 = (hand) => hand[indexOfAce(hand)].value = 1;


export const fitAces = (hand) => {

  if(hasAtLeastOneAce(hand)) {
    while(isSumGreaterThan21(hand)) {
      const index = indexOfAce(hand);
      if (index === -1) break;
      changeAceValueTo1(hand);
    }
  }
}

export const showHand = (hand) => {
    let uiHand = [];
    for(let card of hand) {
        uiHand.push({
            name: card.name,
            value: card.value
        })
    }
    console.log(uiHand);
}

export const getGamerTwoCards = (points, deck, hand) => {
    
    let numberOfCards;
    
    for(let i = 0; i < 2; i++){
        let card = getRandomCard(deck);
        hand.push(card);
        fitAces(hand);
        points = getPoints(hand);
        numberOfCards = hand.length;
        cleanDeck(card, deck);
    }

    return {points, numberOfCards, hand};
}

export const getAnotherCard = (hand, points, deck) => {
    let card = getRandomCard(deck);
    let numberOfCards;
    hand.push(card);
    fitAces(hand);
    points = getPoints(hand);
    cleanDeck(card, deck);
    numberOfCards = hand.length;

    return { hand, points, numberOfCards};
}

export const getCroupierTwoCards = (points, deck, hand) => {
    
    let numberOfCards = 2;

    for(let i = 0; i < 2; i++){
        let card = getRandomCard(deck);
        hand.push(card);
        fitAces(hand);
        points = getPoints(hand);
        cleanDeck(card, deck);
    }

    numberOfCards = hand.length;
    let firstCardPoints = hand[0].value;
    let firstCard = hand[0];

    return {points, numberOfCards, hand, firstCard, firstCardPoints};
}

export const getMoreCardsToCroupier = (points, hand, deck)  => {

    while(points < 17) {
        let card = getRandomCard(deck);
        fitAces(hand);
        points = getPoints(hand);
        
        hand.push(card);
        cleanDeck(card, deck);
    }
    let numberOfCards = hand.length;

    return {points, numberOfCards, hand};

}