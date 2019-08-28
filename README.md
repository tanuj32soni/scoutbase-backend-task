# Task

## Code Challenge for Scoutbase

If you’re reading this, then you’ve applied for a position at Scoutbase.

This directory includes two subdirectories:

- `front-end` with focus on React, SSR, Apollo & `styled-components`
- `back-end` with focus on SQL, Node.js, GraphQL

You can do one or you can do two.

### Instructions

You have received this directory within the .zip archive.

1. Create a repo out of the directory with this `README.md` in the root of it.
2. Work on either task following the guidelines in `README.md` within chosen directory.
3. Follow best practices of saving changes to the repo.
4. Upload the repo to your personal Github account and share it with two collaborators:
  1. `Yaass` username – Yassin Askar, co-founder of Scoutbase
  2. `kuka` username – Kuanysh, consultant
5. Expect a response within 10 working days after sharing the task, you’ll be contacted with the info you’ve provided during initial registration.

# Solution

## Setup
`npm install`

## Seed
`npm run seed`

### Run Server
`npm start`

## Directory Structure
- `app` - Segregates the application related codebase
  - `app/models` - Contains Database Models
    - `app/models/crewmembers.js` - CrewMember DB Model
    - `app/models/index.js` - Configures Database
    - `app/models/movies.js` - Movies DB Model
- `lib` - Contains wrapper over other standard libraries
  - `app.js` - Provide functionality to initialize the app
  - `express.js` - Wrapper above express module
  - `index.js` - Exports other wrappers
  - `logger.js` - Wrapper above winston module
  - `sequelize.js` - Wrapper above sequelize module
  - `shutdown.js` - Provides functionality to gracefully shutdown the server
- `.env` - Configs for the application. Note: DB_PASSWORD is kept in config only for demonstration purposes.
- `.eslintrc` - Defines rules for Linting
- `.gitignore` - File not to be pushed to git
- `index.js` - Starting point of the application
- `package-lock.json` - Manages Dependency Tree to maintain similar identical trees.
- `package.json` - Describes some metadata related to project, like version, dependencies, author, etc.
