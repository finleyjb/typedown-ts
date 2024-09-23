import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { tokenize } from "./markdown.ts";
import * as tokens from "./tokens.ts";

describe("markdown", () => {
  describe("tokenization", () => {
    it("tokenizes paragraphs", () => {
      expect(tokenize("asdf")).toEqual([tokens.textToken("asdf")]);
    });

    it("tokenizes italics", () => {
      expect(tokenize("*asdf*")).toEqual([
        tokens.italicToken(),
        tokens.textToken("asdf"),
        tokens.italicToken(),
      ]);

      expect(tokenize("_asdf_")).toEqual([
        tokens.italicToken(),
        tokens.textToken("asdf"),
        tokens.italicToken(),
      ]);
    });

    it("tokenizes bold", () => {
      expect(tokenize("**asdf**")).toEqual([
        tokens.boldToken(),
        tokens.textToken("asdf"),
        tokens.boldToken(),
      ]);
      expect(tokenize("__asdf__")).toEqual([
        tokens.boldToken(),
        tokens.textToken("asdf"),
        tokens.boldToken(),
      ]);
    });
  });
});
