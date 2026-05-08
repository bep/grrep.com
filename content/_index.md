---
title: "grrep: A small and fast recursive grep written in Go."
description: "Recursive grep written in Go that honors .gitignore but skips the block managed by gitjoin, so virtual monorepos stay searchable as one tree."
---

## What is grrep?

grrep is a small, fast, recursive grep written in Go. It honors `.gitignore`
and `.ignore` files in your search tree, but skips the block managed by
[gitjoin](https://github.com/bep/gitjoin) — so repositories joined into a
virtual monorepo remain searchable as one tree.

## Why grrep?

A normal grep refuses to descend into `.gitignore`'d directories. Tools like
gitjoin list joined repositories there. grrep recognises gitjoin's managed
section and looks past it, so a virtual monorepo stays one searchable tree
without giving up the safety of `.gitignore`.

## Features

- Recursive search across the working tree.
- Honors `.gitignore` and `.ignore`; skips the gitjoin-managed block.
- Regex by default; literal matching with `-F`.
- Case-insensitive (`-i`), word-boundary (`-w`), invert (`-v`),
  depth-limited (`--max-depth=N`), and quiet (`-q`) modes.
- Skips hidden files and dotfiles; binary files are skipped via a NUL-byte heuristic.
- Written in Go; runs on Linux, macOS, and Windows.
- Free and open source under the Apache 2.0 license.

## Install grrep

```
go install github.com/bep/grrep@latest
```

Source code, releases, and documentation live on GitHub:
[https://github.com/bep/grrep](https://github.com/bep/grrep).
