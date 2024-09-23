import * as tokens from "./tokens.ts";

export function parse(input: string): tokens.Token[] {
  return tokenize(input);
}

export function tokenize(input: string): tokens.Token[] {
  const currentTokens: tokens.Token[] = [];
  let currentText: string = "";
  for (const char of input) {
    if (char === "*") {
      if (currentText !== "") {
        currentTokens.push(tokens.textToken(currentText));
        currentText = "";
      }
      currentTokens.push(tokens.italicToken());
    } else {
      currentText += char;
    }
  }

  if (currentText !== "") {
    currentTokens.push(tokens.textToken(currentText));
    currentText = "";
  }

  return currentTokens;
}
