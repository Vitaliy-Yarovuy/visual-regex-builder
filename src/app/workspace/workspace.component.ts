import {Component, OnChanges, OnInit, SimpleChanges, ViewChildren} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {getRegexBlock, BlockType} from '../block-models/models';
import {DragulaService} from 'ng2-dragula';

interface Block {
  type: BlockType;
  values: Array<string | number>;
}

const indexOf = (arr: any, item: any) => ([].indexOf.call(arr, item));

@Component({
  selector: 'cg-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit, OnChanges {

  public selectedBlock: Block|null = null;

  public blocks: Array<Block> = [
    { type: BlockType.StartOfLine, values: []},
    { type: BlockType.Text, values: ['http']},
    { type: BlockType.Maybe, values: ['s']}
  ];

  constructor(public regexBuilderService: RegexBuilderService, public dragulaService: DragulaService) {

  }

  ngOnInit() {

    this.dragulaService.drag.subscribe((args) => {
      const  [bag, element, parent] = args;
      const index = indexOf(parent.children, element);
      const item = index + 1 ? this.blocks[index] : null;
      console.log('drag:', item, args);
      this.selectedBlock = item;
    });

    this.dragulaService.drop.subscribe((args) => {
      const [bag, element, parent] = args;
      const index = indexOf(parent.children, element);
      const oldIndex = this.blocks.indexOf(this.selectedBlock);
      this.blocks.splice(oldIndex, 1);
      this.blocks.splice(index, 0, this.selectedBlock);
      this.selectedBlock = null;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    const blocks = this.blocks
      .map(block => getRegexBlock(block.type, block.values));

    this.regexBuilderService.set(blocks);
  }


}
