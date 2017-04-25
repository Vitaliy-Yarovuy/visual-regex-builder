import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { BlocksContainerComponent } from './blocks-container/blocks-container.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { OutputComponent } from './output/output.component';
import { TestComponent } from './test/test.component';
import {RegexBuilderService} from './core/regex-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    BlocksContainerComponent,
    WorkspaceComponent,
    OutputComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [RegexBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
