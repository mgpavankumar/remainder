# Reminder Manager · TypeScript

An in-memory reminder manager with typed records and a separate demonstration entry point.

**Author:** [M. G. Pavan Kumar](https://github.com/mgpavankumar)
**Status:** Educational project

## Features

- Create, retrieve, list, and delete reminders
- Reject duplicate IDs and invalid dates
- Return copies so callers cannot mutate stored records

## Getting started

Install Node.js 22 or newer and npm. Clone this repository:

```bash
git clone https://github.com/mgpavankumar/remainder.git
cd remainder
```

```bash
npm ci
```

```bash
npm run build
npm start
```

`npm start` runs the TypeScript entry point with the Node.js `tsx` loader. `npm run build` emits JavaScript into `dist/src`. `npm run dev` watches source files.

## Tests

```bash
npm run typecheck
npm test
```

See [TEST_RESULTS.md](TEST_RESULTS.md) for recorded local verification and its limits.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/index.ts` | Application logic and/or demonstration |
| `src/remainder.ts` | Application logic and/or demonstration |
| `tests/` | Automated regression checks |
| `tsconfig.json` | Strict ESM compilation settings |

## Current behavior and limitations

Records are held in memory and disappear when the process stops.

## Contributing

Keep changes focused, use synthetic data, and include steps or tests demonstrating the fix. Do not commit local configuration or credentials.
