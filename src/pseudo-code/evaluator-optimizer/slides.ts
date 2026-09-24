import completeExample from "./pseudo-code.ts?raw";

export const evaluatorOptimizerSlides = [
  {
    focus: "Those “make sure” instructions are evaluation criteria.",
    highlights: [2, 3, 4],
    code: `const criteria = [
  "Welcome new Taylor Swift fans without assuming album knowledge.",
  "Make the date, location, and RSVP instructions easy to find.",
  "Build excitement without implying Taylor will attend.",
];`,
  },
  {
    focus: "Same workflow primitive. A different execution strategy.",
    highlights: [2, 3],
    code: `const invite = new Workflow({
  strategy: new EvaluatorOptimizer(),
  maxAttempts: 3, // Up to three evaluations, including the first draft.
  generate: () => draftInvite(eventBrief),
  evaluate: (state) => reviewInvite(state.candidate, criteria),
  optimize: (state) => reviseInvite({
    draft: state.candidate,
    feedback: state.evaluation.feedback,
    eventBrief,
  }),
});`,
  },
  {
    focus: "Evaluate the actual draft. Return a verdict and useful feedback.",
    highlights: [7, 8],
    code: `state.candidate = await draftInvite(eventBrief);
state.evaluation = await reviewInvite(state.candidate, criteria);

console.log(state.evaluation);
// Example verdict:
// {
//   passed: false,
//   feedback: "Explain what an era is. Make the RSVP instructions clearer."
// }`,
  },
  {
    focus: "Rejected? Revise from the feedback, then evaluate again.",
    highlights: [5, 6, 9],
    code: `state.attempts = 1; // The first candidate already counts.
while (!state.evaluation.passed) {
  if (state.attempts >= maxAttempts) return exhaustedFailure(state);
  state.candidate = await reviseInvite({
    draft: state.candidate,
    feedback: state.evaluation.feedback,
    eventBrief,
  });
  state.evaluation = await reviewInvite(state.candidate, criteria);
  state.attempts += 1;
}
return success(state);`,
  },
  {
    focus: "Bad draft? Improve it. Service down? Stop the loop.",
    highlights: [6, 7, 8, 9, 10],
    code: `try {
  // Rejected candidates get feedback, up to the attempt budget.
  return await runQualityLoop();
} catch (exception) {
  // A phase threw. Infrastructure retries belong outside this loop.
  return new WorkflowResult({
    state,
    failedStep: phaseInFlight.name,
    error: exception.message,
    exception,
  });
}
// No candidate passed? Return failure, not an approved draft.`,
  },
  {
    focus: "Different failures. Same shape. Same caller.",
    highlights: [4, 5, 6, 7, 8, 12, 13],
    code: `// Sequential failure, phase error, or exhausted attempts:
// every strategy returns the same WorkflowResult.
return new WorkflowResult({
  state,                    // Preserve partial work.
  failedStep: failed.name,  // Identify the step or phase.
  error: exception.message,
  exception,               // Preserve the original exception.
});

// The caller doesn't need to know which strategy ran.
const result = await workflow.run();
if (!result.ok) {
  reportFailure(result.failedStep, result.error);
}
// Rails run! re-raises result.exception for job retries.`,
  },
  {
    focus: "A workflow inside a step. The strategies compose.",
    highlights: [10, 13, 15, 16, 18],
    code: completeExample,
  },
];
