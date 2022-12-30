---
date: "2022-12-29"
updated: "2022-12-29"
layout: ../../layouts/BlogLayout.astro
title: "Interview Questions"
hashtags: ["hiring", "interviews"]
description: "I'm pretty godawful at interviewing. One path to improvement is to write my answer to some common interview questions. In theory, this practice will help my answers in real time be a little more structured."
revisions: 2
---

What follows are a series of interview questions that I crowd sourced and my answers. I don't expect that these questions would be asked in 100% of interviews. Rather, I expect that thinking through my answers to these questions will allow me to have more useful answers over time. Additionally, if I feel like an answer performed poorly in an interview, I can reassess these answers and look to say something more meaningful. One hope is that I'll be able to use the structure of these answers to help me when I'm asked something that falls out of the bounds of what I've considered in advance.

---

#### List of questions:

- [How did you get here](#who-would-you-credit-for-helping-you-get-to-where-you-are-now)
- [Mediate a conflict](can-you-tell-us-about-a-time-you-ve-had-to-mediate-a-conflict-in-your-team)
- [Helping without being asked](tell-us-about-a-recent-time-where-you-helped-somebody-at-work-without-being-asked)
- [Personal ownership](can-you-talk-to-us-about-a-project-or-piece-of-work-where-you-feel-you-demonstrated-significant-personal-ownership)
- [Bad decision](can-you-tell-us-about-a-time-you-made-a-bad-decision-at-work)
- [Self improvement](what-have-you-done-to-improve-yourself-in-the-past-year)
- [Work improvement](can-you-tell-us-about-something-you-ve-taken-on-and-improved-at-your-work)
- [Constructive criticism](what-is-one-piece-of-really-valuable-constructive-feedback-you-have-received)
- [Outside your comfort zone](can-you-tell-us-about-a-time-when-you-felt-you-were-working-outside-of-your-comfort-zone)
- [Pushing yourself](can-you-tell-us-about-a-time-when-you-or-your-team-had-to-push-yourself-to-reach-a-goal)
- [Stress](what-causes-you-stress-negative-feelings-at-work)
- [Positivity](what-gives-you-positive-energy-at-work)
- [Parking Spaces](you-ve-been-contracted-to-design-a-system-for-a-parking-garage-that-shows-how-many-spaces-are-available)
- [Automation](is-there-a-process-or-workflow-you-wouldn-t-automate-why)
- [Testing](talk-to-us-about-testing-in-software-or-ia-c)
- [Pipelines](how-much-hands-on-work-have-you-done-working-on-pipelines-and-software-delivery-or-pipelines-for-infrastructure-creation)
- [AWS Deployment](tell-me-about-a-project-where-you-had-to-automate-its-deployment-to-aws)
- [Hard things to automate](tell-us-about-something-that-was-really-hard-to-automate-anywhere-not-just-aws)
- [Branching](do-you-have-a-strong-opinion-about-code-branches-and-deployment-strategies)
- [Learning a new skill](tell-me-about-a-time-when-you-had-to-learn-a-new-tool-language-or-skill)
- [Resource creation](provide-some-examples-of-resources-that-you-ve-provided-for-others-in-the-development-community-and-or-within-companies-in-which-you-worked-e-g-blog-posts-articles-open-source-projects)
- [Difficult customers](tell-me-about-a-time-when-you-ve-worked-with-a-difficult-customer-or-client)

---

### Who would you credit for helping you get to where you are now?

### Can you tell us about a time you’ve had to mediate a conflict in your team?

### Tell us about a recent time where you helped somebody at work without being asked?

When I joined [MEGA_CORP], the React project was quite a few versions behind. The React team chose to deprecate Enzyme in favor of React Testing Library in React 16. Enzyme tests have a few disadvantages to RTL (React Testing Library). They're more verbose. It's easy to make a brittle test as they lend themselves to testing internals, rather than UI. Of course, they're also deprecated and will need to be rewritten.

It was in my first week when I found this out. I DM'd the lead and asked if I could install the needed libraries for RTL. He said sure, as long as I can get everything to work with the existing app. Luckily, That was extremely straightforward. I quickly wrote the tests and presented a draft PR to the team. In the PR, I highlighted a couple of the things that I'd done. I then offered via DM to host a quick walk-through of how RTL works if anyone wanted.

I left out my opinions about never writing deprecated code and how to evolve a codebase from Enzyme to RTL. I was brand new to the team. It seemed to me, given the state of the codebase and the fact that I didn't yet know the goals of the project, that setting a decent pattern that could be copy-pasted and making myself open for questions and a presentation would be the ideal level of impact.

### Can you talk to us about a project or piece of work where you feel you demonstrated significant personal ownership?

### Can you tell us about a time you made a bad decision at work?

### What have you done to improve yourself in the past year?

My most effective strategy for self-improvement is flashcard usage. I use Anki which is a spaced repetition flashcard application. I primarily use it for 3 kinds of flash cards.

- Productivity
- Code patterns
- Concepts I want to recall

Productivity is the most straightforward. When I encounter a shortcut, VSCode extension, or tool for a task, I'll make flashcards to learn it. The current one is actually from Emmet. When I want to wrap some text in HTML. Copy selection, access the command palette, type wrap, hit enter, then the tag you want (span, p, etc..). This comes in handy. The flash card was super quick to learn. But, spaced repetition will keep it top of mind until it's muscle memory.

Code patterns are a little more nuanced. I pretty regularly do code puzzles, think LeetCode, but not the hard problems. Generally, those patterns aren't practical for my everyday work, but they come in handy. A recent one is to get all possible pairs from `[2,4,6,8]`. This is straightforward. When I solve that in the code puzzle (or look it up after stumbling over it), I'll drop it on a flash card. Sometimes, I'll remember the exact code snippet when I encounter that problem in real life. Usually, I'll only recall that what I want is to slice the array and use the index to make the pair. So I'll have a starting point. That fuzzy memory helps a lot.

Concepts I want to recall can be pretty broad. A decent example of this would be studying for the AWS Cloud Certified Practitioner exam. I also have decks that are more philosophical or personal as well.

### Can you tell us about something you’ve taken on and improved at your work?

### What is one piece of really valuable constructive feedback you have received?

### Can you tell us about a time when you felt you were working outside of your comfort zone?

### Can you tell us about a time when you or your team had to push yourself to reach a goal?

### What causes you stress/negative feelings at work?

### What gives you positive energy at work?

### You've been contracted to design a system for a parking garage that shows how many spaces are available.

### Is there a process or workflow you wouldn’t automate? Why?

### “Talk to us about testing in software or IaC

### How much hands-on work have you done working on pipelines and software delivery, or pipelines for infrastructure creation?

### Tell me about a project where you had to automate its deployment to AWS…

### Tell us about something that was really hard to automate (anywhere, not just AWS)

### Do you have a strong opinion about code branches and deployment strategies?

### Tell me about a time when you had to learn a new tool, language or skill?

### Provide some examples of resources that you’ve provided for others in the development community and/or within companies in which you worked (e.g. blog posts/articles, open source projects/contributions, podcasts, internal company talks, conferences, etc.)

### Tell me about a time when you’ve worked with a difficult customer or client?
