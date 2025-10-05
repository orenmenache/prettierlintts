# Frontend Development Guide

## Quick Commands

| Command                  | What It Does                          |
| ------------------------ | ------------------------------------- |
| `npm run build:frontend` | Compile all frontend files            |
| `npm run dev:frontend`   | Run Vite dev server (hot reload)      |
| `npm run lint`           | Lint backend + frontend               |
| `npm run format`         | Format all files (backend + frontend) |

## Compile All Frontend Files

```bash
cd frontend
tsc
```

Output: `frontend/dist/active/*.js` files with 4-space indentation

**Note:** Only files in `src/active/` are compiled. Files in `src/archive/` are ignored.

## Development Server (Recommended)

```bash
npm run dev:frontend
```

This runs Vite dev server at `http://localhost:5173` with:

- ✅ Hot module reload (instant updates)
- ✅ No compilation needed
- ✅ Fast refresh for React components

**Use this for development!** Only compile when you need to inject `.js` files into production.

## Lint Frontend Code

```bash
npm run lint
```

This lints **both** backend and frontend. ESLint checks:

- React-specific issues (missing keys, hooks rules)
- Code quality issues
- TypeScript best practices
- Arrow function enforcement
- Unused variables
- Floating promises

**Fix automatically:**

```bash
npm run lint:fix
```

## Format Frontend Code

```bash
npm run format
```

This formats **all** files (backend + frontend) with Prettier:

- Frontend `.tsx/.ts` files: 4-space indentation
- Frontend `.jsx/.js` files: 2-space indentation
- Enforces consistent style

**Note:** Formatting does NOT happen automatically on save. Run this command manually.

**Check formatting without changing files:**

```bash
npm run format:check
```

## Compile a Single File

```bash
cd frontend
npx tsc src/active/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022
```

## Compile with 2-Space Indentation

```bash
cd frontend
tsc
prettier --write "dist/**/*.js" --tab-width 2
```

## Compile with 4-Space Indentation (default)

```bash
cd frontend
tsc
prettier --write "dist/**/*.js" --tab-width 4
```

## Compile Specific File with Custom Indentation

**2 spaces:**

```bash
cd frontend
npx tsc src/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022
prettier --write "dist/App.js" --tab-width 2
```

**4 spaces:**

```bash
cd frontend
npx tsc src/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022
prettier --write "dist/App.js" --tab-width 4
```

## Quick Reference

| Command                                         | What It Does                          |
| ----------------------------------------------- | ------------------------------------- |
| `tsc`                                           | Compile all files using tsconfig.json |
| `tsc src/file.tsx`                              | Compile single file                   |
| `vite`                                          | Run dev server (no build needed)      |
| `prettier --write "dist/**/*.js" --tab-width 2` | Format output with 2 spaces           |
| `prettier --write "dist/**/*.js" --tab-width 4` | Format output with 4 spaces           |

## Development Workflow

**For development (recommended):**

```bash
# Run dev server with hot reload
npm run dev:frontend

# Open http://localhost:5173 in browser
# Make changes - they appear instantly!
```

**For production injection:**

```bash
# 1. Make changes to frontend/src/active/*.tsx files
# 2. Format code
npm run format

# 3. Lint code
npm run lint

# 4. Compile to .js files
npm run build:frontend

# 5. Copy dist/active/*.js to production monolith
```

## Output Location

- **Source (active)**: `frontend/src/active/*.tsx` or `*.ts`
- **Source (archive)**: `frontend/src/archive/*.tsx` (NOT compiled)
- **Compiled**: `frontend/dist/active/*.js`
- **Type Definitions**: `frontend/dist/active/*.d.ts`
- **Source Maps**: NOT generated (`sourceMap: false`)

## Important Notes

- TypeScript config: `frontend/tsconfig.json`
- JSX transform: `react-jsx` (React 18 - no need to import React)
- Output format: ES Modules
- Default indentation: 4 spaces (from TypeScript source)
- Use Prettier to change output indentation
- JSX is compiled to `React.createElement()` calls in the `.js` output
- **Comments are removed** from `.js` files (`removeComments: true`)
- **Types remain** in `.d.ts` files
- **JSDoc/comments** only in source `.tsx/.ts` files and `.d.ts` files

## Archive Old Code

To archive old code (won't be compiled or linted):

```bash
# Move old PR code to archive
mv frontend/src/active/old-feature frontend/src/archive/pr-123-old-feature

# Now it's ignored by tsc and eslint
```

## Example: Compile App.tsx

```bash
cd frontend
npx tsc src/active/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022 --esModuleInterop
```

This creates `dist/active/App.js` with JSX transformed to JavaScript.
