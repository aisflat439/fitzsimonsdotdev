import completeExample from "./pseudo-code.ts?raw";

export const routingSlides = [
  {
    focus: "It’s a classifier. Pick one path from a known set.",
    highlights: [2, 3, 4, 5],
    code: `const route = await classifyAsset(asset, {
  shortVideo: "A clip suitable for short-form video.",
  memePhoto: "A photo with a clear meme-worthy moment.",
  highQualityPhoto: "A sharp, well-composed photo for press use.",
  manualReview: "Unknown, ambiguous, or unsuitable for these uses.",
});

// Pick the best fit. If there's no clear fit, request manual review.
// The LLM classifies the asset; it doesn't invent a new handler.`,
  },
  {
    focus: "The LLM picks. Code dispatches. Unknown is a valid outcome.",
    highlights: [8, 9, 12],
    code: `const handlers = new Map([
  ["shortVideo", createShortVideo],
  ["memePhoto", createMeme],
  ["highQualityPhoto", preparePressPhoto],
  ["manualReview", queueManualReview],
]);

const handle = handlers.get(route) ?? queueManualReview;
const assetResult = await handle(asset);

// Queuing manual review is a successful handoff.
// A broken classifier or handler is still a workflow failure.`,
  },
  {
    focus: "One chosen path. A fallback. Same result contract.",
    highlights: [2, 3, 10, 14],
    code: completeExample,
  },
];
