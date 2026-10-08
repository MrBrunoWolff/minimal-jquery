# Minimal jQuery development

[Project overview](../README.md)

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

## Validation and dependencies

Run `bun run check:ci` before a commit or pull request. See [QUALITY.md](../QUALITY.md) for the validation stages. Bun applies the three-day minimum release age in `bunfig.toml`; preserve it when updating dependencies. Verify a frozen install after refreshing the lockfile.
