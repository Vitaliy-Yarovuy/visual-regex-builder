import {Component, OnInit} from '@angular/core';
import {RegexBlock, RegexBlockComponent} from '../core/regex-block/regex-block.component';

class StartBlock extends RegexBlock {
  add(expression: VerbalExpression): VerbalExpression {
    return expression.startOfLine();
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent extends RegexBlockComponent implements OnInit {
  getBlock(): RegexBlock {
    return new StartBlock();
  }

  ngOnInit() {
  }

  testMe() {

    this.regexBuilderService.push(0, this.getBlock());

    const result = this.regexBuilderService.generateRegex();
    console.log('test', result);
  }
}
