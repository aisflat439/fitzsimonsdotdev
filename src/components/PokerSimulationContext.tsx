import { createContext, useContext, useReducer, type ReactNode } from "react";
import { type Suit } from "./SuitSelector";

type Card = {
  rank: string;
  suit: Suit | null;
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

type PokerSimulationContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  isCardSelected: (rank: string, suit: Suit) => boolean;
  isSuitDisabled: (cardId: keyof State["selectedCards"], suit: Suit) => boolean;
};

const PokerSimulationContext = createContext<
  PokerSimulationContextType | undefined
>(undefined);

export function PokerSimulationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isCardSelected = (rank: string, suit: Suit): boolean => {
    return Object.values(state.selectedCards).some(
      (card) => card !== null && card.rank === rank && card.suit === suit,
    );
  };

  const isSuitDisabled = (
    cardId: keyof State["selectedCards"],
    suit: Suit,
  ): boolean => {
    const currentCard = state.selectedCards[cardId];
    if (!currentCard?.rank) return true; // No rank selected, disable all suits
    // Check if this rank+suit combo is already selected elsewhere
    return isCardSelected(currentCard.rank, suit);
  };

  return (
    <PokerSimulationContext.Provider
      value={{ state, dispatch, isCardSelected, isSuitDisabled }}
    >
      {children}
    </PokerSimulationContext.Provider>
  );
}

export function usePokerSimulation() {
  const context = useContext(PokerSimulationContext);
  if (!context) {
    throw new Error(
      "usePokerSimulation must be used within PokerSimulationProvider",
    );
  }
  return context;
}

export type { State, Action, Card };
