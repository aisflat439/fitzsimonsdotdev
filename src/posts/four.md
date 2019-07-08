# Setting up users with Netlify

I decided to set up users for [DailyProgrammerIO](https://www.dailyprogrammer.io/). It was quite straightforward using Netlify Identity. The [Netlify portion](https://www.netlify.com/docs/identity/) was basically just clicking a few options. Then you have to access that newly provided information. I fumbled through using [Netlify Identity Widget](https://github.com/sw-yx/react-netlify-identity-widget) and referencing [this video](https://www.youtube.com/watch?v=vrSoLMmQ46k&t=123s). I'm pretty sure all this stuff is expecting a savvier more experienced developer. When I have some time this week I'm going to try using `gatsby-netlify-identity` and posting an issue because at the time I tried I don't think the instructions made that very understandable.

## Moving forward

Next up is adding email an email sign up list. I was considering using Mailchimp or something but instead I'm going to just add emails to a google sheet with a react form and then just use a google doc to send emails. For now, that's the minimum solution I think, should be good enough.