import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html'
})
export class CriteriaComponent implements OnInit {

  private widths: any[];
  private surfaces: any[];

  private selectedWidth: number;
  private selectedSurface: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.widths = this.data.getWidths();
    this.surfaces = this.data.getSurfaces();
  }

  selectWidth(id) {
    this.selectedWidth = id;
  }

  selectSurface(id) {
    this.selectedSurface = id;
  }

}
