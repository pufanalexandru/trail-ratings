import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MeasurmentSystemService } from '../../../services/measurment-system.service';

@Component({
  selector: 'trail-width',
  templateUrl: './trail-width.component.html',
  styleUrls: ['./trail-width.component.css']
})
export class TrailWidthComponent implements OnInit {

  @Input() widths: any[];
  @Output() selectedWidth = new EventEmitter();
  private system: any;

  constructor(private systemService: MeasurmentSystemService) { }

  ngOnInit() {
    this.system = this.systemService.getSystem();
  }

  selectWidth(id) {
    this.selectedWidth.emit(id);
  }

}
