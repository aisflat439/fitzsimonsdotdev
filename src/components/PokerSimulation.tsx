import { useState } from "react";

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

const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const suits = ["♠", "♥", "♦", "♣"];

export default function PokerSimulation() {
  const [playerCount, setPlayerCount] = useState(9);
  const [position, setPosition] = useState("UTG");
  const [villain, setVillain] = useState("BB");

  const positions = playerCount === 6 ? positions6Max : positions9Max;
  const availableVillainPositions = positions.filter((pos) => pos !== position);

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
                    value={playerCount}
                    onChange={(e) => setPlayerCount(parseInt(e.target.value))}
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
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
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
                    value={villain}
                    onChange={(e) => setVillain(e.target.value)}
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

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Card 1
                </label>
                <div className="flex gap-2">
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Rank</option>
                    {ranks.map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                  </select>
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Suit</option>
                    {suits.map((suit) => (
                      <option key={suit} value={suit}>
                        {suit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Card 2
                </label>
                <div className="flex gap-2">
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Rank</option>
                    {ranks.map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                  </select>
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Suit</option>
                    {suits.map((suit) => (
                      <option key={suit} value={suit}>
                        {suit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Flop */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Flop</h3>

            <div className="space-y-4">
              {[1, 2, 3].map((cardNum) => (
                <div key={cardNum}>
                  <label className="block text-sm font-medium mb-1">
                    Card {cardNum}
                  </label>
                  <div className="flex gap-2">
                    <select className="flex-1 border rounded px-3 py-2">
                      <option value="">Rank</option>
                      {ranks.map((rank) => (
                        <option key={rank} value={rank}>
                          {rank}
                        </option>
                      ))}
                    </select>
                    <select className="flex-1 border rounded px-3 py-2">
                      <option value="">Suit</option>
                      {suits.map((suit) => (
                        <option key={suit} value={suit}>
                          {suit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Turn */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">Turn</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Turn Card
                </label>
                <div className="flex gap-2">
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Rank</option>
                    {ranks.map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                  </select>
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Suit</option>
                    {suits.map((suit) => (
                      <option key={suit} value={suit}>
                        {suit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* River */}
          <div className="border rounded p-4 flex-1">
            <h3 className="text-xl font-semibold mb-4">River</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  River Card
                </label>
                <div className="flex gap-2">
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Rank</option>
                    {ranks.map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                  </select>
                  <select className="flex-1 border rounded px-3 py-2">
                    <option value="">Suit</option>
                    {suits.map((suit) => (
                      <option key={suit} value={suit}>
                        {suit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
