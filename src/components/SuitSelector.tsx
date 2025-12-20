import Spade from "../icons/Spade";
import Heart from "../icons/Heart";
import Diamond from "../icons/Diamond";
import Club from "../icons/Club";

export type Suit = "spades" | "hearts" | "diamonds" | "clubs";

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
  selectedSuit: Suit | null;
  onSelectSuit: (suit: Suit) => void;
  isSuitDisabled: (suit: Suit) => boolean;
  testId: string;
};

export default function SuitSelector({
  selectedSuit,
  onSelectSuit,
  isSuitDisabled,
  testId,
}: SuitSelectorProps) {
  const suits: Suit[] = ["spades", "hearts", "diamonds", "clubs"];

  return (
    <div className="flex gap-1">
      {suits.map((suit) => (
        <button
          key={suit}
          type="button"
          data-testid={`${testId}-${suit}`}
          disabled={isSuitDisabled(suit)}
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
