import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tread-surface-option',
  templateUrl: './tread-surface-option.component.html',
  styleUrls: ['./tread-surface-option.component.css']
})
export class TreadSurfaceOptionComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
