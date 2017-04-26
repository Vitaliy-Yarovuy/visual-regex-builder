import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {HighlightPipe} from "./highlight.pipe";

@Component({
  selector: 'cg-testing-area',
  templateUrl: './testing-area.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./testing-area.component.css']
})
export class TestingAreaComponent implements OnInit {
  timeout;

  search: RegExp;
  text = `Sample text for testing: 
          abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 
          0123456789 _+-.,!@#$%^&*();\/|<>"' 
          12345 -98.7 3.141 .6180 9,000 +42 
          555.123.4567	+1-(800)-555-2468
          foo@demo.net	bar.ba@test.co.uk
          www.demo.com	http://foo.co.uk/
          http://regexr.com/foo.html?q=bar
          https://mediatemple.net`;

  constructor(private regexBuilderService: RegexBuilderService, private highlightPipe: HighlightPipe) {
  }

  ngOnInit() {
    this.regexBuilderService.currentRegExp.subscribe((newRegExp: RegExp) => {
      this.search = newRegExp;
      this.text = this.highlightPipe.transform(this.text, newRegExp);
    });
  }

  onInput(event) {

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.text = this.highlightPipe.transform(event.target.textContent, this.search);
    }, 2000);
  }
}
