import completeExample from "./pseudo-code.ts?raw";

export const sequentialSlides = [
  {
    focus: "One primitive. Different strategies.",
    highlights: [3],
    code: `const newsletter = new Workflow({
  // Run one step at a time. The strategy is swappable.
  strategy: new Sequential(),
  steps: [],
});`,
  },
  {
    focus: "Each output names a key in state. All three results stick around.",
    highlights: [3, 7, 11, 17, 18, 19],
    code: `task("outline", {
  input: () => tourNotes,
  output: "outline", // Writes state.outline.
}),
task("draft", {
  input: (state) => state.outline,
  output: "draft",
}),
task("translate", {
  input: (state) => state.draft,
  output: "spanish",
}),
code("inspect", (state) => console.log(state)),

// Logged state (example values):
// {
//   outline: "1. Surprise songs  2. Fan highlights",
//   draft: "Tonight’s surprise songs delighted fans...",
//   spanish: "Las canciones sorpresa de esta noche..."
// }`,
  },
  {
    focus: "Some steps are just code. That’s the point.",
    highlights: [7, 8, 9],
    code: `task("translate", {
  input: (state) => state.draft,
  output: "spanish",
}),

// Same state. Same execution order. No LLM needed.
code("save", async (state) => {
  await saveNewsletter(state.spanish);
}),`,
  },
  {
    focus: "One result contract. Success or failure.",
    highlights: [4, 7],
    code: `const result = await newsletter.run();

if (result.ok) {
  showNewsletter(result.state.spanish);
} else {
  // Keep partial state and identify exactly what failed.
  reportFailure(result.failedStep, result.error);
}

// Required steps stop the workflow when they fail.`,
  },
  {
    focus: "Lesson learned: a notification service outage shouldn’t fail the newsletter.",
    highlights: [5],
    code: `code("save", (state) => saveNewsletter(state.spanish)),

code("notify", (state) => notificationService.send(state.spanish), {
  // Service down? This step is optional. Keep going.
  continueOnFailure: true,
}),

code("recordCompletion", () => recordCompletion()),`,
  },
  {
    focus: "Put it together.",
    highlights: [],
    code: completeExample,
  },
];
