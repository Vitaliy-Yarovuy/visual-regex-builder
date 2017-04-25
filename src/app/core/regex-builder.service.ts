import {Injectable} from '@angular/core';
import {RegexBlock} from './regex-block/regex-block.component';
import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';
import {Block, BlockType, getRegexBlock} from '../block-models/regex-block-models';

interface BlockElement {
  index: number;
  block: RegexBlock;
}

@Injectable()
export class RegexBuilderService {
  modifiers: { 'i': boolean; 'g': boolean; 'm': boolean; 'y': boolean; };
  blocks: Array<Block>;

  currentRegExp: BehaviorSubject<RegExp>;

  constructor() {
    this.blocks = [];
    this.currentRegExp = new BehaviorSubject(null);
    this.modifiers = {'i': false, 'g': true, 'm': true, 'y': false};
  }

  setModifier(modifier: string, enable: boolean) {
    this.modifiers[modifier] = enable;
    this.generateRegex(this.blocks);
  }

  //
  // push(index: number, block: RegexBlock) {
  //   this.blocks.push({index, block});
  // }

  // push(index: number, block: RegexBlock) {
  //   this.blocks.push({index, block});
  // }
  //
  // generateRegex(): RegExp {
  //   console.log('this.blocks', this.blocks);
  //   return this.blocks
  //     .sort((a, b) => a.index - b.index)
  //     .reduce((result, element) => element.block.add(result), VerEx())
  //     .toRegExp();
  // }
  generateRegex(blocks: Array<Block>): void {

    this.blocks = blocks.slice();

    for (const key in this.modifiers) {
      blocks.push({
        type: this.modifiers[key] ? BlockType.AddModifier : BlockType.RemoveModifier,
        values: [key]
      });
    }

    const regExp = blocks
      .map(block => getRegexBlock(block.type, block.values))
      .reduce((result, block) => block.add(result), VerEx())
      .toRegExp();

    this.currentRegExp.next(regExp);
  }

  clear() {
    this.blocks = [];
  }
}
