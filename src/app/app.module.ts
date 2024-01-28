import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';

@NgModule({
  declarations: [
    AppComponent,
    GlennJeromeMorganeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
