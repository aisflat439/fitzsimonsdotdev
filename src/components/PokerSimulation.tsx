import CardSelector from "./CardSelector";
import {
  PokerSimulationProvider,
  usePokerSimulation,
} from "./PokerSimulationContext";

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

function PokerSimulationContent() {
  const { state, dispatch } = usePokerSimulation();

  const positions = getPositionsForPlayerCount(state.playerCount);
  const availableVillainPositions = positions.filter(
    (pos) => pos !== state.position,
  );

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

              <CardSelector label="Your Card 1" cardId="heroCard1" />
              <CardSelector label="Your Card 2" cardId="heroCard2" />
            </div>
          </div>

          {/* Flop */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Flop</h3>

            <div className="space-y-4">
              <CardSelector label="Card 1" cardId="flopCard1" />
              <CardSelector label="Card 2" cardId="flopCard2" />
              <CardSelector label="Card 3" cardId="flopCard3" />
            </div>
          </div>

          {/* Turn */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Turn</h3>

            <div className="space-y-4">
              <CardSelector label="Turn Card" cardId="turnCard" />
            </div>
          </div>

          {/* River */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">River</h3>

            <div className="space-y-4">
              <CardSelector label="River Card" cardId="riverCard" />
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

export default function PokerSimulation() {
  return (
    <PokerSimulationProvider>
      <PokerSimulationContent />
    </PokerSimulationProvider>
  );
}
