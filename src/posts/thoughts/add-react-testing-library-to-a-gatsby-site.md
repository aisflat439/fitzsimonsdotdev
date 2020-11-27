---
date: "2020-03-12"
updated: "2020-11-26"
title: "Add React Testing Library to a Gatsby site"
slug: "/add-react-testing-library-to-a-gatsby-site"
hashtags: ["tutorial", "testing", "react", "gatsby"]
---

## Goal

Take a plain gatsby site and add react testing library to it.

## Prerequisites

- Gatsby CLI
- Node
- Yarn

### Step One

Create a gatsby site named reactTestingGatsby using `gatsby new reactTestingGatsby`. Change into that directory `cd reactTestingGatsby` and run `gatsby develop`. Your site should work. If not, go back. Now you'll need to add a couple of packages. Because we don't them in the final build, these will all be added as dev dependencies.

Here they are broken out:
```bash
yarn add jest --dev
yarn add @testing-library/react --dev
yarn add @testing-library/jest-dom --dev
yarn add react-test-renderer --dev
```
or as one line
```bash
yarn add jest @testing-library/react @testing-library/jest-dom react-test-renderer
```

This adds Jest, Testing Library (usually referred to as React Testing Library or RTL) for react and jest, and `react-test-renderer`. Frankly, I have no idea what the last one does. I imagine it links Jest and RTL so things "just work". But, so you know, the thing about testing is that it seldom just works. That's kinda the point.

### Step Two: Fail some tests!

This won't work, so you know in advance. Like I just said, the thing about testing is that it seldom just works. There's lots of little things in testing that are tricky and sort of strange. That's actually good. It makes you a better developer and makes the code you write better. It definitely takes a certain mental attitude however, so prepare for that. I've been fortunate to work with some smart people who have that attitude and it's rubbed off (thanks Jacob).

We have to run the tests right? We can run all the tests with `jest --watch`. It watches for changes in your files and runs the tests on a change. Jest will find any file in your project that has the extension `.spec.js` and run the tests inside it. This way, you know right away when you break stuff. Pretty handy. Even though this won't work, open the terminal and run `yarn jest --watch`. Hopefully you'll see something that looks like a little menu of single letter options. Press `a` to run all the tests and watch as it fails. Look for the error:

```bash
Jest encountered an unexpected token
``` 
The next message explains roughly what's happening. You're trying to parse something that's not JavaScript. React isn't Javascript. You need to transpile it all in order to make just Javascript. If you're anything like me you forget that all the time. 

### Step Three: Add some more configuration

First we need jest to babel-ify our files. Let's run

```bash
yarn add babel-jest --dev
```

in our terminal and try again (it should still fail). Read the errors again. You should find some that talk about babel not being found, polyfills and things not being transformed. You want to read those errors. Basically, they're trying to encourage you to configure Jest. It's pretty straightforward to do. Add a `jest.config.js` and a `jest-preprocess.js` to your site with the following code in each:

```js
// jest-preprocess.js
const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
```

```js
// jest.config.js
module.exports = {
    transform: {
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": 
      `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  }
```

Let's read through these files. First, `jest-preprocess.js`. It sets a preset option of Gatsby on babel and exports it. In order to use it however, we need to add the `babel-preset-gatsby` package.

```
yarn add babel-preset-gatsby --dev
```

The next file (`jest.config.js`) configures jest by exporting an object. First, we declare a `transform` and reference the `jest-preprocess.js` file we just created. Then, we map some module names in `moduleNameMapper`. There's something interesting to take note of here. Specifically read, `<rootDir>/__mocks__/file-mock.js`. That's mocking all the file types (`woff2`, `mp3`, etc...) that you see there. When Jest is rendering your site for testing, you don't want it to make images, music files and such. Otherwise, it will take forever to run. So this is going to see those file extensions, and then fake the response. Testing folks call that mocking. It's a super important concept in testing. If your application is small, probably doesn't matter. But the larger it gets the more speed in your testing suite matters. Let's add that file, in that folder and mock some files. One line is all it takes.

```js
// reactTestingGatsby/__mocks__/file-mocks.js
module.exports = "test-file-stub"
```

Now when a file is found by Jest when it's building your site it will respond with the string "test-file-stub" rather than a PNG or JPEG. Next we ignore `nodemodules`, which makes sense, we don't want to test other packages. We then also ignore transpiling them as well. The next line `globals`, adds a global path prefix. Then we add a `testURL`. The last two key value pairs in our `jest-config.js` require some files. We  need a `setupFiles` and a `setupFilesAfterEnv`. Start with `loadershim.js`.

```js
// loadershim.js
global.___loader = {
    enqueue: jest.fn(),
  }
