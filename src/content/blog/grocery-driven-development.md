---
date: "2024-03-24"
description: "What looking away from Agile and how we currently think about building software might look like."
revisions: 1
title: "Grocery Driven Development"
updated: "2024-03-24"
---

Around the year 2000, the experience of walking into a Whole Foods Market was markedly different from entering your local grocery store. Whole Foods eventually sold for $13 billion. If this had been a tech company growing, finding product-market fit, scaling, and selling, the tech world would be ablaze, discussing how their management style spurred this tremendous success. However, the insights from operating a wildly successful grocery store haven't permeated the tech industry. Despite the success coming from a hyper-competitive, low-margin sector, tech continues to prioritize a MBA-first approach, leveraging data, agile methodologies, cross-functional teams, and constant reporting, rather than empowering local teams to do the work. The tech industry moves fast—Web 2.0, Rails, and later React each took the industry by storm. Yet, we predominantly cling to Agile as the framework for running our companies and developing features.

## Tech isn't organic

"Technology isn't groceries," your data analyst may object. "We need Agile because of the twelve principles..." your scrum master or Agile coach might say. Meanwhile, as they collect their six-figure salaries, a 22-year-old is figuring out how to merchandise yogurt to eke out an extra 1% in sales right now for $18 an hour. Maybe they went to college, possibly for Art History, and they might have even finished. Yet, they still possess an intuitive understanding of how to grow a key metric like sales, especially when success could mean receiving a bonus.

The great myth of the tech industry is its perceived uniqueness. It indeed was unique when the Agile Manifesto was penned in 2001. At that time, software delivery was often a one-off event, unlike today's continuous updates facilitated by the web. This historical backdrop is essential for understanding the evolution. Nowadays, it's likely that software users have interacted with various applications previously. They might have used a different CRM or ERP system but are acquainted with the basics. Software has seamlessly integrated into our lives to such an extent that it often goes unnoticed. This has shifted the benchmark for software from merely functioning to being of good quality.

"Good" encompasses a spectrum. Walmart is good; Whole Foods is good; even the grocer around the corner is good. Each understands its identity, similar to entities within web technology. In this comparison, Automattic could be seen as Walmart, quietly amassing significant profits and powering around 40% of the web. Netflix, akin to Whole Foods pre-acquisition, faces challenges in a competitive industry despite once having a considerable lead. Nonetheless, these companies have become staples, with customers choosing what best suits them. Your workplace is striving to emulate one of these models - Whole Foods, Walmart, or the local grocery store, each presenting a unique value proposition. It might be aiming for a sleek and modern vibe or perhaps something straightforward and universally accessible.

This suggests that, akin to our preferred grocery stores, it's possible to bypass the facade of maintaining numerous idiosyncratic layers and squandering time on "data-driven insights."

## We're not just putting things on a shelf

Yes you are. The era of generic SaaS has arrived. Almost everyone has interacted with a software product by now. Your customers are technologically savvy; they grasp the concepts of drag and drop and workflows. They are familiar with terms like CSV and integration. Sure, they may not be able to create these elements, and at times, they might still find themselves perplexed. However, they understand the basics of software.

When I developed my first, admittedly subpar, SaaS product for the comic book industry, every customer I spoke with instantly comprehended how the app functioned. Their requests were direct and unambiguous. There was no need for me to educate them. Some features I implemented were superfluous. For instance, they opted to share a single password for the app. Perhaps improving the onboarding process to facilitate user creation would have been wise, but it was not a concern for them, and my focus was on developing features they valued. Comic book shop owners might not be technical experts, but living in 2024, they are far more adept than many tech professionals assume.

I simply placed the application on the shelf. They utilized it, trained their employees, and immediately derived value from it, then swiftly shifted their focus to other aspects of their business. This sets the standard for software today. It's akin to shopping for tomato sauce at the grocery store, where you expect to find both a budget-friendly generic option and a premium organic choice that tells the farmer's story on its label.

## The software you're building is probably Prego

If I were to short a tomato sauce brand, it would be Prego. It doesn't matter to consumers whether it's Prego or a competitor; what they care about is the $0.99 instant coupon. If the coupon doesn't interest them, they're either inclined to make their own sauce or purchase a high-end product, like Rao's Homemade. The software industry now finds itself in a similar situation to the grocery store sector, which has seen undifferentiated brands for the past 75 years, where ease of access generally represents the product's most significant value.

Don't believe me? Consider Slack versus Teams. Until recently, Slack was objectively superior; now, it's merely better. However, a company in need of chat software will settle for Teams because it's adequate. It's the Prego of chat software, as is Slack. A decade ago, Slack was a distinct differentiator; today, what's needed is merely effective chat software. Companies are now exploring Discord or Campfire because, frankly, only two or three features on Slack truly matter. The rest is superfluous.

Consider the vast number of people working on Slack—it's excessive. I'd argue that a team of 10 could build a superior version of the same product. They're engaged in A/B testing, click tracking, creating feature flags, and conducting extensive "user research." They earn $200,000 a year to interview customers, coordinate developers, generate documentation, and write Jira tickets. And what's the end result? They botched the redesign, and it's atrocious. However, the redesign's failure isn't the critical issue.

The poorly received new Slack redesign won't change the landscape. Those contemplating leaving Slack for Discord will likely proceed. No one will switch to Teams because of it. Why? Because the category remains undifferentiated.

## I need parmesean cheese

There are three optimal choices:

1. Go to Walmart or Target and pick up some cheese in a green bottle, maybe grab a bag too if you're feeling fancy.
2. Visit a nicer grocery store and buy a block of cheese or perhaps something grated.
3. Opt for the Cheese Monger at a specialty cheese shop, though a Whole Foods type of grocery will suffice.

The highest-end experience, the cheese monger, has never engaged in A/B testing their products. They don't run numerous data tests or collect metrics beyond the basic question of whether this is working. So, what does "is this working" mean in the context of a cheese monger? Ideally, it boils down to one thing: does this product justify its presence on the shelf by paying for itself? Sometimes, certain products are carried due to ancillary needs, such as the store manager's personal preference.

## Overlaying grocery store management onto tech

Grocery stores are broken into departments. Apps a frequently built in a simnilar manner. A web app might have a team dedicated to onboarding and another dedicated to integrations. A grocery store works similarly. There's a Frontend team. They manage checkout, returns and incoming phone calls. And a dairy team. That manages the Dairy Box. There's frequently occasional weird overlaps. An example would be ricotta cheese. This could be managed by the cheese department, the dairy team and sometimes both.
