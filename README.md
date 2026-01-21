# ⚡ Minimal jQuery 4.0 + Bun

A minimal, modern jQuery 4.0 starter template powered by Bun. Zero-build development with TypeScript, JSX, and ES modules.

## ✨ Features

- **jQuery 4.0** - Latest version with modern ES module support
- **Bun Runtime** - Fast JavaScript runtime and bundler
- **TypeScript + TSX** - Full TypeScript support with TSX file extensions
- **Zero-Build Dev** - On-the-fly transpilation during development
- **Hot Reload** - Automatic server reload with `bun --hot`
- **DOM Testing** - Built-in testing with happy-dom
- **ES Modules** - Modern JavaScript module system
- **Production Build** - Optimized bundling for deployment

## 🚀 Quick Start

### Create a new project

```bash
# Using Bun (recommended)
bunx minimal-jquery create my-app

# Or using npm
npx minimal-jquery create my-app
```

### Or clone this repository

```bash
git clone https://github.com/yourusername/minimal-jquery.git my-app
cd my-app
bun install
```

## 📦 Usage

### Development

Start the development server with hot reload:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The server watches for file changes and automatically reloads. Just refresh your browser to see updates!

### Testing

Run tests with happy-dom:

```bash
# Run all tests
bun test

# Watch mode
bun test --watch
```

### Production Build

Create an optimized bundle:

```bash
bun run build
```

This generates a minified bundle in the `dist/` directory.

## 📁 Project Structure

```
minimal-jquery/
├── src/
│   ├── index.tsx              # Main entry point
│   ├── components/
│   │   └── Counter.tsx        # Example JSX component
│   └── utils/
│       └── helpers.ts         # Utility functions
├── public/
│   ├── index.html             # HTML template
│   └── style.css              # Global styles
├── tests/
│   ├── components/
│   │   └── Counter.test.ts    # Component tests
│   └── utils/
│       └── helpers.test.ts    # Utility tests
├── server.ts                  # Dev server with on-the-fly transpilation
├── happydom.ts                # DOM testing setup
├── bunfig.toml                # Bun configuration
└── package.json
```

## 🎯 Philosophy

This starter embraces a **minimal, modern approach** to jQuery development:

- **No build step in development** - Bun transpiles TypeScript on-the-fly
- **Template strings for components** - Clean component structure with functions returning HTML
- **jQuery for interactions** - Powerful DOM manipulation and events
- **ES modules** - Modern import/export syntax
- **Production-ready** - Optimized builds when you need them

## 💡 Examples

### Using jQuery with TypeScript

```typescript
import $ from 'jquery';

$(document).ready(() => {
  $('#app').text('Hello jQuery 4.0!');
  
  $('button').on('click', () => {
    console.log('Clicked!');
  });
});
```

### Component Functions with Template Strings

```typescript
function Counter({ initialCount }: { initialCount: number }): string {
  return `
    <div class="counter">
      <div class="display">${initialCount}</div>
      <button class="increment">+</button>
    </div>
  `;
}

// Render component
const html = Counter({ initialCount: 0 });
$('#app').html(html);

// Event handlers with jQuery
$(document).on('click', '.increment', function() {
  const $display = $('.display');
  const current = parseInt($display.text()) || 0;
  $display.text(current + 1);
});
```

### Testing with happy-dom

```typescript
/// <reference lib="dom" />

import { test, expect } from "bun:test";
import $ from "jquery";

test("jQuery manipulation works", () => {
  document.body.innerHTML = '<div id="test">Hello</div>';
  
  $("#test").text("World");
  
  expect($("#test").text()).toBe("World");
});
```

## 🛠️ Tech Stack

- [jQuery 4.0](https://jquery.com/) - Fast, small, and feature-rich JavaScript library
- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [happy-dom](https://github.com/capricorn86/happy-dom) - Fast DOM implementation for testing

## 📖 Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Create production bundle |
| `bun test` | Run tests |
| `bun test --watch` | Run tests in watch mode |

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🔗 Links

- [jQuery Documentation](https://api.jquery.com/)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Happy coding with jQuery 4.0! 🎉**
