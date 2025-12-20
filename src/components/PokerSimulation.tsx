import { useReducer } from "react";
import CardSelector from "./CardSelector";
import { type Suit } from "./SuitSelector";

const positions6Max = ["UTG", "MP", "CO", "BTN", "SB", "BB"];
const positions9Max = [
  "UTG",
  "UTG+1",
  "MP",
  "MP+1",
  "LJ",
  "HJ",
  "CO",
  "BTN",
  "SB",
  "BB",
];

type Card = {
  rank: string;
  suit: Suit;
};

type State = {
  playerCount: number;
  position: string;
  villain: string;
  selectedCards: {
    heroCard1: Card | null;
    heroCard2: Card | null;
    flopCard1: Card | null;
    flopCard2: Card | null;
    flopCard3: Card | null;
    turnCard: Card | null;
    riverCard: Card | null;
  };
};

type Action =
  | { type: "SET_PLAYER_COUNT"; payload: number }
  | { type: "SET_POSITION"; payload: string }
  | { type: "SET_VILLAIN"; payload: string }
  | {
      type: "SET_CARD";
      payload: { cardId: keyof State["selectedCards"]; card: Card | null };
    };

const initialState: State = {
  playerCount: 9,
  position: "UTG",
  villain: "BB",
  selectedCards: {
    heroCard1: null,
    heroCard2: null,
    flopCard1: null,
    flopCard2: null,
    flopCard3: null,
    turnCard: null,
    riverCard: null,
  },
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PLAYER_COUNT":
      return { ...state, playerCount: action.payload };
    case "SET_POSITION":
      return { ...state, position: action.payload };
    case "SET_VILLAIN":
      return { ...state, villain: action.payload };
    case "SET_CARD":
      return {
        ...state,
        selectedCards: {
          ...state.selectedCards,
          [action.payload.cardId]: action.payload.card,
        },
      };
    default:
      return state;
  }
}

export default function PokerSimulation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const positions = state.playerCount === 6 ? positions6Max : positions9Max;
  const availableVillainPositions = positions.filter(
    (pos) => pos !== state.position,
  );

  const isCardSelected = (rank: string, suit: Suit): boolean => {
    return Object.values(state.selectedCards).some(
      (card) => card?.rank === rank && card?.suit === suit,
    );
  };

  const setCard = (
    cardId: keyof State["selectedCards"],
    rank: string,
    suit: Suit,
  ) => {
    dispatch({
      type: "SET_CARD",
      payload: {
        cardId,
        card: { rank, suit },
      },
    });
  };

  const makeIsSuitDisabled =
    (cardId: keyof State["selectedCards"]) =>
    (suit: Suit): boolean => {
      const currentCard = state.selectedCards[cardId];
      if (!currentCard?.rank) return true;
      return isCardSelected(currentCard.rank, suit);
    };

  const makeOnRankChange =
    (cardId: keyof State["selectedCards"]) => (rank: string) => {
      const currentSuit = state.selectedCards[cardId]?.suit || "spades";
      if (rank) {
        setCard(cardId, rank, currentSuit);
      } else {
        dispatch({ type: "SET_CARD", payload: { cardId, card: null } });
      }
    };

  const makeOnSuitChange =
    (cardId: keyof State["selectedCards"]) => (suit: Suit) => {
      const currentRank = state.selectedCards[cardId]?.rank;
      if (currentRank) {
        setCard(cardId, currentRank, suit);
      }
    };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Poker Monte Carlo Simulation</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simulation Parameters</h2>

        <div className="flex flex-row gap-4 mb-8 w-full">
          {/* Preflop */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Preflop</h3>

            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 whitespace-nowrap">
                    Players
                  </label>
                  <select
                    value={state.playerCount}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PLAYER_COUNT",
                        payload: parseInt(e.target.value),
                      })
                    }
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="6">6</option>
                    <option value="9">9</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 whitespace-nowrap">
                    Position
                  </label>
                  <select
                    value={state.position}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_POSITION",
                        payload: e.target.value,
                      })
                    }
                    className="w-full border rounded px-3 py-2"
                  >
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 whitespace-nowrap">
                    Villain
                  </label>
                  <select
                    value={state.villain}
                    onChange={(e) =>
                      dispatch({ type: "SET_VILLAIN", payload: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  >
                    {availableVillainPositions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <CardSelector
                label="Your Card 1"
                testId="hero-card-1"
                rank={state.selectedCards.heroCard1?.rank || null}
                suit={state.selectedCards.heroCard1?.suit || null}
                onRankChange={makeOnRankChange("heroCard1")}
                onSuitChange={makeOnSuitChange("heroCard1")}
                isSuitDisabled={makeIsSuitDisabled("heroCard1")}
              />

              <CardSelector
                label="Your Card 2"
                testId="hero-card-2"
                rank={state.selectedCards.heroCard2?.rank || null}
                suit={state.selectedCards.heroCard2?.suit || null}
                onRankChange={makeOnRankChange("heroCard2")}
                onSuitChange={makeOnSuitChange("heroCard2")}
                isSuitDisabled={makeIsSuitDisabled("heroCard2")}
              />
            </div>
          </div>

          {/* Flop */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Flop</h3>

            <div className="space-y-4">
              <CardSelector
                label="Card 1"
                testId="flop-card-1"
                rank={state.selectedCards.flopCard1?.rank || null}
                suit={state.selectedCards.flopCard1?.suit || null}
                onRankChange={makeOnRankChange("flopCard1")}
                onSuitChange={makeOnSuitChange("flopCard1")}
                isSuitDisabled={makeIsSuitDisabled("flopCard1")}
              />

              <CardSelector
                label="Card 2"
                testId="flop-card-2"
                rank={state.selectedCards.flopCard2?.rank || null}
                suit={state.selectedCards.flopCard2?.suit || null}
                onRankChange={makeOnRankChange("flopCard2")}
                onSuitChange={makeOnSuitChange("flopCard2")}
                isSuitDisabled={makeIsSuitDisabled("flopCard2")}
              />

              <CardSelector
                label="Card 3"
                testId="flop-card-3"
                rank={state.selectedCards.flopCard3?.rank || null}
                suit={state.selectedCards.flopCard3?.suit || null}
                onRankChange={makeOnRankChange("flopCard3")}
                onSuitChange={makeOnSuitChange("flopCard3")}
                isSuitDisabled={makeIsSuitDisabled("flopCard3")}
              />
            </div>
          </div>

          {/* Turn */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Turn</h3>

            <div className="space-y-4">
              <CardSelector
                label="Turn Card"
                testId="turn-card"
                rank={state.selectedCards.turnCard?.rank || null}
                suit={state.selectedCards.turnCard?.suit || null}
                onRankChange={makeOnRankChange("turnCard")}
                onSuitChange={makeOnSuitChange("turnCard")}
                isSuitDisabled={makeIsSuitDisabled("turnCard")}
              />
            </div>
          </div>

          {/* River */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">River</h3>

            <div className="space-y-4">
              <CardSelector
                label="River Card"
                testId="river-card"
                rank={state.selectedCards.riverCard?.rank || null}
                suit={state.selectedCards.riverCard?.suit || null}
                onRankChange={makeOnRankChange("riverCard")}
                onSuitChange={makeOnSuitChange("riverCard")}
                isSuitDisabled={makeIsSuitDisabled("riverCard")}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Run Simulation
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <div className="results-area">{/* Results will appear here */}</div>
      </section>
    </main>
  );
}
