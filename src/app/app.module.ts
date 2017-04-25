import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegexBlockComponent } from './core/regex-block/regex-block.component';
import { BlocksContainerComponent } from './blocks-container/blocks-container.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    RegexBlockComponent,
    BlocksContainerComponent,
    WorkspaceComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
