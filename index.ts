import { decode } from "iconv-lite";

/**
 * Decodes a buffer of Big5 encoded content into a string.
 *
 * @param buffer - Buffer of Big5 encoded content.
 * @returns Decoded string.
 * @example
 *
 * ```ts
 * import { decodeBig5 } from 'decode-big5';
 *
 * const response = await got.get("https://some.chinese.website.com");
 * const decodedBody = decodeBig5(response.rawBody);
 * console.log(decodedBody); // Decoded string
 * ```
 */
export const decodeBig5 = (buffer: Buffer): string => {
  return decode(buffer, "Big5");
};
