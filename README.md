# Vue 3 + TypeScript + Vite + vite-plugin-mix

All in one API backend and Vue frontend, using TypeScript and Vue 3.

- All ESM
- Vite for fast compilation
- Preconfigured global SCSS
- Load environment variables from `.env` at project root
- HMR at the frontend and backend
- `lib/` for things (like type defintions) that the frontend and backend need to
  use

## Folder structure

```sh
|- backend/   # Our backend API
|- src/       # Our frontend Vue app
|- lib/       # Shared libraries for backend and frontend
|- build/     # Generated frontend code
\- server/    # Generated backend code
```

## Development

Make sure you have NodeJS installed, then run

```sh
npm install
```

at the root of this project.

Then run

```sh
npm run dev
```

and open the page in your browser.

## Building and Running for Production

```sh
npm install
```

...if you haven't already.

```sh
npm run build
```

...replaces `dev` from before, and creates files that can be run without a build
step later.

```sh
npm run start
```

...runs the built files.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## [vite-plugin-mix](https://github.com/egoist/vite-plugin-mix)

This allows for building a backend API at the same time as building the
frontend.

Edit the files in `backend/`, and they will be built into the final project.
