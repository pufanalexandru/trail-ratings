import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tread-surface',
  templateUrl: './tread-surface.component.html',
  styleUrls: ['./tread-surface.component.css']
})
export class TreadSurfaceComponent {

  @Input() surfaces: any[];
  @Output() selectedSurface = new EventEmitter();

  selectSurface(id) {
    this.selectedSurface.emit(id);
  }

}
