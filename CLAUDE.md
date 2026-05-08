# grrep.com

Hugo static site for `grrep` — a small and fast recursive grep written in Go that traverses gitjoin boundaries. Templates are imported from the `github.com/bep/gitjoin.com` Hugo module; local overrides go under `layouts/`, `assets/`, etc.

## Development

This Hugo project overlays the ../gitjoin.com. We want to share common template/code, but be pragmatic about it.  This means typically that creating a custon `layouts/home.html` template is fine, `layouts/baseof.html` is probably not. Any specialist section in `layouts/baseof.html` need to be pulled out into a partial. Note that the work we're currently doing with only 2 sites sets the stage for future similar sites. It would be great if we, say, have 20 sites and want to make a SEO change, don't have to do that in 20 different templates. But be pragmatic, some duplication is OK. Great consolidation suggestions are alsow welcome; maybe it would make sense to use the new [nested CSS vars](https://github.com/gohugoio/hugo/releases/tag/v0.161.0) support added in Hugo v0.161.0 and pull the CSS variables into `site.params`. Maybe.

To edit the ../gitjoin.com source code, you can run Hugo using the @hugo.work workspace:

```
HUGO_MODULE_WORKSPACE=hugo.work hugo server
```

Some additional requirements:

* No inline `<script>` blocks. Put JS into e.g. `assets/js/main.js`.

With the above you can live-edit in both repositories.

## OG image

`content/og-featured.png` is the Open Graph card. To regenerate, render `scripts/og-card.html` at 1200×630 and save the PNG over `content/og-featured.png`:

```
chrome --headless --window-size=1200,630 \
  --screenshot=content/og-featured.png \
  file://$PWD/scripts/og-card.html
```

## Design Context

### Users

Pragmatic developers evaluating a CLI tool. They give the page ~10 seconds before deciding to install, bookmark, or close. They are unimpressed by marketing copy and can spot a templated dev-tool landing page instantly.

What they need to walk away with, in order:
1. What grrep is (recursive grep that traverses gitjoin boundaries)
2. The install command, copyable
3. One demonstration that proves "small and fast"
4. Link to the GitHub repo

### Brand Personality

Three words: **terse, structural, mechanical.**

- **Terse** — minimal config, no ceremony.
- **Structural** — composition does the work; hierarchy comes from layout and type, not from decoration.
- **Mechanical** — honest about being a developer tool, but without LARPing as a terminal. A clean Unix man page, not a Hollywood hacker scene.

### Aesthetic Direction

**Terminal-honest, ink-on-paper.** Structural rigor of a printed reference manual applied to a 2026 web page. Plain type carries the page; monospace appears only where it earns its place.

- Asymmetric, left-aligned composition. No centered hero. No symmetric three-column feature grid.
- Type-driven hierarchy: distinctive display face, workhorse text face, precise mono for code. None from the banned-reflex list.
- Generous whitespace as structure, not filler.
- One restrained accent color. Used rarely.
- System-respecting theme: light and dark each get bespoke palettes, not one derived from the other.

### Anti-references (do NOT look like)

- Generic dev-tool landing pages: dark hero + gradient blob + cyan-to-purple title + identical feature cards.
- Inter + dark + neon accent (default dev-tool monoculture).
- Monospace-everywhere as shorthand for "technical."
- Glassmorphism, sparklines-as-decoration, rounded icons above every heading, side-stripe borders on cards.
- Hero metric template.

### Design Principles

1. **Ten-second contract.** Tagline and install command readable and copyable within ten seconds.
2. **Hierarchy from structure, not chrome.** Type scale, spacing, alignment do the work. Borders, shadows, gradients are guilty until proven necessary.
3. **Mono is a tool, not a costume.** Monospace only for actual code or data.
4. **Both themes are first-class.** Light and dark each get bespoke palettes; tint neutrals toward brand hue in OKLCH.
5. **Restraint signals confidence.** One bold gesture surrounded by quiet.

### Constraints

- Templates live in the imported `github.com/bep/gitjoin.com` module. Design changes touch either that module's templates or local overrides under `layouts/`, `assets/`, etc.
- Sibling site `gitjoin.com` shares the theme module. Changes to the shared module must either be neutral across both, or be configurable so grrep can diverge.
