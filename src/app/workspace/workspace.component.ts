import {Component, OnChanges, OnInit, SimpleChanges, ViewChildren} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {getRegexBlock, BlockType} from '../block-models/models';

interface Block {
  type: BlockType;
  values: Array<string | number>;
}

@Component({
  selector: 'cg-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit, OnChanges {

  blocks: Array<Block> = [
    { type: BlockType.StartOfLine, values: []},
    { type: BlockType.Text, values: ['http']},
    { type: BlockType.Maybe, values: ['s']}
  ];

  constructor(public regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    const blocks = this.blocks
      .map(block => getRegexBlock(block.type, block.values));

    this.regexBuilderService.set(blocks);
  }


}
