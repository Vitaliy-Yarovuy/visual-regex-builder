import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';

@Component({
  selector: 'cg-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  regExp = /[a-zA-Z\d\s\-,#.+]+/;

  constructor(private regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
    this.change();
  }

  change() {
    this.regExp = this.regexBuilderService.generateRegex();

  }
}
