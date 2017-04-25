import {Injectable} from '@angular/core';
import {RegexBlock} from './regex-block/regex-block.component';

interface BlockElement {
  index: number;
  block: RegexBlock;
}

@Injectable()
export class RegexBuilderService {

  blocks: Array<RegexBlock>;

  constructor() {
    this.blocks = [];
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
  generateRegex(): RegExp {
    return this.blocks
      .reduce((result, block) => block.add(result), VerEx())
      .toRegExp();
  }

  clear() {
    this.blocks = [];
  }
}