```

This sets enqueue to return a jest.fn(). A jest function is a special kind of function that doesn't return anything. You can however, get information about it, like number of times the function is called. Next add a `setup-test-env.js`. This does exactly what it sounds like. After the test environment is set up, we add testing library, and extend expect.

```js
// setup-test-env.js
import "@testing-library/jest-dom/extend-expect"
```

### Step Four: Write some tests that fail

Maybe our jest suite runs now. Open the terminal and run 

```bash
yarn jest --watch
``` 

and see if it works! If everything is going right, you should have no tests to run. That's a great sign. It means that it scanned your project for files with `.spec.js` extensions and didn't find any. We're almost there on configuring Gatsby for RTL. Let's create a test and see what errors we get.

```jsx
// pages/index.spec.js
describe("<IndexPage />", () => {
  it("works", () => {
    expect(1).toBe(1)
  })
})
```

If you run your tests, you should have errors around identity-obj-proxy. This error is confusing but google helps if you search for it you'll find it's a package. add it with 

```bash
yarn add identity-obj-proxy --dev
```

 I've no idea what it does. However, if you run:
 ```bash
 yarn jest --watch
 ```
 you should now see your test works! It's quite annoying to write that test command each time, I generally put that in my `package.json` as test so I can instead run `yarn test`. I'd suggest you do the same. Then, lets update out test to validate that "Hi people!" shows up on the IndexPage, spoiler alert, it won't work.

```jsx
// pages/index.spec.js
import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "."

describe("<IndexPage />", () => {
  it("renders an H1 with the expected text", () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText('Hi people!')).toBeInTheDocument()
  })
})
```

### Step Five: Mocking some values

This fails with a pretty helpful message about how Gatsby is misconfigured and `Layout` is having issues with GraphQl. Take a look at `index.js`, that calls `<Layout />` which in turn has a graphql query. We'll that's not at all something we care about. We're only trying to test that there is an H1 on the page with "Hi people!" in it. What we want, is to not actually render what is inside `<Layout />` and instead just assume that Layout works as expected. This is exactly why mocking exists. We have a little experience with it from earlier. This time, we're going to mock the layout component, but render it's contents.

```jsx
// pages/index.spec.js
import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "."

jest.mock("../components/layout", () => ({ children }) => <div>{children}</div>)

describe("<IndexPage />", () => {
  it("renders an H1 with the expected text", () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText('Hi people!')).toBeInTheDocument()
  })
})
```

If you run the tests again, you should have a new failure message that looks super similar. This time about `<Image />`. This mock is a little different. We don't need to render the children of `<Image />`. Really any image will do. You should see the same error with `<SEO />` if you scroll some and read still more errors. We might want either of both of these components to be tested, but in their own components, not in the `IndexPage` file. Generally, we shouldn't test components we're importing, they should be tested on their own. This is a called unit testing and it takes some getting used to. We'll have both image and seo return their strings instead.

```jsx
// pages/index.spec.js
import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "."

jest.mock("../components/layout", () => ({ children }) => <div>{children}</div>)
jest.mock("../components/image", () => () => 'Image')
jest.mock("../components/seo", () => () => 'Seo')

describe("<IndexPage />", () => {
  it("renders an H1 with the expected text", () => {
    const { getByText } = render(<IndexPage />)        
    expect(getByText('Hi people!')).toBeInTheDocument()
  })
})
```

Success!! We have now validated that "Hi people" shows up on the homepage. Our tests pass. Add React Testing Library as a skill to your LinkedIn and start ignoring recruiters!

### Step Six: Grab the repo

I've added a repo for this so you can look at the final result should you need it. 

Visit [the repo on my github](https://github.com/aisflat439/reactTestingGatsby) or shoot me a message if you need something or have questions.
