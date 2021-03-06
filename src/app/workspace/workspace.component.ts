import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RegexBuilderService} from '../core/regex-builder.service';
import {Block, BlockType} from '../block-models/regex-block-models';
import {DragulaService} from 'ng2-dragula';
import {RegexpDataService} from "../core/services/regexp-data.service";


const indexOf = (arr: any, item: any) => ([].indexOf.call(arr, item));

@Component({
  selector: 'cg-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit, OnChanges{

  public selectedBlock: Block | null = null;

  public blocks: Array<Block> = [
    {type: BlockType.StartOfLine, values: []},
    {type: BlockType.Text, values: ['http']},
    {type: BlockType.Maybe, values: ['s']},
    {type: BlockType.Anything, values: []},
    {type: BlockType.EndOfLine, values: []}
  ];

  constructor(public regexBuilderService: RegexBuilderService,
              public dragulaService: DragulaService,
              public ref: ChangeDetectorRef,
              public regexData: RegexpDataService) {
  }

  public blockAdd(type: BlockType){
    this.blocks.push({
      type: type,
      values: ['', '']
    });
  }

  ngOnInit() {
    const isSource = (el) => el.classList.contains('for-copy');
    const isRemove = (el) => el.classList.contains('for-remove');
    const buildBlockFromSource = (el) => ({
      type: +el.getAttribute('data-type'),
      values: ['', '']
    });

    this.dragulaService.setOptions('drag-bag', {
      copy: isSource,
    });

    this.dragulaService.drag.subscribe((args) => {
      const [bag, element, parent] = args;
      if (!isSource(element)) {
        const index = indexOf(parent.children, element);
        const item = index + 1 ? this.blocks[index] : null;
        this.selectedBlock = item;
        this.regexData.selectRegexBlock.next(true);
      }
    });

    this.dragulaService.drop.subscribe((args) => {
      const [bag, element, parent] = args;

      if (!parent) {
        element.remove();
        return;
      }

      if (isSource(element)) {
        const index = indexOf(parent.children, element);
        this.blocks.splice(index, 0, buildBlockFromSource(element));
        element.remove();
      } else {
        const oldIndex = this.blocks.indexOf(this.selectedBlock);
        this.blocks.splice(oldIndex, 1);
        if (isRemove(parent)) {
          element.remove();
        } else {
          const index = indexOf(parent.children, element);
          this.blocks.splice(index, 0, this.selectedBlock);
        }
        this.selectedBlock = null;
        this.regexData.selectRegexBlock.next(false);
      }
      this.regexBuilderService.generateRegex(this.blocks);
    });

    this.dragulaService.cancel.subscribe((args) => {
      this.regexData.selectRegexBlock.next(false);
    });

    this.regexBuilderService.generateRegex(this.blocks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.regexBuilderService.generateRegex(this.blocks);
  }

  clear() {
    this.blocks = [];
    this.regexBuilderService.generateRegex(this.blocks);
  }
}
