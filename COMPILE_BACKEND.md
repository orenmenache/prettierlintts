# Compiling Backend TypeScript Files

## Compile All Backend Files

```bash
cd backend
tsc
```

Output: `backend/dist/*.js` files with 4-space indentation

## Compile a Single File

```bash
cd backend
npx tsc src/index.ts --outDir dist --module commonjs --target ES2022
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

## Output Location

- **Source**: `backend/src/*.ts`
- **Compiled**: `backend/dist/*.js`
- **Type Definitions**: `backend/dist/*.d.ts`
- **Source Maps**: `backend/dist/*.js.map`

## Notes

- TypeScript config: `backend/tsconfig.json`
- Output format: CommonJS (for Node.js)
- Default indentation: 4 spaces (from TypeScript source)
- Use Prettier to change output indentation
- **Comments are removed** from `.js` files (`removeComments: true`)
- **Types remain** in `.d.ts` files
- **JSDoc/comments** only in source `.ts` files and `.d.ts` files
