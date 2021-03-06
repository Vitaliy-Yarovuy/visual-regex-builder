import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Block, BlockType, getRegexBlock} from '../block-models/regex-block-models';

@Injectable()
export class RegexBuilderService {
  modifiers: { 'i': boolean; 'g': boolean; 'm': boolean; 'y': boolean; };
  blocks: Array<Block>;

  currentRegExp: BehaviorSubject<RegExp>;
  currentRegExpError: BehaviorSubject<string>;

  constructor() {
    this.blocks = [];
    this.currentRegExp = new BehaviorSubject(null);
    this.currentRegExpError = new BehaviorSubject(null);
    this.modifiers = {'i': false, 'g': true, 'm': true, 'y': false};
  }

  setModifier(modifier: string, enable: boolean) {
    this.modifiers[modifier] = enable;
    this.generateRegex(this.blocks);
  }

  refreshRegex(): void {
    this.generateRegex(this.blocks);
  }

  generateRegex(blocks: Array<Block>): void {

    this.blocks = blocks.slice();
    this.updateModifiers();

    this.currentRegExpError.next(null);

    try {
      const regExp = this.blocks
        .map(block => getRegexBlock(block.type, block.values))
        .reduce((result, block) => block.add(result), VerEx())
        .toRegExp();
      this.currentRegExp.next(regExp);
    } catch (e) {
      this.currentRegExpError.next(e.message);
    }
  }

  private updateModifiers() {
    this.clearModifiers();
    this.applyModifiers();
  }

  private applyModifiers() {
    for (const key in this.modifiers) {
      const blockType = this.modifiers[key] ? BlockType.AddModifier : BlockType.RemoveModifier;
      this.blocks.push({type: blockType, values: [key]});
    }
  }

  private clearModifiers() {
    this.blocks = this.blocks
      .filter(block => block.type !== BlockType.AddModifier && block.type !== BlockType.RemoveModifier);
  }

  clear() {
    this.blocks = [];
  }
}
