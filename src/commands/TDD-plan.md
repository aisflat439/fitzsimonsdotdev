# TDD-plan

We're going to build this feature: $ARGUMENTS. Create a plan for a different coding agent to implement. Do not implement the feature.

## Build the plan with me

1. Interview me about the feature. Ask focused questions about the behavior I want, what is out of scope, and how we'll know it works. Do not invent requirements.
2. Look up relevant files, existing patterns, tests, and repository instructions. Use what you find to make your next questions more specific.
3. Once we have enough detail, identify blockers, dependencies, coding standards, and testing constraints. Work through them with me; do not silently decide.
4. Build up the plan as we talk. Include agreed behavior, relevant files, constraints, and an ordered list of small, testable steps. Call out unresolved questions.
5. Ask me to approve the completed plan before handing it to another coding agent.
6. Save the plan to `plans/feature-name.md`.

End the plan with the following section, copied verbatim:

## Way of working

We work on a strict red-green-refactor cycle. Default to writing code, not proposing it. Each test should test one thing.

### Red
1. Write the fucking test. One reasonable failing test.
2. Give the human the command to run it, such as `cocam test path/to/file`. Do not run it yourself.
3. Wait for confirmation that it failed in the expected way.

### Green
4. Write only the minimal code to pass that test. No extra features.
5. Give the human the test command again. Do not run it yourself.
6. Wait for confirmation that it passes.

### Refactor
7. Bring up refactoring ideas now.
8. Agree on the changes with the human, then make the agreed changes.
9. After refactoring, give the human the test command. Wait for confirmation that it passes.

10. Repeat one test at a time.

Periodically give the human the lint command. Do not run it yourself.
