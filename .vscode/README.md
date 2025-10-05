# VS Code Settings for This Project

## What's Configured

### ✅ Format on Save
- Automatically formats code when you save
- Uses Prettier for all files

### ✅ Format on Paste
- Automatically formats code when you paste
- Keeps indentation consistent

### ✅ ESLint Auto-Fix
- Fixes ESLint errors automatically on save
- Catches issues before you commit

### ✅ Folder Icons
- `active/` folder has a nice "src" icon 📁
- `archive/` folder has an "archive" icon 📦

## Required Extensions

VS Code will prompt you to install these when you open the project:

1. **Prettier** (`esbenp.prettier-vscode`) - Code formatter
2. **ESLint** (`dbaeumer.vscode-eslint`) - Linter
3. **Material Icon Theme** (`pkief.material-icon-theme`) - Folder icons

## How to Install Extensions

When you open this project, VS Code will show a notification:

> "This workspace has extension recommendations"

Click **"Install All"** or install manually:

1. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
2. Search for each extension
3. Click "Install"

## Verify It's Working

### Test Format on Save
1. Open any `.ts` or `.tsx` file
2. Add some badly formatted code:
   ```typescript
   const x={a:1,b:2};
   ```
3. Save the file (`Ctrl+S`)
4. It should auto-format to:
   ```typescript
   const x = { a: 1, b: 2 };
   ```

### Test Format on Paste
1. Copy this badly formatted code:
   ```typescript
   const test={name:"hello",value:123};
   ```
2. Paste it into a `.ts` file
3. It should auto-format immediately!

### Test Folder Icons
1. Look at the file explorer
2. `active/` folder should have a special icon
3. `archive/` folder should have a different icon

## Disable for This Project Only

If you don't want these settings, delete or rename `.vscode/settings.json`:

```bash
mv .vscode/settings.json .vscode/settings.json.backup
```

## These Settings Only Apply to This Project

- ✅ Other projects are unaffected
- ✅ Your global VS Code settings remain unchanged
- ✅ Settings are shared with your team (if committed to Git)

