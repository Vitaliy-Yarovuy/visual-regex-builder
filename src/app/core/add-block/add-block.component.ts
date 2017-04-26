import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {getRegexBlock} from "../../block-models/regex-block-models";
import {RegexpDataService} from "../services/regexp-data.service";

@Component({
  selector: 'cg-add-block',
  templateUrl: './add-block.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {
  @Output() blockAdd = new EventEmitter();

  blocks: Array<any>;

  constructor(public regexpData: RegexpDataService) {

  }

  ngOnInit() {
    this.blocks = this.regexpData.getRegExpData();
  }

}
