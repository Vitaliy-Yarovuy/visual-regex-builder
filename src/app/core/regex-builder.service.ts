import {Injectable} from '@angular/core';
import {RegexBlock} from './regex-block/regex-block.component';

interface BlockElement {
  index: number;
  block: RegexBlock;
}

@Injectable()
export class RegexBuilderService {

  blocks: Array<BlockElement>;

  constructor() {
    this.blocks = [];
  }

  push(index: number, block: RegexBlock) {
    this.blocks.push({index, block});
  }

  generateRegex(): RegExp {
    console.log('this.blocks', this.blocks);
    return this.blocks
      .sort((a, b) => a.index - b.index)
      .reduce((result, element) => element.block.add(result), VerEx())
      .toRegExp();
  }
}
