const tourAsset = new Workflow({
  strategy: new Routing(),
  classify: () => classifyAsset(asset),
  routes: {
    shortVideo: () => createShortVideo(asset),
    memePhoto: () => createMeme(asset),
    highQualityPhoto: () => preparePressPhoto(asset),
    manualReview: () => queueManualReview(asset),
  },
  fallback: () => queueManualReview(asset),
  output: "assetResult",
});

const result: WorkflowResult = await tourAsset.run();
if (result.ok) {
  showAssetStatus(result.state.assetResult);
} else {
  reportFailure(result.failedStep, result.error);
}
