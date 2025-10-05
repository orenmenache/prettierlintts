# Quick Start Guide

## Essential Commands

| Command | What It Does |
|---------|--------------|
| `npm run dev:frontend` | 🚀 Start frontend dev server (hot reload) |
| `npm run dev:backend` | 🚀 Start backend dev server (watch mode) |
| `npm run build` | 📦 Compile both frontend + backend |
| `npm run lint` | ✅ Lint both frontend + backend |
| `npm run format` | 💅 Format all code (run manually) |

## Development Workflow

### For Frontend Development

```bash
# Start dev server
npm run dev:frontend

# Open http://localhost:5173
# Make changes to frontend/src/active/*.tsx
# Changes appear instantly (hot reload)
```

### For Backend Development

```bash
# Start dev server with auto-reload
npm run dev:backend

# Make changes to backend/src/active/*.ts
# Server restarts automatically
```

### Before Committing

```bash
# 1. Format code
npm run format

# 2. Lint code
npm run lint

# 3. Fix any lint errors
npm run lint:fix

# 4. Build to verify everything compiles
npm run build
```

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── active/      ✅ Your working code (compiled & linted)
│   │   └── archive/     ❌ Old PRs (ignored by tsc & eslint)
│   └── dist/
│       └── active/      📦 Compiled .js files
│
├── backend/
│   ├── src/
│   │   ├── active/      ✅ Your working code (compiled & linted)
│   │   └── archive/     ❌ Old code (ignored by tsc & eslint)
│   └── dist/
│       └── active/      📦 Compiled .js files
```

## Archive Old Code

```bash
# Move old frontend code to archive
mv frontend/src/active/old-feature frontend/src/archive/pr-123-old-feature

# Move old backend code to archive
mv backend/src/active/old-module backend/src/archive/pr-456-old-module

# Now they won't be compiled or linted!
```

## Formatting & Linting

### Formatting (Prettier)

**Does NOT happen automatically on save!** Run manually:

```bash
npm run format
```

**Indentation rules:**
- TypeScript/TSX files: 4 spaces
- JavaScript/JSX files: 2 spaces
- Compiled `.js` output: 4 spaces (can be changed with Prettier)

### Linting (ESLint)

```bash
npm run lint        # Check for errors
npm run lint:fix    # Auto-fix errors
```

**What ESLint catches:**
- ✅ React-specific issues (missing keys, hooks rules)
- ✅ TypeScript best practices
- ✅ Arrow function enforcement (your project rule)
- ✅ Unused variables
- ✅ Floating promises
- ✅ Code quality issues

## Compiling for Production

```bash
# Compile everything
npm run build

# Or compile individually
npm run build:frontend
npm run build:backend
```

**Output:**
- `frontend/dist/active/*.js` - Clean JS files (no comments)
- `frontend/dist/active/*.d.ts` - Type definitions (your secret helper!)
- `backend/dist/active/*.js` - Clean JS files (no comments)
- `backend/dist/active/*.d.ts` - Type definitions

## Injecting into Production Monolith

```bash
# Copy .js files (committed to production)
cp frontend/dist/active/*.js ../production-monolith/src/injected/

# Copy .d.ts files (gitignored, your secret helper!)
cp frontend/dist/active/*.d.ts ../production-monolith/src/injected/

# Add to production's .gitignore:
# *.d.ts
# *.d.ts.map
```

Now you get TypeScript autocomplete in your vanilla JS monolith! 🎉

## Versions

- **React**: 18.2.0 (stable)
- **Ant Design**: 5.16.5
- **Meteor Types**: 2.9.3
- **TypeScript**: 5.3.3
- **Node.js**: 18.x LTS (recommended)

See `VERSION_INFO.md` for details.

## Detailed Guides

- **Frontend**: See `COMPILE_FRONTEND.md`
- **Backend**: See `COMPILE_BACKEND.md`
- **Versions**: See `VERSION_INFO.md`
- **Changes**: See `CHANGELOG.md`

## Common Tasks

### Add a new frontend component

```bash
# Create in active folder
touch frontend/src/active/MyComponent.tsx

# It will be automatically compiled and linted
npm run build:frontend
```

### Add a new backend module

```bash
# Create in active folder
touch backend/src/active/my-module.ts

# It will be automatically compiled and linted
npm run build:backend
```

### Change output indentation

```bash
# Compile with 2-space indentation
npm run build:frontend
prettier --write "frontend/dist/active/**/*.js" --tab-width 2

# Compile with 4-space indentation (default)
npm run build:frontend
prettier --write "frontend/dist/active/**/*.js" --tab-width 4
```

## Troubleshooting

**ESLint errors on archive files?**
- Make sure files are in `src/archive/` folder
- Check `eslint.config.js` has `'frontend/src/archive/**'` in ignores

**TypeScript not compiling archive files?**
- Make sure `tsconfig.json` has `"include": ["src/active/**/*"]`

**Formatting not working?**
- Run `npm run format` manually (doesn't happen on save)
- Check `.prettierrc.json` for rules

**Build errors?**
- Run `npm run lint` first to catch issues
- Check TypeScript errors: `cd frontend && npx tsc --noEmit`

