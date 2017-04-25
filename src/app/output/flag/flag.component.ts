import {Component, Input, OnInit, Output} from '@angular/core';
import {RegexBuilderService} from '../../core/regex-builder.service';

@Component({
  selector: 'cg-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  @Input() title: string;
  @Input() modifier: RegExpFlags;
  @Input() checked: boolean;

  constructor(private regexBuilderService: RegexBuilderService) {
  }

  ngOnInit() {
  }

  onChange(event) {
    this.regexBuilderService.setModifier(this.modifier, event.checked);
  }
}
