---
title: lowercase
version: 0.69.1
dataframe: |
  Lowercase the strings in the column
usage: |
  Lowercase the strings in the column
---

# <code>{{ $frontmatter.title }}</code> for dataframe

<div class='command-title'>{{ $frontmatter.dataframe }}</div>

## Signature

```> lowercase ```

## Examples

Modifies strings to lowercase
```shell
> [Abc aBc abC] | into df | lowercase
```
