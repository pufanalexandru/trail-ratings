import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html'
})
export class CriteriaComponent implements OnInit {

  private widths: any[];
  private selectedWidth: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.widths = this.data.getWidths();
  }

  selectWidth(id) {
    console.log(id);
    this.selectedWidth = id;
  }

}
