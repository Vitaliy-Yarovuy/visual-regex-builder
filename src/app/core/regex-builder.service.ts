import {Injectable} from '@angular/core';
import {RegexBlock} from './regex-block/regex-block.component';
import {BehaviorSubject, Observable, Observer, Subject} from "rxjs";

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

  set(blocks: Array<RegexBlock>) {
    this.blocks = blocks;
  }

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
  generateRegex(): void {
    const regExp = this.blocks
      .reduce((result, block) => block.add(result), VerEx())
      .toRegExp();

    console.log('regExp', regExp);
    this.currentRegExp.next(regExp);
  }

  clear() {
    this.blocks = [];
  }
}
