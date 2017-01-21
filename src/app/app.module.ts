import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule, DropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { ResultComponent } from './components/result/result.component';
import { UnitPipe } from './pipes/unit.pipe';
import { MeasurmentSystemService } from './services/measurment-system.service';
import { DataService } from './services/data.service';
import { TrailWidthComponent } from './components/criteria/trail-width/trail-width.component';
import { CenteredDirective } from './directives/centered.directive';
import { TreadSurfaceComponent } from './components/criteria/tread-surface/tread-surface.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CriteriaComponent,
    ResultComponent,
    UnitPipe,
    TrailWidthComponent,
    CenteredDirective,
    TreadSurfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [
    MeasurmentSystemService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
