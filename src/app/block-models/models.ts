export enum BlockType {
  Text,
  StartOfLine,
  Maybe
}

export abstract class RegexBlock {
  abstract add(expression: VerbalExpression): VerbalExpression
}

class Text extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.then(this.value);
  }
}

class Maybe extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.maybe(this.value);
  }
}

class StartOfLine extends RegexBlock {

  add(expression: VerbalExpression): VerbalExpression {
    return expression.startOfLine();
  }
}

export function getRegexBlock(type: BlockType, values: Array<any>) {
  switch (type) {
    case BlockType.StartOfLine:
      return new StartOfLine();
    case BlockType.Maybe:
      return new Maybe(values[0]);
    case BlockType.Text:
      return new Text(values[0]);
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
