import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[centered]'
})
export class CenteredDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.textAlign = 'center';
   }

}
