# Beautiful Mermaid

An [Obsidian](https://obsidian.md) plugin that replaces the default Mermaid renderer with [beautiful-mermaid](https://github.com/lukilabs/beautiful-mermaid) — producing clean, visually polished diagrams with 15 built-in themes.

## Features

- **Drop-in replacement** for Obsidian's built-in Mermaid renderer
- **Auto theme mode** — uses CSS variables that follow your Obsidian theme in real time, with no re-render needed on theme switch
- **Zero configuration required** — install and your diagrams immediately look better
- Renders flowcharts, sequence diagrams, class diagrams, state diagrams, Gantt charts, and all other diagram types supported by Mermaid

## Installation

1. Open Obsidian Settings → Community Plugins
2. Search for **Beautiful Mermaid**
3. Install and enable the plugin

## How It Works

The plugin registers a Mermaid code block processor with the highest priority (`sortOrder: -1`), intercepting all `mermaid` fenced code blocks before Obsidian's built-in renderer. It passes the diagram source to `renderMermaidSVG()` with CSS variable color tokens that automatically inherit your Obsidian theme colors.

## Development

```bash
bun install
bun run dev    # watch mode
bun run build  # type-check + bundle
bun run lint   # ESLint
```

## License

MIT
