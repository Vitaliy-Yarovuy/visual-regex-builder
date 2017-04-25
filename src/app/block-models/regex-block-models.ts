export enum BlockType {
  AddModifier,
  RemoveModifier,
  EndCapture,
  BeginCapture,
  Or,
  Multiple,
  OneOrMore,
  Range,
  RepeatPrevious,
  Any,
  WhiteSpace,
  LineBreak,
  Br,
  Tab,
  Word,
  Digit,
  SomethingBut,
  Something,
  AnythingBut,
  Anything,
  Text,
  StartOfLine,
  Maybe,
  EndOfLine
}

export interface Block {
  type: BlockType;
  values: Array<string | number>;
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

class EndOfLine extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.endOfLine();
  }
}

class Anything extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.anything();
  }
}

class AnythingBut extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.anythingBut(this.value);
  }
}

class Something extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.something();
  }
}

class SomethingBut extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.somethingBut(this.value);
  }
}

class LineBreak extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.lineBreak();
  }
}

class Br extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.br();
  }
}

class Tab extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.tab();
  }
}

class Word extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.word();
  }
}

class Digit extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.digit();
  }
}

class WhiteSpace extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.whitespace();
  }
}

class Any extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.any(this.value);
  }
}

class Range extends RegexBlock {

  constructor(private values: Array<string>) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    // TODO manually implement range
    return expression.range();
  }
}

class RepeatPrevious extends RegexBlock {

  constructor(private values: Array<string>) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    // TODO manually implement RepeatPrevious
    return expression.repeatPrevious();
  }
}

class Multiple extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.multiple(this.value);
  }
}

class OneOrMore extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.oneOrMore();
  }
}

class Or extends RegexBlock {

  constructor(private value: string) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.or(this.value);
  }
}

class BeginCapture extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.beginCapture();
  }
}

class EndCapture extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.endCapture();
  }
}

class AddModifier extends RegexBlock {

  constructor(private value: RegExpFlags) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.addModifier(this.value);
  }
}

class RemoveModifier extends RegexBlock {

  constructor(private value: RegExpFlags) {
    super();
  }

  add(expression: VerbalExpression): VerbalExpression {
    return expression.removeModifier(this.value);
  }
}

export function getRegexBlock(type: BlockType, values: Array<any>) {
  switch (type) {
    case BlockType.StartOfLine:
      return new StartOfLine();
    case BlockType.EndOfLine:
      return new EndOfLine();
    case BlockType.Maybe:
      return new Maybe(values[0]);
    case BlockType.Text:
      return new Text(values[0]);
    case BlockType.Anything:
      return new Anything();
    case BlockType.AnythingBut:
      return new AnythingBut(values[0]);
    case BlockType.Something:
      return new Something();
    case BlockType.SomethingBut:
      return new SomethingBut(values[0]);
    case BlockType.LineBreak:
      return new LineBreak();
    case BlockType.Br:
      return new Br();
    case BlockType.Tab:
      return new Tab();
    case BlockType.Word:
      return new Word();
    case BlockType.Digit:
      return new Digit();
    case BlockType.WhiteSpace:
      return new WhiteSpace();
    case BlockType.Any:
      return new Any(values[0]);
    case BlockType.Range:
      return new Range(values);
    case BlockType.RepeatPrevious:
      return new RepeatPrevious(values);
    case BlockType.OneOrMore:
      return new OneOrMore();
    case BlockType.Multiple:
      return new Multiple(values[0]);
    case BlockType.Or:
      return new Or(values[0]);
    case BlockType.AddModifier:
      return new AddModifier(values[0]);
    case BlockType.RemoveModifier:
      return new RemoveModifier(values[0]);
    case BlockType.BeginCapture:
      return new BeginCapture();
    case BlockType.EndCapture:
      return new EndCapture();
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
