---
title: arg-true
version: 0.69.1
dataframe: |
  Returns indexes where values are true
usage: |
  Returns indexes where values are true
---

# <code>{{ $frontmatter.title }}</code> for dataframe

<div class='command-title'>{{ $frontmatter.dataframe }}</div>

## Signature

```> arg-true ```

## Examples

Returns indexes where values are true
```shell
> [false true false] | into df | arg-true
```
