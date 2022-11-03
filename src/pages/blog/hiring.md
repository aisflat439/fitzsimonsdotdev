---
layout: ../../layouts/BlogLayout.astro
title: "On hiring"
hashtags: ["hiring"]
description: "I've been thinking about hiring."
revisions: 3
---

I have a lot of problems with how hiring works for developers. My biggest problem with the process is that companies don't actually want to hire developers. The process reflects this.

As an observation, there's a lot of thinking that's been done about how to make choices. [The secretary problem](https://en.wikipedia.org/wiki/Secretary_problem) is one that I like. Here's my understanding of how it works. If you're hiring a secretary, and you have 100 candidates, the theoretical "best way" to hire, is to do 37 interviews, scoring each prospect but refusing to hire each of these potential prospects. Then, you hire the next prospect that exceeds the best score.

Statistically, this works. There's a bunch of handwaving I don't really understand here, including something about Euler's number however, the lesson seems pretty clear. Generally, with a prospect pool of 100, you can work through a small subset, get a sense of what the near top of the skill level is, then just take the next person that exceeds that score. Rarely, you'll end up hiring prospect 100 and even then, they'll be in the 40-60% range a good bit of the time. The rest of the time, you'll be getting a very high-quality prospect. Maybe even the Statistically best one.

### The problems with this approach are:

- you don't know how to measure developers (I'm skeptical you know how to measure modern secretaries, but it was more straightforward in the era that this idea was considered)
- you're not willing to pay for the best
- you don't need the "best"
- you don't actually have 100 candidates
- your need is immediate, you don't have time to evaluate 100 people
- you can't afford to evaluate 37+ candidates

Using the secretary problem to guide our solution here, not gonna do a lot of good. What's next? Next is the Penelope solution (this is what most companies seem to do).

When Odysseus is off fighting the trojan war (which takes like 10 years or something) suitors start showing up at Penelope's. They're trying to work their way in. She's a queen so like... people wanna marry her and get that queen's money. She loves Odysseus and knows in her heart that he's not dead. Meanwhile, these suitors pile up. Like 108 of them or something. Ancient Greeks were a wild bunch. Anyway, they're all living in his house, trying to marry his wife. She comes up with various excuses not to marry one of them. She makes this shroud (which I think is like a big blanket) and then unweaves it every night to delay marriage. Also, she may enjoy all this attention from these suitors, that's a possibility. Finally, after she can't put it off anymore she comes up with this wild test. Whichever suitor can use Odysseus' bow and shoot a crazy shot through a dozen axes. Turns out Odysseus is there, dressed as a beggar, and he's the only one who can even string the bow (he's the mythical 10x developer). He murders all the potential suitors and Odysseus and Penelope live happily ever after.

From my perspective, this is the hiring plan for most companies. In this analogy, Penelope's strategies are like the shroud. If you pass all the goofy requirements in the job posting, five years of experience in a framework that's existed for three years, you're then presented with an absurd test. I'm currently practicing my skills with Linked Lists. I pretty much only do javascript, React, and CRUD at that, where you seldom need linked lists. The same goes for most data structures. Asking these questions is effectively asking "shoot an arrow from this impossible-to-string bow through these axes".

As a quick note, there's tremendous filtering value here. Demanding your candidates know Linked Lists and other Algorithms does have value. You're self-sorting to the candidates who either know this information or are willing to learn this information. That's valuable.

Right now you might be thinking the Penelope strategy is a good one! Here are the problems with this strategy from a business perspective.

### The problems with this approach are:

- you don't have 10 years, the best candidates don't need you, you need them.
- you're not willing to pay for the best
- you don't need the "best"
- your need is immediate, you don't have time
- you don't actually shoot arrows through axes and you don't use linked lists
- in the above story the 10x developer literally kills all the other suitors

Probably, you're just making a button blue on the internet or maybe building a dashboard. Perhaps, you're building an event bus and a dead letter queue. Either way, mostly what you're doing is building stuff that already exists. You probably need more people who will be conscientious, careful, hardworking, and focused. I'd wager you need friendly, thoughtful, and hardworking way more than Linked Lists, Stacks, and Depth First Search.

Okay, so I've made a case that what matters is soft skills, far more than hard development skills. What evidence do I have to prove my case?

Agile. Agile is the evidence. We can set aside my thoughts about Agile for now and instead look at what problem it is trying to solve. In the Agile Manifesto we:

- value individuals and interactions over processes and tools
- working software over comprehensive docs
- customer collaboration over contract negotiation
- Responding to change over following a plan

The third item doesn't really apply to software developers day to day. That is to say, it's not something you'd want to optimize your hiring process around selecting. Individuals over processes? That sounds like soft skills. Working software over docs? Sounds like someone who finishes things, not someone who is super skilled at Algorithms. Responding to change over plans? Again, this is an attitude much more than a skill set. Companies routinely set huge sums of money on fire trying to be agile. But their hiring process is designed to select people who are, by the selection process, not Agile.

### What's the alternative?

I'd say it's Tyler Cowen. Tyler Cowen is smarter than you. He's smarter than me. He's got a venture capital fund. His decision process is based on a conversation. For his venture fund, he bets that having a conversation with a person is a great indicator to find out if they're a good bet. I agree, only in part because Tyler is heaps smarter than me. I'm suggesting that a simple conversation and some reference checks would be far superior to almost every hiring process for developers.

Comparison of conversation vs traditional multi-stage code-laden interviews.
Time:
Conversation is much faster
Effort:
Tough... conversation means you need people who are hiring to be capable of having conversations. It's probably closer than I'd like to think because probably, you don't have that person on staff. But, if you don't have that person on staff, you already suck at hiring.
Outcome:
Even google says they don't know how to identify and measure candidates so I'll call this a push

Risks with the conversational approach
You're probably likely to hire people who are good at verbal communication
You're unlikely to hire those who aren't

#### Additional burden

Conversational interviewing, should, by its very nature, yield some false positives. Some people are very good salespeople. You'll need to check references. Companies don't really do that. As a result, this will be new work. Also, you'll need to let people go when you hire the wrong candidate. Companies are also very bad at this. Mostly, people hate confrontation. You'll need to, instead of spending huge effort on every candidate interview, spend actual effort ensuring that you have good onboarding. Once you identify someone who can't do the work, you'll need to let them go. That means you'll actually need to do it. Mostly, companies are bad at this too.

#### Additional benefit

Because of the drawbacks of conversational interviewing, your company will get good at the following:

- onboarding
- having difficult conversations
- letting go of poor performers
- checking references

Your company should be good at that anyway. Based on my experiences onboarding and working at a few companies, this is not true currently.
