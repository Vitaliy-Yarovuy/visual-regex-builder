import {Injectable} from '@angular/core';
import {BlockType} from '../../block-models/regex-block-models';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class RegexpDataService {

  public selectRegexBlock: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }


  getRegExpData() {
    return [
      {name: 'Start of line', type: BlockType.StartOfLine},
      {name: 'End of line', type: BlockType.EndOfLine},

      {name: 'Text', type: BlockType.Text},
      {name: 'Something', type: BlockType.Something},
      {name: 'Something but..', type: BlockType.SomethingBut},
      {name: 'Anything', type: BlockType.Anything},
      {name: 'Anything but..', type: BlockType.AnythingBut},
      {name: 'Or', type: BlockType.Or},
      {name: 'Maybe?', type: BlockType.Maybe},
      {name: 'One or more', type: BlockType.OneOrMore},
      {name: 'Any', type: BlockType.Any},

      {name: 'Space', type: BlockType.WhiteSpace},
      {name: 'Digit (0-9)', type: BlockType.Digit},
      {name: 'Word', type: BlockType.Word},
      {name: 'Tab', type: BlockType.Tab},
      {name: 'Line break', type: BlockType.LineBreak},
      {name: 'Br', type: BlockType.Br},

      {name: 'Multiple', type: BlockType.Multiple},
      {name: 'Repeat previous', type: BlockType.RepeatPrevious},
      {name: 'Range', type: BlockType.Range},

      {name: 'Begin capturing', type: BlockType.BeginCapture},
      {name: 'End capturing', type: BlockType.EndCapture},
    ];
  }

}
