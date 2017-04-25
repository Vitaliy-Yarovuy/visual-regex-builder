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

  constructor(private regexBuilderService: RegexBuilderService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.regExp = this.regexBuilderService.currentRegExp;
  }

  onCopy() {
    this.snackBar.open('RegExp is copied to clipboard!', null, {
      duration: 5000
    });
  }
}
