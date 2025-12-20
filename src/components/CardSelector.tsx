import SuitSelector, { type Suit } from "./SuitSelector";
import { usePokerSimulation, type State } from "./PokerSimulationContext";

const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

type CardSelectorProps = {
  label: string;
  cardId: keyof State["selectedCards"];
};

export default function CardSelector({ label, cardId }: CardSelectorProps) {
  const { state, dispatch, isSuitDisabled } = usePokerSimulation();

  const card = state.selectedCards[cardId];
  const rank = card?.rank || null;

  const onRankChange = (rank: string) => {
    if (rank) {
      dispatch({
        type: "SET_CARD",
        payload: {
          cardId,
          card: { rank, suit: card?.suit || null },
        },
      });
    } else {
      dispatch({ type: "SET_CARD", payload: { cardId, card: null } });
    }
  };
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex gap-2">
        <select
          data-testid={`${cardId}-rank`}
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
        <SuitSelector cardId={cardId} />
      </div>
    </div>
  );
}
