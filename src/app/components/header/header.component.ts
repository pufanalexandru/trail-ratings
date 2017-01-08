import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private isCollapsed: boolean = true;
  private system: string = 'metric';

  constructor() { }

  ngOnInit() {
  }

}
