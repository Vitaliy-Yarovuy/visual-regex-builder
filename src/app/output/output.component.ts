import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {Observable} from "rxjs";

@Component({
  selector: 'cg-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  regExp: Observable<RegExp>;

  constructor(private regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
    // regExp = this.regexBuilderService.currentRegExp.subscribe(value => this.regExp = value);
    this.regExp = this.regexBuilderService.currentRegExp;
  }
}
