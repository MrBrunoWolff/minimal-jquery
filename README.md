# Minimal jQuery

A jQuery starter for TypeScript web apps, with template-string components, hot reloading and DOM tests.

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## Quick start

Use the Bun version declared in [package.json](package.json).

```sh
git clone https://github.com/MrBrunoWolff/minimal-jquery.git
cd minimal-jquery
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000).

## Features

- jQuery components with delegated event handlers.
- One HTML entry point for development and production builds.
- Bun hot reloading and happy-dom tests.

## Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `bun run dev`      | Start development with hot reloading            |
| `bun run build`    | Bundle and minify the app into dist/            |
| `bun run test`     | Run DOM and utility tests                       |
| `bun run audit`    | Audit dependencies                              |
| `bun run check:ci` | Run the complete repository validation contract |

## Development

See the [development guide](docs/development.md) for project structure, implementation details and maintenance. The complete command list is in [package.json](package.json).

## License

MIT — see [LICENSE](LICENSE).
