import completeExample from "./pseudo-code.ts?raw";

export const orchestratorWorkerSlides = [
  {
    focus: "We know the workers. The submission determines the jobs.",
    highlights: [2, 3, 4, 7],
    code: `const workers = {
  transcribe,
  edit,
  caption,
};

const plan = await planCoverage(submission, Object.keys(workers));
// Finished article + photos? Maybe edit and caption.
// Voice notes + photos? Transcribe, edit, and caption.
// The LLM chooses jobs and dependencies, not new tools.`,
  },
  {
    focus: "The LLM returns this plan. We didn’t write these jobs.",
    highlights: [],
    generatedResponse: true,
    code: `[
  {
    "id": "transcript", "worker": "transcribe",
    "input": "submission.audio"
  },
  {
    "id": "captions", "worker": "caption",
    "input": "submission.photos"
  },
  {
    "id": "article", "worker": "edit",
    "dependsOn": ["transcript"], "inputFrom": ["transcript"]
  }
]`,
  },
  {
    focus: "The LLM plans. Code coordinates. Workers do the work.",
    highlights: [1, 5, 6, 9],
    code: `validatePlan(plan, workers); // Known workers, valid inputs, no cycles.
const results = {};

while (hasPendingJobs(plan, results)) {
  const ready = jobsWithCompletedDependencies(plan, results);
  const batch = await runWorkers(ready, workers, results);
  Object.assign(results, batch); // Results keyed by job ID.
}
const recap = await assembleRecap(results);

// Unlike fixed parallel tasks, the jobs came from this submission.`,
  },
  {
    focus: "Sanitize first. Then let the orchestrator plan the work.",
    compact: true,
    highlights: [4, 13, 16, 19, 20],
    code: completeExample,
  },
];
