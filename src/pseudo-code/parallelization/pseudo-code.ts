const parseInvite = new Workflow({
  strategy: new Parallel(),
  steps: [
    task("people", {
      input: () => request.inviteList,
      output: "people",
    }),
    task("commitments", {
      input: () => request.scheduleNotes,
      output: "commitments",
    }),
  ],
});

const result: WorkflowResult = await parseInvite.run();
if (result.ok) {
  // Both branches have finished. Now combine their outputs.
  showInviteBrief(result.state.people, result.state.commitments);
} else {
  reportFailure(result.failedStep, result.error);
}
