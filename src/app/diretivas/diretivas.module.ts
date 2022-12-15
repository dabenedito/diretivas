import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { NgElvisComponent } from './ng-elvis/ng-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { CustomComponent } from './custom/custom.component';
import { FundoAmareloDirective } from '../shared/directives/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/directives/highlight-mouse.directive';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { NgElseDirective } from '../shared/directives/ng-else.directive';

@NgModule({
  declarations: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgElvisComponent,
    NgContentComponent,
    CustomComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgElvisComponent,
    NgContentComponent,
    CustomComponent,
  ],
})
export class DiretivasModule {
}
