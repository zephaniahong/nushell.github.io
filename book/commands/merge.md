---
title: merge
version: 0.69.1
filters: |
  Merge a table into an input table
usage: |
  Merge a table into an input table
---

# <code>{{ $frontmatter.title }}</code> for filters

<div class='command-title'>{{ $frontmatter.filters }}</div>

## Signature

```> merge (block)```

## Parameters

 -  `block`: the block to run and merge into the table

## Examples

Merge an index column into the input table
```shell
> [a b c] | wrap name | merge { [1 2 3] | wrap index }
```

Merge two records
```shell
> {a: 1, b: 2} | merge { {c: 3} }
```

Merge two records with overlap key
```shell
> {a: 1, b: 3} | merge { {b: 2, c: 4} }
```
