import {Component, OnInit} from '@angular/core';

enum BlockType {
  StartOfLine,
  Maybe
}

interface Block {
  type: BlockType;
  values: Array<string | number>;
}

@Component({
  selector: 'cg-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  blocks: Array<Block>;

  constructor() {
  }

  ngOnInit() {
  }

}
