# Compiling Frontend TypeScript Files

## Compile All Frontend Files

```bash
cd frontend
tsc
```

Output: `frontend/dist/*.js` files with 4-space indentation

## Compile a Single File

```bash
cd frontend
npx tsc src/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022
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

## Development Server (No Compilation Needed)

```bash
cd frontend
vite
```

This runs the dev server at `http://localhost:5173` with hot reload.

## Quick Reference

| Command                                         | What It Does                          |
| ----------------------------------------------- | ------------------------------------- |
| `tsc`                                           | Compile all files using tsconfig.json |
| `tsc src/file.tsx`                              | Compile single file                   |
| `vite`                                          | Run dev server (no build needed)      |
| `prettier --write "dist/**/*.js" --tab-width 2` | Format output with 2 spaces           |
| `prettier --write "dist/**/*.js" --tab-width 4` | Format output with 4 spaces           |

## Output Location

- **Source**: `frontend/src/*.tsx` or `*.ts`
- **Compiled**: `frontend/dist/*.js`
- **Type Definitions**: `frontend/dist/*.d.ts`
- **Source Maps**: `frontend/dist/*.js.map`

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

## Example: Compile App.tsx

```bash
cd frontend
npx tsc src/App.tsx --outDir dist --jsx react-jsx --module ESNext --target ES2022 --esModuleInterop
```

This creates `dist/App.js` with JSX transformed to JavaScript.
