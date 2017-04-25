import { Component, OnInit } from '@angular/core';
import { dragula } from 'dragula';

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
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: '://'},
    {name: 'www'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
