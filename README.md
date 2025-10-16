# Tech Gear

A small e-commerce UI starter built with React, TypeScript and Vite. This project provides product listing, filtering, and cart context scaffolding and uses Tailwind CSS for styling.

## Table of contents
- About
- Quick start
- Available scripts
- Project structure
- Tech stack
- Development notes (Windows PowerShell)
- Contributing
- License

## About

This repository is a Vite + React + TypeScript starter tailored for a product catalogue / small e‑commerce front-end. It demonstrates routing, context-based state (products and cart), Tailwind CSS integration, and a componentized layout.

## Quick start

1. Install dependencies

   In PowerShell:

   ```powershell
   npm install
   ```

2. Run the dev server

   ```powershell
   npm run dev
   ```

3. Open the app

   Open http://localhost:5173 (Vite default) in your browser.

4. Build for production

   ```powershell
   npm run build
   ```

5. Preview the production build locally

   ```powershell
   npm run preview
   ```

## Available scripts

The following npm scripts are defined in `package.json`:

- `dev` - Start the Vite development server (hot-reload)
- `build` - Create a production build with Vite
- `preview` - Serve the production build locally
- `lint` - Run ESLint across the project
- `typecheck` - Run TypeScript type checking (no emit) using `tsconfig.app.json`

Run them with `npm run <script>`.

## Project structure

Key files and folders:

- `index.html` — Vite HTML entry
- `vite.config.ts` — Vite configuration (React plugin)
- `package.json` — scripts and dependencies
- `tsconfig.app.json` / `tsconfig.json` — TypeScript configuration
- `src/main.tsx` — React entry that mounts `App`
- `src/App.tsx` — Application root and router
- `src/index.css` — Tailwind CSS entry (imports Tailwind layers)
- `src/components/` — Reusable UI components
- `src/context/` — `ProductContext` and `CartContext` for global state
- `src/pages/` — Page components: `HomePage`, `ProductsPage`, `ProductDetailsPage`

If you add new features, keep components small and colocate styles where appropriate.

## Tech stack

- React 18
- TypeScript
- Vite (dev server + bundler)
- Tailwind CSS
- ESLint for linting
- React Router DOM for client-side routing
- Supabase JS (present in dependencies; likely used for data in extended builds)

## Development notes (Windows PowerShell)

- Default dev server port: 5173. If the port is in use, Vite will pick a different one — check the terminal output.
- Use PowerShell when following commands in this README. Each listed command is a PowerShell command.
- Type-checking: `npm run typecheck` will run `tsc --noEmit -p tsconfig.app.json` and will fail if there are type errors.
- Linting: `npm run lint` runs `eslint .` — ensure your editor is configured or install the recommended ESLint extensions for VS Code.

Troubleshooting tips:

- If dependencies fail to install, delete `node_modules` and `package-lock.json` and retry `npm install`.
- If TypeScript complains about missing types for third-party libs, either install `@types/*` packages or add a `declare module` shim in `src/vite-env.d.ts`.

## Contributing

Contributions are welcome. A good starter workflow:

1. Fork the repo
2. Create a feature branch
3. Make changes and add tests if applicable
4. Run `npm run lint` and `npm run typecheck` locally
5. Open a pull request with a clear description of the changes

## License

This repository does not include a license file. Consider adding an open-source license (for example, MIT) if you plan to make it public.

---

If you'd like, I can also:

- Add a basic `LICENSE` file (MIT)
- Add a short CONTRIBUTING.md with PR checklist
- Run `npm run lint` and `npm run typecheck` and fix small issues automatically

Tell me which you'd like next.
