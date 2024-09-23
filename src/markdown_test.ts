import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { tokenize } from "./markdown.ts";
import * as tokens from "./tokens.ts";

describe("markdown", () => {
  it("tokenizes paragraphs", () => {
    expect(tokenize("asdf")).toEqual([tokens.textToken("asdf")]);
  });

  it("tokenizes italics", () => {
    expect(tokenize("*asdf*")).toEqual([
      tokens.italicToken(),
      tokens.textToken("asdf"),
      tokens.italicToken(),
    ]);
  });
});
