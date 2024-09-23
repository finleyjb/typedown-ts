export enum TokenType {
  Text = "TEXT",
  Italic = "ITALIC",
}

export interface Token {
  readonly type: TokenType;
}

export interface TextToken extends Token {
  type: TokenType.Text;
  text: string;
}

export function textToken(text: string): TextToken {
  return { type: TokenType.Text, text };
}

export interface ItalicToken extends Token {
  type: TokenType.Italic;
}

export function italicToken(): ItalicToken {
  return { type: TokenType.Italic };
}
