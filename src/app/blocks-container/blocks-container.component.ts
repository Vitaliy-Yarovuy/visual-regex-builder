import { Component, OnInit } from '@angular/core';
import { dragula } from 'dragula';
import {RegexpDataService} from '../core/services/regexp-data.service';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'cg-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent implements OnInit {

  blocks: Array<any>;
  toRemove: BehaviorSubject<boolean> ;

  constructor(public regexpData: RegexpDataService) {
  }

  ngOnInit() {
    this.blocks = this.regexpData.getRegExpData();
    this.toRemove = this.regexpData.selectRegexBlock;
  }

}
