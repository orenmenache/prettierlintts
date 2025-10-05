# Backend Development Guide

## Quick Commands

| Command                 | What It Does                           |
| ----------------------- | -------------------------------------- |
| `npm run build:backend` | Compile all backend files              |
| `npm run lint`          | Lint backend + frontend                |
| `npm run format`        | Format all files (backend + frontend)  |
| `npm run dev:backend`   | Run backend dev server with watch mode |

## Compile All Backend Files

```bash
cd backend
tsc
```

Output: `backend/dist/active/*.js` files with 4-space indentation

**Note:** Only files in `src/active/` are compiled. Files in `src/archive/` are ignored.

## Lint Backend Code

```bash
npm run lint
```

This lints **both** backend and frontend. ESLint checks:

- Code quality issues
- TypeScript best practices
- Arrow function enforcement
- Unused variables
- Floating promises

**Fix automatically:**

```bash
npm run lint:fix
```

## Format Backend Code

```bash
npm run format
```

This formats **all** files (backend + frontend) with Prettier:

- Backend `.ts` files: 4-space indentation
- Enforces consistent style

**Note:** Formatting does NOT happen automatically on save. Run this command manually.

**Check formatting without changing files:**

```bash
npm run format:check
```

## Compile a Single File

```bash
cd backend
npx tsc src/active/index.ts --outDir dist --module commonjs --target ES2022
```

## Compile with 2-Space Indentation

```bash
cd backend
tsc
prettier --write "dist/**/*.js" --tab-width 2
```

## Compile with 4-Space Indentation (default)

```bash
cd backend
tsc
prettier --write "dist/**/*.js" --tab-width 4
```

## Compile Specific File with Custom Indentation

**2 spaces:**

```bash
cd backend
npx tsc src/methods.ts --outDir dist --module commonjs --target ES2022
prettier --write "dist/methods.js" --tab-width 2
```

**4 spaces:**

```bash
cd backend
npx tsc src/methods.ts --outDir dist --module commonjs --target ES2022
prettier --write "dist/methods.js" --tab-width 4
```

## Quick Reference

| Command                                         | What It Does                          |
| ----------------------------------------------- | ------------------------------------- |
| `tsc`                                           | Compile all files using tsconfig.json |
| `tsc src/file.ts`                               | Compile single file                   |
| `prettier --write "dist/**/*.js" --tab-width 2` | Format output with 2 spaces           |
| `prettier --write "dist/**/*.js" --tab-width 4` | Format output with 4 spaces           |

## Development Workflow

**Typical workflow:**

```bash
# 1. Make changes to backend/src/active/*.ts files
# 2. Format code
npm run format

# 3. Lint code
npm run lint

# 4. Compile
npm run build:backend

# 5. Or run dev server (auto-recompiles on changes)
npm run dev:backend
```

## Output Location

- **Source (active)**: `backend/src/active/*.ts`
- **Source (archive)**: `backend/src/archive/*.ts` (NOT compiled)
- **Compiled**: `backend/dist/active/*.js`
- **Type Definitions**: `backend/dist/active/*.d.ts`
- **Source Maps**: NOT generated (`sourceMap: false`)

## Notes

- TypeScript config: `backend/tsconfig.json`
- Output format: CommonJS (for Node.js)
- Default indentation: 4 spaces (from TypeScript source)
- Use Prettier to change output indentation
- **Comments are removed** from `.js` files (`removeComments: true`)
- **Types remain** in `.d.ts` files
- **JSDoc/comments** only in source `.ts` files and `.d.ts` files
