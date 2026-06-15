# Learning Record 0003: Design-Phase Threat Model Inputs and Outputs

## Date
2026-06-14

## Context
The learner requested a focused lesson on how to perform threat modeling when a product is still in design phase, specifically what inputs are required and what outputs should be produced.

## Key Insights
- Design-phase threat modeling should produce a security contract, not only observations.
- Required inputs include scope, business context, assets, trust boundaries, identity model, assumptions, and constraints.
- Required outputs include a threat register, control decisions, testable security requirements, and downstream verification plans.
- Controls must be written in a form that implementation and runtime teams can verify later.

## Working Rules
- If implementation does not exist yet, strengthen requirement quality and verification planning.
- Convert vague controls into testable statements with owners and release gates.
- Keep unknowns explicit and tracked.

## Implications For Future Lessons
- Next lessons can focus on running this template against real examples (OAuth browser client, mobile app, or AI-enabled workflow).
- Future coaching should include converting threat model outputs into backlog tickets and acceptance criteria.
