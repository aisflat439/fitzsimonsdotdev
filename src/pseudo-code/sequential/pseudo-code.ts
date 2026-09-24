const newsletter = new Workflow({
  strategy: new Sequential(), // One step at a time. Swap strategies, keep the primitive.
  steps: [
    task("outline", { input: () => tourNotes, output: "outline" }),
    task("draft", { input: (state) => state.outline, output: "draft" }),
    task("translate", { input: (state) => state.draft, output: "spanish" }),
    code("save", (state) => saveNewsletter(state.spanish)),
    code("notify", (state) => notifyEditor(state.spanish), {
      continueOnFailure: true, // A failed notification doesn't fail the newsletter.
    }),
  ],
});

const result: WorkflowResult = await newsletter.run();

if (result.ok) {
  showNewsletter(result.state.spanish);
} else {
  reportFailure(result.failedStep, result.error);
}
