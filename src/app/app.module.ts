import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppComponent } from './app.component';
import { FlowChartComponent } from './components/flow-chart/flow-chart.component';
import { FlowCardNodeComponent } from './components/flow-card-node/flow-card-node.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowChartComponent,
    FlowCardNodeComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
