import { Component, OnInit } from '@angular/core';
import { dragula } from 'dragula';
import {RegexpDataService} from '../core/services/regexp-data.service';

@Component({
  selector: 'cg-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent extends RegexpDataService implements OnInit {

  blocks: Array<any>;

  constructor() {
    super();
  }

  ngOnInit() {
    this.blocks = this.getRegExpData();
  }

}
