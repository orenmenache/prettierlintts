# Project Summary

## Overview

This is a testing environment for a React + Ant Design + Meteor frontend and Node.js backend, configured with Prettier and ESLint. The project compiles TypeScript to JavaScript files that can be injected into a production Meteor application.

## Code Style Configuration

### Prettier (Styling)

- **TypeScript/TSX files**: 4 spaces indentation
- **JavaScript/JSX files**: 2 spaces indentation
- Single quotes
- Semicolons enabled
- Trailing commas (ES5)

### ESLint (Logic)

- **Always use arrow functions** (enforced)
- Explicit function return types (warning)
- No unused variables (error)
- TypeScript strict mode
- React hooks rules (frontend)
- React best practices (frontend)

## Project Structure

```
.
├── frontend/                   # React frontend with Ant Design
│   ├── src/
│   │   ├── App.tsx            # Main React component with Ant Design UI
│   │   ├── main.tsx           # Development entry point
│   │   ├── index.tsx          # Library export entry point
│   │   ├── index.css          # Styles with Ant Design imports
│   │   └── meteor-mock.ts     # Meteor.call mock/wrapper
│   ├── dist/                  # Compiled .js files (4-space indentation)
│   ├── index.html             # Development HTML template
│   ├── tsconfig.json          # TypeScript config (jsx: "react")
│   ├── tsconfig.dev.json      # Vite development config
│   ├── tsconfig.node.json     # Vite config TypeScript
│   └── vite.config.ts         # Vite configuration
│
├── backend/                    # Node.js backend with Meteor methods
│   ├── src/
│   │   ├── index.ts           # Server entry point
│   │   ├── server.ts          # HTTP server with /methods endpoint
│   │   ├── methods.ts         # Meteor method definitions
│   │   └── config.ts          # Configuration
│   ├── dist/                  # Compiled .js files (4-space indentation)
│   └── tsconfig.json          # TypeScript config (CommonJS)
│
├── .prettierrc.json           # Prettier configuration
├── .prettierignore            # Prettier ignore patterns
├── eslint.config.js           # ESLint flat config (v9)
├── .gitignore                 # Git ignore patterns
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation

```

## Key Features

### Frontend

1. **React 18.2** with TypeScript
2. **Ant Design (antd) 5.16** for UI components
3. **Meteor.call support**:
   - Mock implementation for development (calls backend HTTP endpoint)
   - Auto-detects real Meteor environment in production
4. **Vite** for fast development
5. **Compiles to .js files** (not .jsx) - JSX transpiled to React.createElement

### Backend

1. **Node.js** with TypeScript
2. **Meteor methods** implementation
3. **HTTP server** with:
   - `/methods` endpoint for Meteor.call simulation
   - CORS enabled for development
4. **CommonJS** output for Node.js compatibility

## Development Workflow

### Start Development Servers

```bash
# Frontend (Vite dev server on port 5173)
npm run dev:frontend

# Backend (Node.js server on port 3000)
npm run dev:backend
```

### Build for Production

```bash
# Build both frontend and backend
npm run build

# Or individually
npm run build:frontend
npm run build:backend
```

### Linting and Formatting

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Compiled Output

Both frontend and backend compile to `.js` files with:

- 4-space indentation (from TypeScript source)
- Source maps for debugging
- TypeScript declaration files (.d.ts)
- All arrow functions (enforced by ESLint)

### Frontend Output (`frontend/dist/`)

- `App.js` - Main React component
- `meteor-mock.js` - Meteor.call implementation
- `main.js` - Development entry
- `index.js` - Library export
- All with corresponding `.d.ts` and `.map` files

### Backend Output (`backend/dist/`)

- `server.js` - HTTP server
- `methods.js` - Meteor methods
- `config.js` - Configuration
- `index.js` - Entry point
- All with corresponding `.d.ts` and `.map` files

## Integration with Production Meteor App

The compiled JavaScript files can be directly injected into a Meteor production project:

1. **Frontend**: Copy `frontend/dist/*.js` files to your Meteor client directory
2. **Backend**: Copy `backend/dist/*.js` files to your Meteor server directory
3. The Meteor mock will automatically detect the real Meteor environment and use it

## Testing the Setup

1. Start the backend: `npm run dev:backend`
2. Start the frontend: `npm run dev:frontend`
3. Open http://localhost:5173
4. Click "Test Meteor.call" button
5. The frontend will call the backend's `/methods` endpoint
6. Check console for method execution logs

## Notes

- TypeScript files use 4-space indentation
- JavaScript files use 2-space indentation
- All functions must be arrow functions
- JSX compiles to React.createElement (not JSX in output)
- Meteor.call works in both development and production environments
