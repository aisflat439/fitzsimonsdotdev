# Poker Systems Monte Carlo Simulation

## Overview

A Monte Carlo simulation tool to test poker heuristics and strategies by measuring expected value (EV).

## Current Focus

Starting with testing the heuristic: **"CBet K high boards 100%"**

## How It Works

- **Static Element**: Preflop ranges are predefined and don't change
- **Configurable Parameters**:
  - Your position at the table
  - Number of players at the table
  - Villain's position
  - Strategies/heuristics for each street (Flop, Turn, River)

## Layout Structure

- Streets displayed across the top: Preflop | Flop | Turn | River
- Preflop column contains position and player configuration
- Subsequent columns allow defining actions/heuristics for that street
- Results show EV of the tested strategy

## Measurement

Primary metric: **Expected Value (EV)**
