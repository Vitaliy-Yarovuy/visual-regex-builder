import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from '../regex-builder.service';
import {VerbalExpression} from 'verbal-expressions';

export abstract class RegexBlock {
  abstract add(expression: VerbalExpression): VerbalExpression
}

@Component({
  selector: 'app-regex-block',
  templateUrl: './regex-block.component.html',
  styleUrls: ['./regex-block.component.css']
})
export abstract class RegexBlockComponent implements OnInit {

  constructor(public regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
  }

  abstract getBlock(): RegexBlock;

  onDrop() {
    // TODO provide correct index
    const index = 1;
    const block = this.getBlock();
    this.regexBuilderService.push(index, block);
  }
}
