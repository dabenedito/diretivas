import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'div[highlight]',
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
