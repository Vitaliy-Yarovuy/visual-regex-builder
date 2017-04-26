import { Component, OnInit } from '@angular/core';
import { dragula } from 'dragula';
import {RegexpDataService} from '../core/services/regexp-data.service';

@Component({
  selector: 'cg-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent implements OnInit {

  blocks: Array<any>;

  constructor(public regexpData: RegexpDataService) {
  }

  ngOnInit() {
    this.blocks = this.regexpData.getRegExpData();

    this.regexpData.selectRegexBlock.subscribe(
      function (isSelected) {
        console.log('Next: ' + isSelected);
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });
  }

}
