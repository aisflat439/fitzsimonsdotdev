---
date: "2025-11-18"
title: "Constraints are good (for velocity)"
hashtags: ["product"]
description: "I don't believe acceptance criteria are useful. Kind of a hot take..."
revisions: 0
---

I don't believe acceptance criteria are useful. Kind of a hot take. Let's walk through it.

What would need to be true to not have acceptance criteria? 

_i know this headline is constraints are good for velocity bear with me_

An app would have to have the following patterns locked down. 

- Lists and list items.
- Create, update and delete of those items
- when modals, toasts and menus are used 
- what navigation rules exist 
- how filtering works
- form handling (validation, save etc ...)
- information display via pages and outlets 
- grids, cards and ctas
- eventing 
- notifications

If the above are true your acceptance criteria becomes we want to expose a new feature to customers. But mostly, that's not what acceptance criteria looks like. Why?

Because of lack of constraints! Each feature is a beautiful unique snowflake that deserves special treatment. In this case we use a modal because XYZ but in this case we use a route because of a ABC. 

So we code around all these situations. Creating a ball of mud that moves slower and slower over time. 

When these decisions are premade we aren't constantly handling novel situations and can move quickly. It's an incredible constraint however. We're demanding that we think of features that fit within our applications patterns. 

A friend of mine calls this product architecture. How our application works. This is different from a design system but relates. The constraint here lands on how we deliver features, rather than how they look. 

I like this concept and have had these moments when a new feature "just works". When that happens is almost always because the patterns already exist.

Redesigns are easier! It's clear what a redesigned part of the architecture needs. The interface is documented and we can just replace the old pattern with the new pattern.