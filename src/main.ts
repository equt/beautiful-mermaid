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

export default class BeautifulMermaidPlugin extends Plugin {
  onload() {
    this.registerMarkdownCodeBlockProcessor('mermaid', (source, el) => {
      try {
        const svg = renderMermaidSVG(source, RENDER_OPTIONS)
        const wrapper = el.createDiv({ cls: 'beautiful-mermaid' })
        const svgDoc = new DOMParser().parseFromString(svg, 'image/svg+xml')
        wrapper.appendChild(document.adoptNode(svgDoc.documentElement))
      }
      catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        const wrapper = el.createDiv({ cls: 'beautiful-mermaid-error' })
        wrapper.createEl('p').createEl('strong', { text: 'Beautiful Mermaid: failed to render diagram' })
        wrapper.createEl('pre', { text: message })
        const details = wrapper.createEl('details')
        details.createEl('summary', { text: 'Source' })
        details.createEl('pre', { text: source })
      }
    }, -1)
  }

  onunload() {}
}
