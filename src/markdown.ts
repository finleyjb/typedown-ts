import * as tokens from "./tokens.ts";

export function parse(input: string): tokens.Token[] {
  return tokenize(input);
}

const EM_STRONG_CHARS: ReadonlySet<string> = new Set<string>(["*", "_"]);

export function tokenize(input: string): tokens.Token[] {
  const currentTokens: tokens.Token[] = [];
  let currentText: string = "";
  for (const char of input) {
    if (EM_STRONG_CHARS.has(currentText)) {
      if (EM_STRONG_CHARS.has(char)) {
        currentTokens.push(tokens.boldToken());
        currentText = "";
      } else {
        currentTokens.push(tokens.italicToken());
        currentText = char;
      }
      continue;
    }
    if (EM_STRONG_CHARS.has(char) && currentText !== "") {
      currentTokens.push(tokens.textToken(currentText));
      currentText = "";
    }
    currentText += char;
  }

  if (EM_STRONG_CHARS.has(currentText)) {
    currentTokens.push(tokens.italicToken());
  } else if (currentText !== "") {
    currentTokens.push(tokens.textToken(currentText));
    currentText = "";
  }
  return currentTokens;
}
