import {Component, OnChanges, OnInit, Input, SimpleChanges} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {BlockType} from '../block-models/regex-block-models';
import {BlockCategoryPipe} from "../core/block-category.pipe";


interface Block {
  type: BlockType;
  values: Array<string | number>;
}


@Component({
  selector: 'cg-regex-block',
  templateUrl: './regex-block.component.html',
  styleUrls: ['./regex-block.component.css'],
})
export class RegexBlockComponent extends BlockCategoryPipe implements OnInit {

  isEditable: boolean;

  @Input() block: Block;

  constructor() {
    super();
  }

  ngOnInit() {
    this.isEditable = this.defineWhetherBlockEditable();
  }

  getBlockCategory() {
    return this.transform(this.block.type);
  }

  defineWhetherBlockEditable(): boolean {
    const blockCategory = this.getBlockCategory();

    return (blockCategory === 'SingleValue') || (blockCategory === 'TwoValue');
  }

  getCaptureSymbol() {
    return this.block.type === 3 ? '(' : ')';
  }
}
