import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';
import { CarteComponent } from './composants/carte/carte.component';
import { CarteInterractifComponent } from './composants/carte-interractif/carte-interractif.component';
import { RubenHugoComponent } from './composants/ruben-hugo/ruben-hugo.component';

@NgModule({
  declarations: [AppComponent, GlennJeromeMorganeComponent, CarteComponent, CarteInterractifComponent, RubenHugoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
