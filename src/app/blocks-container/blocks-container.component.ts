import { Component, OnInit } from '@angular/core';
import { dragula } from 'dragula';
import {BlockType} from "../block-models/regex-block-models";

@Component({
  selector: 'cg-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent implements OnInit {

  blocks = [
    {name: 'Space', type: BlockType.WhiteSpace},
    {name: 'Begin capturing', type: BlockType.BeginCapture},
    {name: 'End capturing', type: BlockType.EndCapture},
    {name: 'Multiple', type: BlockType.Multiple},
    {name: 'Repeat previous', type: BlockType.RepeatPrevious},
    {name: 'Digit (0-9)', type: BlockType.Digit},
    {name: 'Word', type: BlockType.Word},
    {name: 'Tab', type: BlockType.Tab},
    {name: 'Text', type: BlockType.Text},
    {name: 'Line break', type: BlockType.LineBreak},
    {name: 'Br', type: BlockType.Br},
    {name: 'Something', type: BlockType.Something},
    {name: 'Something but..', type: BlockType.SomethingBut},
    {name: 'Anything', type: BlockType.Anything},
    {name: 'Anything but..', type: BlockType.AnythingBut},
    {name: 'Or', type: BlockType.Or},
    {name: 'Range', type: BlockType.Range},
    {name: 'Maybe?', type: BlockType.Maybe},
    {name: 'One or more', type: BlockType.OneOrMore},
    {name: 'Any', type: BlockType.Any},
    {name: 'Start of line', type: BlockType.StartOfLine},
    {name: 'End of line', type: BlockType.EndOfLine}
  ];

  constructor() { }

  ngOnInit() {
  }

}
