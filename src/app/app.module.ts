import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';

import {AppComponent} from './app.component';
import {BlocksContainerComponent} from './blocks-container/blocks-container.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {OutputComponent} from './output/output.component';
import {RegexBuilderService} from './core/regex-builder.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddBlockComponent } from './core/add-block/add-block.component';
import { TemplateBlockComponent } from './template-block/template-block.component';
import { FlagComponent } from './output/flag/flag.component';
import {ClipboardModule} from 'ngx-clipboard/dist';
import {RegexBlockComponent} from './regex-block/regex-block.component';
import { BlockTypesPipe } from './core/block-types.pipe';
import { TestingAreaComponent } from './testing-area/testing-area.component';
import { HighlightPipe } from './testing-area/highlight.pipe';
import { BlockCategoryPipe } from './core/block-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlocksContainerComponent,
    WorkspaceComponent,
    OutputComponent,
    AddBlockComponent,
    TemplateBlockComponent,
    RegexBlockComponent,
    FlagComponent,
    BlockTypesPipe,
    TestingAreaComponent,
    HighlightPipe,
    BlockTypesPipe,
    BlockCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    DragulaModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [RegexBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
