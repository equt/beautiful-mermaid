import type { RenderOptions } from 'beautiful-mermaid'
import { renderMermaidSVG } from 'beautiful-mermaid'
import { Plugin } from 'obsidian'

const RENDER_OPTIONS: RenderOptions = {
  bg: 'var(--bm-bg)',
  fg: 'var(--bm-fg)',
  line: 'var(--bm-line)',
  accent: 'var(--bm-accent)',
  surface: 'var(--bm-surface)',
  border: 'var(--bm-border)',
  muted: 'var(--bm-muted)',
  transparent: true,
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default class BeautifulMermaidPlugin extends Plugin {
  onload() {
    this.registerMarkdownCodeBlockProcessor('mermaid', (source, el) => {
      try {
        const svg = renderMermaidSVG(source, RENDER_OPTIONS)
        el.innerHTML = `<div class="beautiful-mermaid">${svg}</div>`
      }
      catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        el.innerHTML = `
          <div class="beautiful-mermaid-error">
            <p><strong>Beautiful Mermaid: Failed to render diagram</strong></p>
            <pre>${escapeHtml(message)}</pre>
            <details>
              <summary>Source</summary>
              <pre>${escapeHtml(source)}</pre>
            </details>
          </div>
        `
      }
    }, -1)
  }

  onunload() {}
}
