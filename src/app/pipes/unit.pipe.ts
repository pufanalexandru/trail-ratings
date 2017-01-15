import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: number, system: string): number {
    if (system == 'metric') {
      return value / 39.3700787;
    }

    return value;
  }

}
