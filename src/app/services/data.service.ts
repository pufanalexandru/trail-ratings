import { Injectable } from '@angular/core';

var model = require('../data.json');

@Injectable()
export class DataService {

  private data: any = model;

  public getWidths(): any[] {
    return this.data['trail-width'];
  }

}
