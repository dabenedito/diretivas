import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = ""

  constructor(
    // private _elementRef: ElementRef,
    // private _render: Renderer2
  ) {  }

  @HostListener('mouseenter') onMouseOver() {
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
}
