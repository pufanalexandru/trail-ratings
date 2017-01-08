import { Injectable } from '@angular/core';

@Injectable()
export class MeasurmentSystemService {

  private system: any = {};

  constructor() {
    this.system.type = localStorage['system'] ? localStorage['system'] : 'metric';
  }

  getSystem() {
    return this.system;
  }

  setSystem(type: string) {
    this.system.type = type;
  }

}
