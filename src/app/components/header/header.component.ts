import { Component, OnInit } from '@angular/core';

import { MeasurmentSystemService } from '../../services/measurment-system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private isCollapsed: boolean = true;
  private system: any;

  constructor(private systemService: MeasurmentSystemService) { }

  ngOnInit() {
    this.system = this.systemService.getSystem();
  }

  changeSystem(newSystem: string) {
    this.systemService.setSystem(newSystem);
  }

}
