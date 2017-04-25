import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  regExp = /[a-zA-Z\d\s\-,#.+]+/;

  constructor() { }

  ngOnInit() {
  }

}
