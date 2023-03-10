import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]',
})
export class NgElseDirective {
  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    } else {
      setTimeout(() => this._viewContainerRef.clear(), 1000)
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
  ) {  }

}
