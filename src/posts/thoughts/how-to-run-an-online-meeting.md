---
date: "2020-10-13"
updated: "2020-10-13"
title: "How to run an async online meeting"
slug: "/how-to-run-an-async-online-meeting"
hashtags: ["productivity", "slack", "random", "thoughts"]
---

I really love my job. That said, even great jobs have some peccadillos. At mine, we have an obsession with meetings. If three teams need to work together for an outcome, a meeting is scheduled, unnecessary people attend, and we all sit half focused, looking at someones screen. I assume that half the people in the meeting are checking email, which then let's me quickly check a PR comment on some issue that actually interests me. It's absurd. Meetings are important and necessary however, and when done well, I sometimes enjoy them. Nonetheless, it's probably wise to avoid meetings, especially remote ones, as much as possible. 

I recently needed to run a meeting at for developers. We wanted to look into variety of data loading states, get some understanding of 
what states we're using and report back. This has typically been a meeting, perhaps two, on everyone's calendars. I decided to try an async Slack meeting to see how results would be.

## Step one
#### Find the right people for your meeting

The best way to do this is to ask in a relevant channel for people to sign up for the meeting or small group. So `#development` if it's a developer focused meeting. You don't know who might be interested in joining a meeting, or what expertise they have. Letting people opt in is superior to an invite. There are people who have a ton to contribute that you forgot in your meeting invite. There are also people who will come to your meeting, even though they shouldn't, because you invited them. Let people opt in, your coworkers are really awesome, motivated and smart, they'll work it out.

## Step two
#### Create a channel, explain the plan for the meeting

A channel is better than a group chat for 2 reasons, it can be archived, you can add people later without interrupting flow. Also, because the word meeting is a loaded term, I called the meeting a working group. Sneaky right? My opening message ways effectively:

---

Hello! You’ve all expressed interest in [MEETING TOPIC]. As a clarification, this discussion is not about [OFF TOPIC] but instead [ON TOPIC]. The goal of the working group is to [MEETING GOAL] by [MEETING TIMELINE].

About the working group:

Slack is actually terrible, despite having won the market, but we’ll use it anyway. Try to keep discussion in threads, I’ll try to post questions posed to the group in a way that is conducive to threads. I’ll attempt to work through one topic at a time, as best I can. A topic will “open” then “close”. At the end, we’ll have something to present to the [THE PEOPLE WHO CARE] to [ACHIEVE BUSINESS GOAL]. We’ll use anonymous polls to complete a topic which will hopefully have a minimum of 3 choices. Yes, No, and Continued discussion needed. This group doesn’t preclude meetings, or mean that if you need to hash something out with someone over a call that you shouldn’t do so, but this orients the entire working group towards this chat, and an async workflow.

---

Clearly stating what we are and aren't talking about in a meeting should be part of every meeting for the rest of your life. Thanks for coming to my Ted Talk.

## Step three
#### Liberally use polly

Since we already already had a relatively clear agenda for the working group, the first message in the channel was "OPEN TOPIC: Do you agree these things should be on the agenda: [LIST OF THINGS]" and then a thread emoji. This allowed discussion to immediately fall into a thread if people wanted to add, alter, or comment on the agenda I proposed. An awesome coworker mentioned something we should add, and I replied in the thread, I'll add that to [LIST OF THINGS].

The next day I followed up with a poll that was effectively "The above list represents the agenda". Since the conversation was threaded, and I edited the list, it was quite clear what we we're going to work on. I made the poll anonymous, so that if one person wanted to discuss one more thing, they didn't feel like they were dragging down the group. 

## Step four
#### Lifecycle

Our timeline was long as the meetings findings need not be immediate. As the meeting organizer you'll have to manage this but I'd open a poll for a day or two. If you need something more immediate, maybe set the expectation of 2-4 hours, or eight. Here, some might object, thinking they need faster responses. To that objection I reply... no you don't. Fastest results belong in a phone call. Second fastest results are an email. If you think your issue is immediate, your intuition to schedule a meeting to begin with was wrong. That meeting, should have been an email. Anyway, I'll get off my soapbox, here's the lifecycle messages I sent for each topic. Each bullet point is a slack message, that way conversation can thread.

These are sent one after another
 - CONVERSATION OPEN - Dogs are better than cats
 - Blurb about why dogs are so much better than cats, and the nuance we want to discuss in the thread. :thread-emoji"

Next message, after thread discussion has chilled out
 - LAST CALL - Dogs are better than cats

Poll - once last call is over:
"The group finds that dogs ARE in fact, better than cats." "Agree" "Disagree" "More discussion needed"

I suspect there will be situations where the meeting organizer will need to manage inserting new thread subtopics etc... I haven't personally encountered this yet. I'm hopeful I can figure out how to handle that.

#### Close the topic, pin a document

This is key. I pinned a document with the agreed findings from the above poll to the channel. Anyone could access it and check back to see if something was covered. I'm not sure anyone did, but it was available. I then edited the "LAST CALL" message to "CLOSED TOPIC". Then started the next topic with the next topic (ex: CONVERSATION OPEN - Dogs have the cutest variety of ears).

## Step five
#### Vote on being done, archive the channel

Once we hit all the topics, I posted an anonymous poll to see if everyone was comfortable with our "findings" as found in the pinned document. It worked. It's not the be all and end all solution to every meeting. But it was a step in a direction.  

## Issues I'm working on

There’s still not a great way to provide meeting content anonymously. I suspect there’s a bot out there or something. I’d really like for people to be able to ask questions, say things that may be counterintuitive or very challenging to the groups expectations. There’s a bunch of introverts in your meetings that have a lot to contribute. Less friction for them means better results for you!

I am unsure if this works for a 48 hour turn around on 3+ topics, probably [MEETING ORGANIZER] should have sent an email or planned ahead.

I’m unclear on how clarity checks within the group for information work, perhaps a special thread. How can [COWORKER] ask [OTHER COWORKER] if the endpoint will be live on Wednesday? Then how does the whole meeting find out. I’m thinking a special message type like “FINDING - [COWORKER] says dog gifs will be live Wednesday! :thread-emoji:” I’m still kicking this around.

I’d really like to see how handling several topics simultaneously works. I’ll try it next time I have a meeting to run. I think it would be, more valuable generally.

I’m unsure what days of the week this approach is best for. I have an intuition that this type of meeting will be most effective, Thursday -> Monday night. That way people’s best deep work days are more focused. It would also be awesome to make any messages for these meetings show up at 9am and after 3pm somehow, I’m not sure what that looks like.
