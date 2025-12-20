"use client";
import { usePokerSimulation } from "./PokerSimulationContext";

const getPositionsForPlayerCount = (playerCount: number): string[] => {
  switch (playerCount) {
    case 2:
      return ["BTN", "BB"];
    case 3:
      return ["BTN", "SB", "BB"];
    case 4:
      return ["BTN", "SB", "BB", "CO"];
    case 5:
      return ["BTN", "SB", "BB", "CO", "MP"];
    case 6:
      return ["UTG", "MP", "CO", "BTN", "SB", "BB"];
    case 7:
      return ["UTG", "MP", "CO", "HJ", "BTN", "SB", "BB"];
    case 8:
      return ["UTG", "MP", "CO", "HJ", "LJ", "BTN", "SB", "BB"];
    case 9:
      return [
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
    case 10:
      return [
        "UTG",
        "UTG+1",
        "UTG+2",
        "MP",
        "MP+1",
        "LJ",
        "HJ",
        "CO",
        "BTN",
        "SB",
        "BB",
      ];
    default:
      return [
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
  }
};

export default function PlayerSelection() {
  const { state, dispatch } = usePokerSimulation();

  const positions = getPositionsForPlayerCount(state.playerCount);
  const availableVillainPositions = positions.filter(
    (pos) => pos !== state.position,
  );

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1 whitespace-nowrap">
          Players
        </label>
        <select
          data-testid="player-count"
          value={state.playerCount}
          onChange={(e) =>
            dispatch({
              type: "SET_PLAYER_COUNT",
              payload: parseInt(e.target.value),
            })
          }
          className="w-full border rounded px-3 py-2"
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium mb-1 whitespace-nowrap">
          Position
        </label>
        <select
          data-testid="hero-position"
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
          data-testid="villain-position"
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
  );
}
