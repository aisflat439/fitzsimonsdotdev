---
date: "2020-08-01"
title: "Helpful setup function patterns for testing"
description: "My personal pattern for testing. I picked this up from some folks at work and use it all the time now"
revisions: 1
---

## How a setup pattern can simplify testing components

I ran into this pattern at work, and I love it. It makes tests straightforward to read. This way, each test, is only testing one prop at a time, and the setup is ultra-clear. If you're updating a single prop, the test itself declares that. Let's imagine the following component (stolen from the footer of this site but simplified).

The goal will be to have a component that renders three links, and a view more button, or more than 3 links and, a show less button.

```jsx
import React from 'react';

const Footer = ({ links }) => {
  // handles the number of links to show
  const [linksLength, setlinksLength] = React.useState(2);
  // handles the button text
  const buttonText = linksLength === 2 ? 'View more' : 'View less';
  // handles the links to show, if the number > 2 it
  const socialLinks = links.filter((item, index) => index <= socialLength);

  const handleClick = () => {
    setSocialLength(socialLength === links.length ? 2 : links.len)
  }

  return (
      <div>
        <h4>Site Links</h4>
        <ul>
          {socialLinks.map(({ siteLink, siteName }) =>
            (
              <li key={siteLink}>
                <a href={siteLink}>
                  {siteName}
                </a>
              </li>
            ))}
        </ul>
        <button onClick={() => handleClick()}>{buttonText}</button>
      </div>
    )
```

There are a million ways to write that but suppose that's how we did it. I'd write three tests to write for this I think.

- toggles button text between "view more" and "view less"
- three links are rendered by default
- more than three links are rendered on click
- maybe a 4th for no button when there are fewer than 3 links

With the setup function this test looks something like this:

```js
describe('<Footer/>', () => { // this is a style I like just preference
    const setup = overrides => {
      const props = {
      links: ['link-one', 'link-two', 'link-three', 'link-four']
      ...overrides
      }

      const R = render(<Footer {...props}/>)

      return {
      ...R,
      props
    }
  }

  it('toggles button text between "view more" and "view less"', () => {
    const {
      queryByText, getByText, getByRole
    } = setup();

    expect(getByText(/View more/i)).toBeInTheDocument();
    expect(queryByText(/View less/i)).not.toBeInTheDocument();
    userEvent.click(getByRole('button'));
    expect(getByText(/View less/i)).toBeInTheDocument();
    expect(queryByText(/View more/i)).not.toBeInTheDocument();
  })
})
```

Next we handle showing the default.

```jsx
it("shows three links by default", () => {
  const mockLinks = ["One", "Two", "Three", "Four"];
  const { queryByText } = setup({ links: mockLinks });

  expect(queryByText(/Four/i)).not.toBeInTheDocument();
});
```

For me, this test is super clean. I can know everything important about this inside the "it block". Generally, I'm weakly opposed to multiple expects in a block but that case makes sense. I suppose some folks would dislike this next test since it's basically the same. Reasonable arguments could be made about duplication, or perhaps how you don't need to have a test that tests super similar things. I like this test duplication.

```jsx
it("more than three links are rendered on click", () => {
  const mockLinks = ["One", "Two", "Three", "Four"];
  const { queryByText, getByText, getByRole } = setup({ links: mockLinks });

  expect(queryByText(/Four/i)).not.toBeInTheDocument();
  userEvent.click(getByRole("button"));
  expect(getByText(/Four/i)).toBeInTheDocument();
});
```

Look how clean! One thing to note here is that I'm getting by role button. A few months ago I would have used a `getByText(/View more/i)` for that. But suppose marketing decides they want to change that to `Show more`. Your test, for how many links show, fails. It's a little thing, but I think it's nicer. Also, it forces you to make a small react component, rather than some 300 line monstrosity.

If we want, we can add that fourth test (which would fail if we don't fix the example code).

```jsx
it("shows no button when there are fewer than 3 links", () => {
  const mockLinks = ["One", "Two"];
  const { queryByRole } = setup({ links: mockLinks });

  expect(queryByRole("button")).not.toBeInTheDocument();

  // This is also okay I just wouldn't do it now
  // expect(queryByText(/View more/i)).not.toBeInTheDocument();
});
```

This simple little pattern has been helpful for me. I typically write more testable code because of this setup function. I'm glad I learned it and it's useful for me. If it's you're kinda thing, you can use <a href="https://marketplace.visualstudio.com/items?itemName=fitzsimonsdevin.rtl-quick-debug" target="_blank"  rel="noopener noreferrer nofollow">this extension</a>. It's not particularly fancy but I made it to make that easier for myself. Maybe it helps you. Message me if this makes sense or you have some other testing tips. I think testing is probably my favorite part of writing code these days.
