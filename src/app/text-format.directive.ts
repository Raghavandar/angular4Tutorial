import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextFormat]'
})
export class TextFormatDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appTextFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: String = this.el.nativeElement.value;
    if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
