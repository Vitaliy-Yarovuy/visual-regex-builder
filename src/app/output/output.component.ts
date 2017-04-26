import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {Observable} from 'rxjs';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'cg-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  regExp: Observable<RegExp>;
  error: Observable<string>;

  constructor(private regexBuilderService: RegexBuilderService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.regExp = this.regexBuilderService.currentRegExp;
    this.error = this.regexBuilderService.currentRegExpError;
  }

  onCopy() {
    this.snackBar.open('RegExp is copied to clipboard!', null, {
      duration: 5000
    });
  }
}
