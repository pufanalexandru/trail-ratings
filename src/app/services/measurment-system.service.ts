import { Injectable } from '@angular/core';

@Injectable()
export class MeasurmentSystemService {

  private system: any = {};

  constructor() {
    this.system.type = localStorage['system'] ? localStorage['system'] : 'metric';
    this.system.notation = this.system.type == 'metric' ? 'm' : '"';
  }

  getSystem() {
    return this.system;
  }

  setSystem(type: string) {
    this.system.type = type;
    this.system.notation = type == 'metric' ? 'm' : '"';
  }

}
