import completeExample from "./pseudo-code.ts?raw";

export const parallelizationSlides = [
  {
    focus: "Two inputs. Two jobs. Neither needs the other’s output.",
    highlights: [2, 7],
    code: `task("people", {
  input: () => request.inviteList,
  output: "people",
}),

task("commitments", {
  input: () => request.scheduleNotes,
  output: "commitments",
}),
// Commitments: tour, football-team events, game travel, studio.
// Extract what the supplied notes say. Don't invent a schedule.`,
  },
  {
    focus: "Start both. Wait once. Combine afterward.",
    highlights: [2, 3, 4, 7],
    code: `// Inside the parallel strategy, conceptually:
const [people, commitments] = await Promise.all([
  parsePeople(request.inviteList),
  parseCommitments(request.scheduleNotes),
]);

const state = { people, commitments };

// Time is roughly the slower branch, not both added together.
// Each branch owns its output. No reading unfinished results.`,
  },
  {
    focus: "Same workflow. Parallel strategy. Same result contract.",
    highlights: [2, 15, 18],
    code: completeExample,
  },
];
