import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent implements OnInit {

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
