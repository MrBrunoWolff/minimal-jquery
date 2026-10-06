# Minimal jQuery

A minimal jQuery 4 starter template built on Bun and TypeScript, with a hot-reloading dev server and happy-dom tests.

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## Features

- jQuery 4 with `@types/jquery`, written in strict TypeScript (`.ts` / `.tsx`)
- Dev server on `Bun.serve` that imports `public/index.html` as a route, so Bun bundles and hot-reloads `src/` and `style.css` on demand (`bun --hot`)
- One HTML entry point for both dev and the production build (`bun build ./public/index.html`, minified, content-hashed assets)
- Components as functions that return HTML template strings, with interactions wired through delegated jQuery handlers
- Tests with `bun test`, with happy-dom preloaded through `bunfig.toml`
- Supply-chain guards: `bunfig.toml` refuses npm versions younger than 3 days, and `bun audit` fails on high or critical advisories
- GitHub Actions CI that runs test, build and audit, then publishes to npm through OIDC trusted publishing

## Quick start

### Clone

```sh
git clone https://github.com/MrBrunoWolff/minimal-jquery.git
cd minimal-jquery
bun install
bun run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `bun run dev`        | Start the dev server on port 3000 with hot reload (`bun --hot server.ts`)       |
| `bun run build`      | Bundle `public/index.html` and everything it references into `dist/`, minified  |
| `bun run test`       | Run the test suite in parallel (`bun test --parallel`)                          |
| `bun run test:watch` | Run the tests in watch mode                                                     |
| `bun run audit`      | Audit dependencies, failing on high or critical advisories                      |

## Project structure

```
minimal-jquery/
├── .github/workflows/ci.yml   # Test, build, audit, then publish to npm
├── bin/
│   └── create-jquery-app.js   # Scaffolding CLI (package "create" bin)
├── public/
│   ├── index.html             # Entry point for both dev and build
│   └── style.css              # Global styles
├── src/
│   ├── index.tsx              # App bootstrap and jQuery event handlers
│   ├── components/
│   │   └── Counter.tsx        # Template-string component
│   └── utils/
│       └── helpers.ts         # formatDate, createElement, debounce
├── tests/
│   ├── components/
│   │   └── Counter.test.ts
│   └── utils/
│       └── helpers.test.ts
├── server.ts                  # Dev server: imports index.html, Bun bundles and hot-reloads
├── happydom.ts                # Registers happy-dom globals for tests
├── bunfig.toml                # Install age gate, test preload, JSX transform
├── tsconfig.json
├── package.json
├── bun.lock
└── LICENSE
```

## HTML entry point

`public/index.html` drives both the dev server and the production bundle. Bun follows the `<script>` and `<link>` tags it references (`../src/index.tsx` and `style.css`). `server.ts` imports the file and serves it for every route. `bun run build` writes content-hashed assets to `dist/` and rewrites the references to match, so nothing needs to be copied or renamed by hand.

## Components

A component is a plain function that returns an HTML string. Behavior is attached with delegated jQuery handlers, so it survives re-renders:

```ts
import $ from "jquery";
import { Counter } from "./components/Counter";

$(document).ready(() => {
  $("#app").html(Counter({ initialCount: 0 }));

  $(document).on("click", ".counter-btn.increment", () => {
    const $display = $(".counter-display");
    $display.text((parseInt($display.text()) || 0) + 1);
  });
});
```

## Publishing

The package is `@mrbrunowolff/minimal-jquery`. On a push to `main`, or when the workflow is triggered by hand (`gh workflow run ci.yml`), the `publish` job runs `npm publish` if the `package.json` version is not on npm yet. It authenticates through npm trusted publishing (OIDC), not a stored token. Trusted publishing cannot perform a package's first publish, so the job skips until the package has been published once by hand and a trusted publisher has been configured on it (organization `MrBrunoWolff`, this repository, workflow `ci.yml`, no environment).

## License

MIT — see [LICENSE](LICENSE).

All declared runtime and development dependencies use `latest`, including
TypeScript where present. Bun resolves eligible stable releases behind the
three-day release-age guard; commit the refreshed lockfile and verify a frozen
install after each update.
