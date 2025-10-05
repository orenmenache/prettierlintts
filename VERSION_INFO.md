# Version Information

This document lists the stable versions used in this project (as of October 2024).

## Core Dependencies

### React Ecosystem

- **react**: `18.2.0`
- **react-dom**: `18.2.0`
- **@types/react**: `18.2.79`
- **@types/react-dom**: `18.2.25`

**Why React 18.2?**

- Stable, production-ready version
- React 19 was still in RC/beta in October 2024
- Excellent ecosystem support
- Uses new JSX transform (`jsx: "react-jsx"`) - no need to import React in every file

### Ant Design

- **antd**: `5.16.5`
- **@ant-design/icons**: `5.3.7`

**Why Ant Design 5.16?**

- Mature and stable version of antd 5.x
- antd 5.0 was released in late 2022, so 5.16 is well-tested
- Modern component API with hooks
- Better TypeScript support than 4.x

### Meteor

- **@types/meteor**: `2.9.3`

**Why Meteor 2.9?**

- Meteor 2.x was the stable branch throughout 2024
- Compatible with Node.js 14, 16, and 18
- Meteor 3.0 was released in 2024 but conservative projects stayed on 2.x
- Well-established ecosystem

## Development Tools

### TypeScript

- **typescript**: `5.3.3`

**Why TypeScript 5.3?**

- Compatible with @typescript-eslint/parser 6.x
- Stable release with good tooling support
- Avoids compatibility warnings with ESLint

### Build Tools

- **vite**: `5.2.0`
- **@vitejs/plugin-react**: `4.2.1`
- **tsx**: `4.7.1`

### Linting & Formatting

- **eslint**: `8.57.0` (ESLint 8 with flat config support)
- **@typescript-eslint/eslint-plugin**: `6.21.0`
- **@typescript-eslint/parser**: `6.21.0`
- **eslint-plugin-react**: `7.34.1`
- **eslint-plugin-react-hooks**: `4.6.0`
- **eslint-config-prettier**: `9.1.0`
- **prettier**: `3.2.5`

**Why ESLint 8?**

- ESLint 9 was released but 8.57 is the last stable 8.x version
- Supports both legacy and flat config formats
- Better compatibility with existing plugins

### Node.js

- **@types/node**: `18.19.0`

**Recommended Node.js version**: Node 18.x LTS

## Version Compatibility Matrix

| Package      | Version | Compatible With          |
| ------------ | ------- | ------------------------ |
| React        | 18.2.0  | TypeScript 4.x - 5.x     |
| Ant Design   | 5.16.5  | React 16.9+              |
| Meteor Types | 2.9.3   | Meteor 2.x               |
| TypeScript   | 5.3.3   | ESLint 8.x, React 18     |
| ESLint       | 8.57.0  | TypeScript 4.3.5 - 5.4.0 |
| Vite         | 5.2.0   | Node 18+                 |

## Updating Versions

If you need to update to different versions based on your production environment:

1. Update `package.json` with your desired versions
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install`
4. Check if TypeScript config needs adjustment:
   - React 17+: Use `"jsx": "react-jsx"`
   - React 16 or earlier: Use `"jsx": "react"` and import React explicitly
5. Run `npm run lint` and `npm run build` to verify compatibility

## Known Compatibility Notes

### React 18 vs React 19

- React 18 uses `JSX.Element` return type
- React 19 uses `React.JSX.Element` return type
- With `jsx: "react-jsx"`, no need to import React in component files

### Ant Design 4 vs 5

- antd 5.x has breaking changes from 4.x
- Icon imports changed: `@ant-design/icons` is required (not built-in)
- CSS-in-JS approach changed
- Form API is different (hooks-based in 5.x)

### Meteor 2 vs 3

- Meteor 3.x requires Node.js 20+
- Meteor 2.x supports Node.js 14-18
- @types/meteor version should match Meteor major version

### ESLint 8 vs 9

- ESLint 9 requires flat config only
- ESLint 8 supports both legacy and flat config
- This project uses flat config (eslint.config.js) compatible with both

## Last Updated

October 2024 - Stable production versions
