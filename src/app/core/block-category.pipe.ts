import { Pipe, PipeTransform } from '@angular/core';
import { BlockType, BlockCategory, getBlockCategory } from '../block-models/regex-block-models';

@Pipe({
  name: 'blockCategory'
})
export class BlockCategoryPipe implements PipeTransform {

  transform(value: BlockType): String {
    return BlockCategory[getBlockCategory(value)];
  }

}
