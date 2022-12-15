import { Directive, ElementRef, Renderer2 as Renderer } from '@angular/core';

@Directive({
  selector: 'button[fundoAmarelo]',
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer,
  ) {
    this._renderer.addClass(this._elementRef.nativeElement, 'btn');
    this._renderer.addClass(this._elementRef.nativeElement, 'btn-primary');
  }
}
