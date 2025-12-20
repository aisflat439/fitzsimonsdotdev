import CardSelector from "./CardSelector";
import {
  PokerSimulationProvider,
  usePokerSimulation,
} from "./PokerSimulationContext";

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

function PokerSimulationContent() {
  const { state, dispatch } = usePokerSimulation();

  const positions = state.playerCount === 6 ? positions6Max : positions9Max;
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
