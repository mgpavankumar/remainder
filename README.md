# Reminder Manager · TypeScript

An in-memory reminder manager demonstrating TypeScript classes, typed records, and basic create, read, and delete operations.

**Author:** [M. G. Pavan Kumar](https://github.com/mgpavankumar)  
**Status:** Educational project

## Features

- Create reminders with an ID, title, description, and date
- List all reminders or find one by ID
- Remove reminders by ID

## Getting started

Install Node.js and npm. Clone this repository:

```bash
git clone https://github.com/mgpavankumar/remainder.git
cd remainder
```

```bash
npm install
npm exec --package=tsx -- tsx src/index.ts
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/index.ts` | Demonstration of reminder operations |
| `src/remainder.ts` | Reminder model, database class, and embedded example |
| `tsconfig.json` | Compiler configuration |

## Current behavior and limitations

The existing npm scripts contain incorrect file paths. The command above runs the actual entry point directly. The TypeScript configuration also has include patterns that do not match the source files. Importing `remainder.ts` runs its embedded demonstration as well. Records exist only in memory; there is no HTTP server or persistence.

## Planned improvements

- Correct npm scripts and TypeScript include patterns
- Separate reusable classes from demonstration code
- Add duplicate-ID validation and persistent storage

## Contributing

Open an issue describing the problem or proposed improvement. Keep pull requests focused and include the steps used to verify changes. Use sample data and keep credentials out of commits.

## Verification

This documentation was checked against the committed source files, dependency declarations, and route definitions. Installation, compilation, database setup, and runtime behavior have not been verified by this documentation update. There is no automated test suite in the current repository.
