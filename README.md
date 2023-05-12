# decode-big5

A simple wrapper for [iconv-lite](https://github.com/ashtuchkin/iconv-lite) to decode big5 encoded buffers to utf8 strings.

## Installation

```bash
npm install decode-big5
```

or

```bash
yarn add decode-big5
```

## Usage

```ts
import { decodeBig5 } from "decode-big5";

const response = await got.get("https://some.chinese.website.com");
const decodedBody = decodeBig5(response.rawBody);
console.log(decodedBody); // Decoded string
```
