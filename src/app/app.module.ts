import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DiretivasModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
