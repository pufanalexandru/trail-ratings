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
import { TrailWidthOptionComponent } from './components/criteria/trail-width-option/trail-width-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CriteriaComponent,
    ResultComponent,
    UnitPipe,
    TrailWidthOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [
    MeasurmentSystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
