import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cg-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.css']
})
export class TemplateBlockComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;

  constructor() {
  }

  ngOnInit() {
  }

}
