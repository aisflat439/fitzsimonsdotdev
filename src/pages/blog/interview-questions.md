---
date: "2022-12-29"
updated: "2023-01-09"
layout: ../../layouts/BlogLayout.astro
title: "Interview Questions"
hashtags: ["hiring", "interviews"]
description: "I'm pretty godawful at interviewing. One path to improvement is to write my answer to some common interview questions. In theory, this practice will help my answers in real time be a little more structured."
revisions: 3
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

I used dependency injection when copy paste would have been a superior solution. I try to use AHA ([Avoid Hasty Abstractions](https://kentcdodds.com/blog/aha-programming])) programming as a sensible default. For this project we had three different business domains that all shared a contract view. Once in that view, the logic got complex. To untangle it all, I picked a state machine library. This would allow the team to understand what was happening in the codebase a lot easier. More importantly, state machines are an excellent tool for communicating with business, design and product stakeholders. The team had received a lot of bugs in this area of the codebase. The majority of these bugs were because the communication around what domain used what rules needed more detail. My hope was that using state charts would solve the business -> developer communication along with helping the team understand a complex area in the codebase.

What I did was write a function that spawned a state machine, injecting the rules for the current business domain in context. This was an acceptable solution. But it was clearly a second best solution in hindsight.

What I failed to think through was that state machines are new to most engineers, especially on the front end. What I should have done was used three machines, one for each business domain and accepted the code duplication. This would have made machines that were easier to understand. Kept business rules isolated by domain and allowed for examples of state machines that were easy to understand. This would have allowed for state machines to spread more naturally throughout the organization.

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

For me, it's pair programming. I enjoy pairing with developers of all skill levels. Pairing with newer developers is fun. It teaches me how to communicate, think quickly and clearly explain why I like a solution or idea. Pairing with more seasoned developers frequently ends up in TDD or ping-pong-style pairing. Falling into a ping-pong rhythm with another developer is one of the best flow experiences. Often, pairing with more senior folks ends up with a Miro board or Excalidraw open so we can explore possible solutions or architectures.

One of my favorite things about pairing is that it's the most natural way to teach each other tools and productivity tips. I liberally use multi-cursor which frequently blows a junior developer's mind. Just recently, from another senior engineer, I learned about Thunder Client as a Postman alternative. It's right in your editor. Delightful!

Pairing also has the benefit of building strong relationships between developers and teams. It normalizes knowledge sharing. Especially with the expansion of remote work, I'm excited to see more companies and teams get comfortable pairing.

### You've been contracted to design a system for a parking garage that shows how many spaces are available.

Before starting there are a few questions that I'd need to answer. The first thing I'd want to know is whether there are types of spaces. I'm familiar with garages that have long-term, resident, and short-term spaces. This would help me plan for future changes to my schema. Next, I'd want to know about expansion for the garage, as well as space type. It's important to understand how the number and space type may change over time. I'd also need to know how this information should be displayed and consumed. Do I have a visual interface like a light board, or do I have an API that I need to respond to, like SomeParkingApp.com? Finally, I'd want to know about the pricing for parking spaces. Do I need to consider parking rates, free days, size of vehicle hours, and so on?

I like a queue or event bus for this application. Mostly, nothing is happening in a parking garage, but we can't miss any parking events so serverless makes a lot of sense here. No need to run a server constantly when it's only used when parking starts or ends. If we're using a queue or event bus we can easily add subscribers to events like PARKING_START and PARKING_END. That way if in the future we want an analytics service to determine the most popular parking times, it's straightforward.

For a quick solution to the problem, parking spots are essentially a fixed-size array. Each slot might hold an object including vehicle type, license plate, and time parking started for example. For a query like, how many spots are available, we can just find empty slots in the array. Something else we might need is the total price for a parking event. We can look up the vehicle by its UUID (license plate) and then send the information to the payment service. In this case, I'm considering type (maybe a large pickup truck costs more) and start time. The service can calculate pricing based on the rules it has and return that to the checkout. Once payment is complete, we'd fire an event back to the parking spot service to remove that vehicle from the array.

### Is there a process or workflow you wouldn’t automate? Why?

### “Talk to us about testing in software or IaC

### How much hands-on work have you done working on pipelines and software delivery, or pipelines for infrastructure creation?

### Tell me about a project where you had to automate its deployment to AWS…

### Tell us about something that was really hard to automate (anywhere, not just AWS)

### Do you have a strong opinion about code branches and deployment strategies?

### Tell me about a time when you had to learn a new tool, language or skill?

### Provide some examples of resources that you’ve provided for others in the development community and/or within companies in which you worked (e.g. blog posts/articles, open source projects/contributions, podcasts, internal company talks, conferences, etc.)

### Tell me about a time when you’ve worked with a difficult customer or client?
