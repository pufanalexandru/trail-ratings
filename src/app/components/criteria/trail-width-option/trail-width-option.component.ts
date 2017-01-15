import { Component, OnInit, Input } from '@angular/core';
import { MeasurmentSystemService } from '../../../services/measurment-system.service';

@Component({
  selector: 'trail-width-option',
  templateUrl: './trail-width-option.component.html',
  styleUrls: ['./trail-width-option.component.css']
})
export class TrailWidthOptionComponent implements OnInit {

  @Input() width: number;
  private system: any;

  constructor(private systemService: MeasurmentSystemService) { }

  ngOnInit() {
    this.system = this.systemService.getSystem();
  }

}
