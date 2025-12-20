import CardSelector from "./CardSelector";
import PlayerSelection from "./PlayerSelection";
import { PokerSimulationProvider } from "./PokerSimulationContext";

function PokerSimulationContent() {
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
              <PlayerSelection />

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
