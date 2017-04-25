import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  blocks = [
    {name: 'Space'},
    {name: 'http'},
    {name: 's'},
    {name: '://'},
    {name: 'www'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
