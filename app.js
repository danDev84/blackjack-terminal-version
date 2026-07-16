import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { getDeckOfCards } from "./assets/js/data/cardsArray.js";
import { printGameResult } from "./assets/js/tools/printGameResult.js";
import { gamerPrint, computerPrint } from './assets/js/ui/ui.js';

import { 
    cleanDeck, 
    fitAces, 
    getAnotherCard,
    getCroupierTwoCards,
    getGamerTwoCards, 
    getMoreCardsToCroupier,
    getPoints, 
    getRandomCard, 
    hasBeenRemoved,
    random, 
    showHand,
} 
from './assets/js/tools/utils.js';

// VARIABLES
let cards = getDeckOfCards();
let deck = [...cards];

// INITIAL VALUES
let gamerPoints = 0;
let computerPoints = 0;
let gamerHand = [];
let computerHand = [];
let entroAlCiclo = false;

// GAME
const iniciarJuego = async () => {
    const rl = readline.createInterface({ input, output });

    try {
   
        // Question 1. 
        const answer = await rl.question('♤ ♡ ♧ ♢\nWould you like to start a new game? (Y/N): ');
        const decision = answer.trim().toLowerCase();

        if (decision === 'y') {

                    console.log("\n Repartiendo cartas iniciales...");
                    
                    const gamerResult = getGamerTwoCards(gamerPoints, deck, gamerHand);
                    const computerResult = getCroupierTwoCards(computerPoints, deck, computerHand);

                    gamerPoints += gamerResult.points;
                    computerPoints = computerResult.points;
                    
                    gamerPrint();

                        console.log("POINTS", gamerPoints);
                        console.log("CARDS", gamerResult?.numberOfCards);
                        showHand(gamerResult.hand);
                        console.log("\n");

                    computerPrint();

                        console.log("FIRST CARD", 
                            { 
                                name: computerResult.firstCard.name,
                                value: computerResult.firstCard.value 
                            });

                    while(gamerPoints < 21){

                        const answer2 = await rl.question("\nDo you wanna Hit or Stand? (H/S)");
                        const isHit = answer2.trim().toLowerCase();

                        entroAlCiclo = true;

                        let anotherCard;
                        
                        if(isHit === "h") { // The gamer got another card

                            // One more card is dealt to the player.
                            anotherCard = getAnotherCard(gamerResult.hand, gamerPoints, deck);
                            gamerPoints = anotherCard.points;

                            const cSecondHand = getMoreCardsToCroupier(computerPoints, computerResult.hand, deck);

                            computerPoints = cSecondHand.points;
                            computerHand = cSecondHand.hand;

                            gamerPrint();

                                console.log(`POINTS ${gamerPoints}`);
                                console.log(`CARDS ${anotherCard.numberOfCards}`);
                                showHand(anotherCard.hand);

                            computerPrint();

                            if(isHit === "h") console.log("FIRST CARD", 
                                {
                                name: computerResult.firstCard.name,
                                value: computerResult.firstCard.value 
                                });

                            if(computerPoints === 21 || computerPoints > 21) break;

                        } else if (isHit === "s") { // The gamer stopped the game. The player is standing firm.

                            const cSecondHand = getMoreCardsToCroupier(computerPoints, computerResult.hand, deck);

                            computerPoints = cSecondHand.points;
                            computerHand = cSecondHand.hand;

                            computerPrint();
                        
                                console.log("POINTS", computerPoints);
                                showHand(computerHand);

                            break;

                        } else {
                            console.log('Not a valid option, please enter "H" or "S"');
                        }
                }

                console.log("\n", printGameResult(gamerPoints, computerPoints, gamerResult.numberOfCards, computerResult.numberOfCards));
        } else {
            console.log("\nUnderstood. Game cancelled. See you next time!");
        }

    } catch (error) {
        console.error("An error occurred in the console:", error);
    } finally {
        
        console.log("\nTHE GAME HAS ENDED");
        rl.close();
    }
};

iniciarJuego();