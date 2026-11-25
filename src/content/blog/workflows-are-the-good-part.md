---
date: "2026-11-25"
updated: "2026-11-25"
title: "workflows are the good part"
hashtags: ["ai", "llms", "workflows", "agents", "taylor swift"]
description: "your prompt has smells. three of them mean you want a workflow. taylor swift is here to help."
revisions: 0
---

a couple months ago i gave a talk about building effective agents. the subtitle was "workflows are the good part" and i meant it. [the slides are here](/slides/building-effective-agents#1). this is the talk written down, minus the memes.

> an llm demo is easy to love. a product that works again tomorrow? that's the good stuff.

everybody wants to build an agent right now. hand the robot some tools, tell it the goal, let it cook. sometimes that's the move. mostly though, the thing you're building has a shape you already know. when you know the shape, you want a workflow.

i went on about this in [funnels](/blog/funnels). llms are the top of the funnel. you throw a fuzzy idea in one end and see if anybody cares. if they do, you tighten it up and it comes out the other end as a workflow.

a workflow is just small prompts with boring code in between, passing work back and forth.

why bother? some day you won't want to send buckets of money to the ai labs. hell, some day you might even want your features to be deterministic. a workflow lets you opt out of llms long term, one piece at a time.

llms are freaking rad. i actually like them. but code is _chef's kiss_.

here's the fun part. you don't have to guess where the workflow is. your prompt already told you. prompts have smells, same as code does. here are three.

## smell one: the prompt has a to-do list

imagine you're taylor swift's newsletter manager. you get a bunch of notes from tay, the band, managers, drivers... whoever. you wanna take all that and make a newsletter.

```text
use these eras tour notes.

step 1: create a newsletter outline.
step 2: use that outline to write a draft.
step 3: translate that draft into spanish.
```

if your prompt is numbering things, quit asking one llm to hold the whole list in its head. break it up.

```ts
// pseudo-code
const newsletter = new Workflow({
  strategy: new Sequential(),
  steps: [
    task("outline", { input: () => tourNotes, output: "outline" }),
    task("draft", { input: (state) => state.outline, output: "draft" }),
    task("translate", { input: (state) => state.draft, output: "spanish" }),
    code("save", (state) => saveNewsletter(state.spanish)),
    code("notify", (state) => notifyEditor(state.spanish), {
      continueOnFailure: true,
    }),
  ],
});
```

the notes go to an llm that only cares about the outline. it knows what makes a newsletter fans actually read. the outline goes to the draft writer. this buddy has the style guide and the old newsletters to compare against. the draft goes off to get translated, and you could even skip the llm for that one if you wanna get weird.

smaller and more focused is already a win. but even better, you can weave in code. saving to the database is code because ya know... it's a database. pinging the human who cleans up drafts before they get scheduled is code too. and if the ping fails, `continueOnFailure` says who cares, the newsletter is still done.

## smell two: the prompt is nagging

nagging gets a bad rap. somebody who nags you cares about you. they want you to get the thing done so you hit your goals.

you do the same thing to your llm. look at pretty much any prompt and you'll find stuff like be sure to, double check that, never do xyz. every one of those is you begging the llm to check its own homework while it's still doing the homework.

here's one. you're throwing a taylor swift listening party and you need an invite.

```text
write an invite to our taylor swift listening party
using this event brief.

make sure new fans feel welcome, even if they
don't know the albums.
make sure the date, location, and rsvp are clear.
make it exciting, but don't imply taylor will attend.
```

that's a job for orchestration. pull the nags out and hand them to somebody else.

```ts
const criteria = [
  "welcome new taylor swift fans without assuming album knowledge.",
  "make the date, location, and rsvp instructions easy to find.",
  "build excitement without implying taylor will attend.",
];

const invite = new Workflow({
  strategy: new EvaluatorOptimizer(),
  maxAttempts: 3,
  generate: () => draftInvite(eventBrief),
  evaluate: (state) => reviewInvite(state.candidate, criteria),
  optimize: (state) =>
    reviseInvite(state.candidate, state.evaluation.feedback, eventBrief),
});
```

one llm writes the invite. another one reads it against the list and comes back with a verdict and some notes, like "explain what an era is" or "the rsvp is buried". if it's a no, the writer gets the notes and takes another swing. three swings, then it gives up and tells you.

bad draft? improve it. service down? that's a different problem, stop the loop.

this is where the money shows up. the writer's prompt got shorter. the evaluator can be a cheap little model, or for something like "is the date in there" it can be no model at all. dumb model cheap, cheap good.

## smell three: two chores that never talk to each other

an invitation for taylor just came in. before anybody says yes, somebody has to work out who's involved and whether she's even free.

```text
an invitation for taylor swift just came in.

from the invite list, extract the people involved.
use the lookup_person tool to find out who each one is.

from the schedule notes, extract:
- tour commitments
- football-team events
- travel for football games
- studio sessions
use the check_calendar tool to see if any of them clash.

combine both into an invite brief.
```

the people don't care about the schedule. the schedule doesn't care about the people. so why is one llm doing them back to back while you wait?

and look at those two "use the tool" lines. that's you hoping the model remembers to call the tool, for every person, every time. in a workflow you don't have to hope.

```ts
const parseInvite = new Workflow({
  strategy: new Parallel(),
  steps: [
    code("people", async (state) => {
      const names = await extractPeople(request.inviteList); // llm
      state.people = await lookupPeople(names); // our api. no tool call.
    }),
    code("commitments", async (state) => {
      const dates = await extractCommitments(request.scheduleNotes); // llm
      state.clashes = await checkCalendar(dates, request.date); // our api
    }),
  ],
});
```

both branches kick off at the same time. the people branch pulls the names out of the invite list with an llm, then looks every one of them up through our own api. the commitments branch pulls the dates out of the schedule notes, then checks them against the calendar. neither one waits on the other. when they're both back you've got everything the brief needs, and you only waited for whichever one was slower.

notice nobody asked the model to use a tool. the lookup and the calendar check are plain function calls. they happen every single time because the code says so.

## better, cheaper, faster

that's the whole workflows pitch.

- the to-do list gets you **better**. little prompts that do one thing, with real code holding them together. this one is sequential.
- the nags and reminders get you **cheaper**. evaluations move out of the expensive prompt and into a smaller model or plain code. this one is evaluator-optimizer.
- the two chores get you **faster**. parallel makes sure things that don't depend on each other stop waiting in line.

and they snap together. any one of these can be a single step inside another one.

none of this is mine. anthropic wrote it all down in [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) and you should go read it. they've got two more patterns, routing and orchestrator-workers. those are in [the slides](/slides/building-effective-agents#1) too.

if you got this far, everything is a workflow.
