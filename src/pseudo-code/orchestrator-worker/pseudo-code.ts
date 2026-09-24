const createRecap = (cleanSubmission) => new Workflow({
  strategy: new OrchestratorWorker(),
  workers: { transcribe, edit, caption },
  plan: () => planCoverage(cleanSubmission, {
    availableWorkers: ["transcribe", "edit", "caption"],
  }),
  execute: (plan, workers) => executePlan(plan, workers),
  combine: (results) => assembleRecap(results),
  output: "recap",
});

const tourRecap = new Workflow({
  strategy: new Sequential(),
  steps: [
    code("sanitize", async (state) => {
      state.submission = await sanitizeSubmission(submission);
    }),
    code("recap", async (state) => {
      const result: WorkflowResult = await createRecap(state.submission).run();
      if (!result.ok) throw result.exception;
      state.recap = result.state.recap;
    }),
  ],
});

const result: WorkflowResult = await tourRecap.run();
if (!result.ok) reportFailure(result.failedStep, result.error);
