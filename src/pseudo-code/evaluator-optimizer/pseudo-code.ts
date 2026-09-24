const refineInvite = new Workflow({
  strategy: new EvaluatorOptimizer(),
  maxAttempts: 3, // Up to three evaluations, including the first draft.
  generate: () => draftInvite(eventBrief),
  evaluate: (state) => reviewInvite(state.candidate, criteria),
  optimize: (s) => reviseInvite(s.candidate, s.evaluation.feedback, eventBrief),
});

const publishInvite = new Workflow({
  strategy: new Sequential(),
  steps: [
    code("refine", async (state) => {
      const result: WorkflowResult = await refineInvite.run();
      // Bubble the original exception into the outer workflow's result.
      if (!result.ok) throw result.exception;
      state.invite = result.state.candidate;
    }),
    code("save", (state) => saveInvite(state.invite)),
  ],
});

const result: WorkflowResult = await publishInvite.run();
if (!result.ok) reportFailure(result.failedStep, result.error);
