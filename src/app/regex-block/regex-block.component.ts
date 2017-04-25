import {Component, OnChanges, OnInit, Input, SimpleChanges} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import { BlockType} from '../block-models/regex-block-models';


interface Block {
  type: BlockType;
  values: Array<string | number>;
}


@Component({
  selector: 'cg-regex-block',
  templateUrl: './regex-block.component.html',
  styleUrls: ['./regex-block.component.css'],
})
export class RegexBlockComponent implements OnInit {

  @Input() block: Block;

  constructor() {
  }

  ngOnInit() {
  }



}
