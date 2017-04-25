import { Pipe, PipeTransform } from '@angular/core';
import { BlockType } from '../block-models/regex-block-models';

@Pipe({
  name: 'blockTypes'
})
export class BlockTypesPipe implements PipeTransform {

  transform(value: BlockType): String {
    return BlockType[value] || 'unknown type';
  }
}

