import SuitSelector, { type Suit } from "./SuitSelector";

const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

type CardSelectorProps = {
  label: string;
  testId: string;
  rank: string | null;
  suit: Suit | null;
  onRankChange: (rank: string) => void;
  onSuitChange: (suit: Suit) => void;
  isSuitDisabled: (suit: Suit) => boolean;
};

export default function CardSelector({
  label,
  testId,
  rank,
  suit,
  onRankChange,
  onSuitChange,
  isSuitDisabled,
}: CardSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex gap-2">
        <select
          data-testid={`${testId}-rank`}
          value={rank || ""}
          onChange={(e) => onRankChange(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        >
          <option value="">Rank</option>
          {ranks.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <SuitSelector
          selectedSuit={suit}
          onSelectSuit={onSuitChange}
          isSuitDisabled={isSuitDisabled}
          testId={`${testId}-suit`}
        />
      </div>
    </div>
  );
}
