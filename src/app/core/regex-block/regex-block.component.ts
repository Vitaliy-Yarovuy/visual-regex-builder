import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from '../regex-builder.service';

@Component({
  selector: 'cg-regex-block',
  templateUrl: './regex-block.component.html',
  styleUrls: ['./regex-block.component.css']
})
export class RegexBlockComponent implements OnInit {

  constructor(public regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
  }

  getBlock() {

  }

  onDrop() {
    // TODO provide correct index
    const index = 1;
    const block = this.getBlock();
    // this.regexBuilderService.push(index, block);
  }
}
