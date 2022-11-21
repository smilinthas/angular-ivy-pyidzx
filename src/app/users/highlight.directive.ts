import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { AppService } from '../app.service';

@Directive({
  selector: '[highlight]',
})
export class HighLightDirective {
  @Input('highlight') highLightColor;
  constructor(public eleRef: ElementRef,public appService: AppService) {}

  @HostListener('mouseenter') mouseenter() {
    this.eleRef.nativeElement.style.color = this.appService.highlight;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.eleRef.nativeElement.style.color = 'black';
  }
}
