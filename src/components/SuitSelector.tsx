import Spade from "../icons/Spade";
import Heart from "../icons/Heart";
import Diamond from "../icons/Diamond";
import Club from "../icons/Club";
import { usePokerSimulation, type State } from "./PokerSimulationContext";

export const SUITS = ["spades", "hearts", "diamonds", "clubs"] as const;
export type Suit = (typeof SUITS)[number];

const SuitIcon = ({ suit }: { suit: Suit }) => {
  switch (suit) {
    case "spades":
      return <Spade />;
    case "hearts":
      return <Heart />;
    case "diamonds":
      return <Diamond />;
    case "clubs":
      return <Club />;
  }
};

type SuitSelectorProps = {
  cardId: keyof State["selectedCards"];
};

export default function SuitSelector({ cardId }: SuitSelectorProps) {
  const { state, dispatch, isSuitDisabled } = usePokerSimulation();

  const selectedSuit = state.selectedCards[cardId]?.suit || null;

  const onSelectSuit = (suit: Suit) => {
    const currentRank = state.selectedCards[cardId]?.rank;
    if (currentRank) {
      dispatch({
        type: "SET_CARD",
        payload: {
          cardId,
          card: { rank: currentRank, suit },
        },
      });
    }
  };

  return (
    <div className="flex gap-1">
      {SUITS.map((suit) => (
        <button
          key={suit}
          type="button"
          data-testid={`${cardId}-suit-${suit}`}
          disabled={isSuitDisabled(cardId, suit)}
          onClick={() => onSelectSuit(suit)}
          className={`p-2 border rounded transition-all ${
            selectedSuit === suit
              ? "bg-blue-100 border-blue-500 scale-110"
              : "bg-white hover:bg-gray-50"
          } disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white`}
        >
          <SuitIcon suit={suit} />
        </button>
      ))}
    </div>
  );
}
