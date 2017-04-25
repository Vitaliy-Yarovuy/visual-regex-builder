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

  blocks: Array<RegexBlock>;

  currentRegExp: BehaviorSubject<RegExp>;

  constructor() {
    this.blocks = [];
    this.currentRegExp = new BehaviorSubject(null);
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
