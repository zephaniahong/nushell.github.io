---
title: hash md5
version: 0.69.1
default: |
  Hash a value using the md5 hash algorithm
usage: |
  Hash a value using the md5 hash algorithm
---

# <code>{{ $frontmatter.title }}</code> for default

<div class='command-title'>{{ $frontmatter.default }}</div>

## Signature

```> hash md5 ...rest --binary```

## Parameters

 -  `...rest`: optionally md5 hash data by cell path
 -  `--binary`: Output binary instead of hexadecimal representation

## Examples

get a hexadecimaly encoded string of the md5 digest of a string
```shell
> echo 'abcdefghijklmnopqrstuvwxyz' | hash md5
```

get the md5 digest of a string in binary
```shell
> echo 'abcdefghijklmnopqrstuvwxyz' | hash md5 --binary
```

md5 encode a file
```shell
> open ./nu_0_24_1_windows.zip | hash md5
```
