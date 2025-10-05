# Prettier + ESLint + TypeScript Project

A testing project with separate React frontend (with Ant Design and Meteor support) and Node.js backend environments. The compiled JavaScript files are intended to be injected into a different production project.

## Project Structure

```
.
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── main.tsx       # Development entry point
│   │   ├── index.tsx      # Library export entry point
│   │   ├── App.tsx        # Sample React component
│   │   └── index.css      # Styles
│   ├── index.html         # HTML template for development
│   ├── tsconfig.json      # TypeScript config for frontend
│   ├── tsconfig.node.json # TypeScript config for Vite
│   └── vite.config.ts     # Vite configuration
│
├── backend/               # Node.js backend application
│   ├── src/
│   │   ├── index.ts       # Server entry point
│   │   ├── server.ts      # HTTP server setup
│   │   └── config.ts      # Configuration
│   └── tsconfig.json      # TypeScript config for backend
│
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
└── package.json           # Project dependencies and scripts
```

## Code Style Rules

### Prettier (Styling)

- **TypeScript/TSX files**: 4 spaces indentation
- **JavaScript/JSX files**: 2 spaces indentation
- Single quotes
- Semicolons enabled
- Trailing commas (ES5)
- Print width: 100 characters

### ESLint (Logic)

- **Always use arrow functions** (enforced via `func-style` and `prefer-arrow-callback`)
- Explicit function return types (warning)
- No unused variables (error)
- TypeScript strict mode enabled
- React hooks rules (frontend only)
- React best practices (frontend only)

## Installation

```bash
npm install
```

## Development

### Frontend Development

```bash
npm run dev:frontend
```

Opens the React app at `http://localhost:5173`

### Backend Development

```bash
npm run dev:backend
```

Starts the Node.js server on port 3000 (configurable via PORT env variable)

## Building for Production

### Build Frontend

```bash
npm run build:frontend
```

Outputs compiled files to `frontend/dist/` in both ES modules and CommonJS formats.

### Build Backend

```bash
npm run build:backend
```

Outputs compiled files to `backend/dist/`

### Build Both

```bash
npm run build
```

## Linting and Formatting

### Check for linting errors

```bash
npm run lint
```

### Fix linting errors automatically

```bash
npm run lint:fix
```

### Format code with Prettier

```bash
npm run format
```

### Check formatting without modifying files

```bash
npm run format:check
```

## Configuration Details

### Frontend (React + Vite + Ant Design + Meteor)

- Uses Vite for fast development server
- React 18.2 with TypeScript
- Ant Design (antd) 5.16 for UI components
- Meteor.call support with mock implementation for development
- Compiles TypeScript to JavaScript (`.js` files, not `.jsx`)
- Strict TypeScript settings
- ESLint with React-specific rules

### Backend (Node.js + Meteor Methods)

- TypeScript with CommonJS modules
- Meteor methods implementation
- HTTP server with method call endpoint (`/methods`)
- CORS enabled for development
- Strict TypeScript settings
- Source maps enabled for debugging
- Declaration files generated

## Injecting into Production

The compiled JavaScript files from `frontend/dist/` and `backend/dist/` can be injected into your production project:

### Frontend

```javascript
// ES Module
import { App } from './path/to/frontend/dist/App.js';

// CommonJS
const { App } = require('./path/to/frontend/dist/App.js');
```

### Backend

```javascript
const { createServer } = require('./path/to/backend/dist/server.js');
const { methods } = require('./path/to/backend/dist/methods.js');
```

## Key Dependencies

### Frontend

- **react** & **react-dom**: React 18.2.0
- **antd**: Ant Design 5.16.5 UI component library
- **@ant-design/icons**: Ant Design 5.3.7 icon set
- **@types/meteor**: TypeScript definitions for Meteor 2.9.3

### Backend

- **tsx**: TypeScript execution for development
- **@types/meteor**: TypeScript definitions for Meteor 2.9.3

## Notes

- All TypeScript files must use arrow functions (enforced by ESLint)
- Frontend uses React 18 with `jsx: "react-jsx"` (no need to import React in every file)
- Backend uses CommonJS for better Node.js compatibility
- Both environments have separate TypeScript configurations
- ESLint configurations are environment-specific (browser vs Node.js)
- Meteor.call in frontend uses a mock that calls the backend HTTP endpoint
- In production Meteor environment, the mock automatically detects and uses real Meteor
- All compiled output is `.js` files (TypeScript JSX is transpiled to React.createElement calls)
