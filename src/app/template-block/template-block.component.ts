import {Component, Input, OnInit} from '@angular/core';
import {BlockCategoryPipe} from "../core/block-category.pipe";
import {BlockType} from "../block-models/regex-block-models";

interface Block {
  type: BlockType;
  values: Array<string | number>;
}

@Component({
  selector: 'cg-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.css']
})

export class TemplateBlockComponent extends BlockCategoryPipe implements OnInit {
  isSingleValueBlock: boolean;
  isTwoValueBlock: boolean;
  isNoValueBlock: boolean;
  isCaptureValueBlock: boolean;

  @Input() title: string;
  @Input() type: string;
  @Input() block: Block;

  constructor() {
    super();
  }

  ngOnInit() {
    this.isSingleValueBlock = this.getBlockCategory() === 'SingleValue';
    this.isTwoValueBlock = this.getBlockCategory() === 'TwoValue';
    this.isNoValueBlock = this.getBlockCategory() === 'NoValue';
    this.isCaptureValueBlock = this.getBlockCategory() === 'Capture';
  }

  getBlockCategory() {
    return this.transform(this.block.type);
  }
}
