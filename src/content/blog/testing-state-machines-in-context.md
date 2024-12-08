---
date: "2021-12-07"
updated: "2021-12-07"
title: "Testing state machines when loading from context"
hashtags: ["testing", "intermediate", "x-state", "jest"]
description: "I was working with useActor for the first time and needed to force some state to write some tests."
revisions: 3
---

## Testing services from context in XState

<a href="#complete-example">Jump to example</a>

I'm using <a href="https://xstate.js.org/docs/" target="_blank">XState</a> these days for personal projects. I've also been advocating it's usage at work for an extremely complex form. XState is super cool and I'm really enjoying learning and working with it. For whatever reason, the patterns make more intuitive sense to me than something like Redux. For my side project, I'm trying using some similar patterns that I might implement at work. This allows me to test out potential patterns, which is great! The downside is that occasionally, I end up using a pattern that's slightly more complex just because I know that I'll need to cover that scenario at work. In this case, it's a test but I learned how to handle testing some state from a parent context in React. It's pretty cool!

One tremendous advantage of XState is that it has a very active community. The discord bops. There's a lot of chatter, they have weekly office hours... all in all, if you're looking to pick up a state library, it seems pretty smart to pick this one.

For the setup, let's imagine an app that stores Customers in a database and when you visit `/customers` you have a list of where you can do lots of actions on those customers, like send a message, assign them a subscription, create a customer and edit their details. That complex page, where you can do lots of actions on a list, is a pretty good place to use a state machine. So our `/customers` page is something like this:

```js
// pseudo component structure
<>
  <AddCustomer />
  <CreateAndAssignSubscription />
  <BulkMessageCustomers />

  <ListOfCustomers>
    /* there would be many of these potentially, each one responding to some
    send events and a loading message if we're loading customers */
    <DraggableCustomerCard>
      <CustomerInfo first={customer.fname} last={customer.lname} />
      <AssignCustomerSubscriptions />
      <MessageCustomer />
      <AddCustomerToBulkList />
    </DraggableCustomerCard>
  </ListOfCustomer>
</>
```

Crazy right, theres a draggable list, you can do lots of actions... Plus every customer is loaded on this page! This is the kind of situation you might want a state machine for as it gives you lots of visibility into all this complexity.

## The problem

In this case we don't want our `/customers` url to load "customers" each time that we land on this URL. We'll want to load that in the background and keep it in context. So that's one state machine there, and then we have another for all the complex dragging and editing. This is super straightforward to implement and there's <a href="https://xstate.js.org/docs/recipes/react.html#global-state-react-context">a super example in the XState docs</a> that is pretty similar. So now the above component has a hook implementation like:

```js
export default function Customers() {
  const [state, send] = useMachine(draggableCustomerMachine);

  const { customersService } = React.useContext(CustomersContext);
  const [customersState] = useActor(customersService);
```

All the trickly complex stuff about the `draggableCustomerMachine` is wrapped up nicely in it's own state machine, and the more straightforward load a list of customers work, is in context! This is great. Thanks XState team for exposing this example. But how do I test it!

For the context related portion of this, we really only want two tests.

```js
it("renders the loading message when the CustomersContext is loading", () => {});

it("renders customer cards when the CustomersContext is loaded", () => {});
```

We'll make <a href="/tips/setup-function-patterns/">a setup function</a> because that's my preferred pattern. Our setup function will have a default object that covers the only two things that we "actually" need for this test.

```js
  const setup = (
    customerMachineState = { loadingState: 'loading', customers: [] }
  ) => {
```

First we'll force our `customersMachine` into the state we need for our test.

```js
// you'll need to (import { State } from "xstate";) at the top of the file.

const testState = customersMachine.resolveState(
  State.from(customerMachineState.loadingState, {
    customers: customerMachineState.customers,
  })
);
```

Our state is now created, and it's pretty flexible since we can override it in our setup function if we need to. We can interpret the state next

```js
// we'll need (import { interpret } from 'xstate';) for this part

const testService = interpret(customersMachine).start(testState);
```

Finally, we'll wrap our render component in the provider.

```js
render(
  <CustomersContext.Provider value={{ customersService: testService }}>
    <Customers {...props} />
  </CustomersContext.Provider>
);
```

Now we can update the state returned from the provider any time we need to for a unit test! We can now update our setup functions with

```js
  // the first one
  it('renders the loading message when the CustomersContext is loading', () => {
    const customerMachineState = { loadingState: 'loading', customers: [] };
    // rest of test

  it('renders customer cards when the CustomersContext is loaded', () => {
    const customerMachineState = {
      loadingState: 'loaded',
      customers: [{ fName: 'David', lName: 'Khourshid' }],
    };
    // rest of test
```

<div id="complete-example" />

## Complete example

```js
import { render } from "@testing-library/react";
import {
  CustomersContext,
  customersMachine,
} from "../context/customersContext";
import { State, interpret } from "xstate";

import Customers from "./customers"; // the page we're testing

describe("<Customers />", () => {
  const setup = (
    customerMachineState = { loadingState: "loading", customers: [] }
  ) => {
    const testState = customersMachine.resolveState(
      State.from(customerMachineState.loadingState, {
        customers: customerMachineState.customers,
      })
    );
    const testService = interpret(customersMachine).start(testState);

    const R = render(
      <CustomersContext.Provider value={{ customersService: testService }}>
        <Customers />
      </CustomersContext.Provider>
    );

    return R;
  };

  it("renders the loading message when the CustomersContext is loading", () => {
    const customerMachineState = { loadingState: "loading", customers: [] };

    const { getByText } = setup(customerMachineState);

    expect(getByText(/Loading/i)).toBeInTheDocument();
  });

  it("renders customer cards when the CustomersContext is loaded", () => {
    const customerMachineState = {
      loadingState: "loaded",
      customers: [{ fName: "David", lName: "Khourshid" }],
    };

    const { getByText } = setup(customerMachineState);

    expect(getByText(/David Khourshid/i)).toBeInTheDocument();
  });
});
```
