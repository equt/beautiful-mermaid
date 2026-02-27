import antfu from '@antfu/eslint-config'
import obsidianmd from 'eslint-plugin-obsidianmd'

export default antfu(
  { typescript: { tsconfigPath: './tsconfig.json' } },
  {
    // Scope obsidianmd rules to plugin source files only.
    // Spread configs.recommended as a plain object — symbol keys (Symbol.iterator)
    // are excluded, so only the rule entries are copied in. This avoids the
    // `extends`-key and duplicate `import`-plugin conflicts from the full iterator.
    files: ['src/**/*.ts'],
    plugins: { obsidianmd },
    rules: { ...obsidianmd.configs.recommended },
  },
  {
    ignores: [
      'node_modules',
      'main.js',
      'esbuild.config.mjs',
      'version-bump.mjs',
    ],
  },
)
