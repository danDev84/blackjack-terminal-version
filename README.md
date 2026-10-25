Terminal Blackjack

A simple Blackjack game that runs entirely in your terminal, built with plain Node.js (ES Modules) and no external dependencies. Play a hand against the computer dealer (the *croupier*), choose to **Hit** or **Stand**, and see who gets closest to 21 without going over.

---

## Features

- Interactive command-line gameplay using Node's built-in `readline/promises`
- Full deck of cards built at the start of each game
- Random card dealing
- Automatic Ace adjustment: Aces count as 11 and drop to 1 when the hand would go over 21
- Dealer's first card is revealed while the rest stays hidden
- Dealer draws until reaching at least 17
- Blackjack (21 with two cards) is distinguished from a regular 21
- Zero dependencies

## Requirements

- [Node.js](https://nodejs.org/) **v17 or higher** (required for `node:readline/promises`)
- npm (comes with Node.js)

## Installation

```bash
git clone <your-repo-url>
cd blackjack
```

No `npm install` is needed — the project has no dependencies.

## Usage

Start the game with:

```bash
npm run dev
```

or run it directly:

```bash
node app.js
```

## How to Play

1. When prompted, type **`Y`** to start a new game (or **`N`** to cancel).
2. You and the dealer each receive two cards. You'll see your points, number of cards and full hand, plus the dealer's first card.
3. On each turn, choose:
   - **`H`** — **Hit**: take another card.
   - **`S`** — **Stand**: keep your current hand and reveal the dealer's hand.
4. The round ends when you stand, when you reach or exceed 21, or when the dealer reaches or exceeds 21.
5. The final result is printed and the game closes.

### Example prompts

```
♤ ♡ ♧ ♢
Would you like to start a new game? (Y/N): y

Do you wanna Hit or Stand? (H/S) h
```

Input is case-insensitive, and any option other than `H` or `S` will ask you to try again.

## Rules

### Card values

| Card            | Value                                   |
| --------------- | --------------------------------------- |
| 2 – 10          | Face value                              |
| J, Q, K         | 10                                      |
| A               | 11, or 1 if 11 would make the hand bust |

### Dealer

The dealer keeps drawing cards until their hand totals **17 or more**.

### Outcomes

| Situation                                        | Result            |
| ------------------------------------------------ | ----------------- |
| You go over 21                                   | Dealer wins       |
| Dealer goes over 21                              | You win           |
| Blackjack (21 with exactly two cards)            | Blackjack wins    |
| Both have Blackjack                              | Push (tie)        |
| Blackjack vs. 21 with more than two cards        | Blackjack wins    |
| One side has 21, the other doesn't               | 21 wins           |
| Both under 21                                    | Higher total wins |
| Both under 21 with the same total                | Tie               |

> If both you and the dealer go over 21, the dealer wins — your bust is checked first.

## Project Structure

```
blackjack/
├── app.js                          # Entry point and main game loop
├── package.json
└── assets/
    ├── cartas/                     # PNG card images
    └── js/
        ├── data/
        │   ├── cardsArray.js       # Builds the deck of cards (getDeckOfCards)
        │   └── redBack.js          # Red card back asset
        ├── tools/
        │   ├── printGameResult.js  # Decides the winner and returns the result message
        │   └── utils.js            # Dealing, scoring, Ace handling, deck helpers
        └── ui/
            └── ui.js               # Player and dealer headers for the terminal
```

Card images in `assets/cartas/` are named by rank followed by the suit initial:
**C** = Clubs ♧, **D** = Diamonds ♢, **H** = Hearts ♡, **S** = Spades ♤.

### Key helpers (`utils.js`)

| Function                  | Purpose                                                  |
| ------------------------- | -------------------------------------------------------- |
| `getGamerTwoCards`        | Deals the player's initial two cards                     |
| `getCroupierTwoCards`     | Deals the dealer's initial two cards and exposes the first one |
| `getAnotherCard`          | Deals one more card to the player (Hit)                  |
| `getMoreCardsToCroupier`  | Draws cards for the dealer until reaching 17             |
| `getRandomCard`           | Picks a random card from the deck                        |
| `getPoints`               | Sums the value of every card in a hand                   |
| `fitAces`                 | Turns Aces from 11 into 1 while the hand is over 21      |
| `cleanDeck`               | Removes a dealt card from the deck                       |
| `showHand`                | Prints a hand (name and value of each card)              |
| `hasBeenRemoved`          | Debug helper: logs whether a card left the deck          |

## Scripts

| Command       | Description           |
| ------------- | --------------------- |
| `npm run dev` | Starts the game       |

## License

This project is licensed under the [MIT License](LICENSE).
