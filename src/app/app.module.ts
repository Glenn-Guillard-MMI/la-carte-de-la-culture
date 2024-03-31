import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';
import { CarteComponent } from './composants/carte/carte.component';
import { CarteInterractifComponent } from './composants/carte-interractif/carte-interractif.component';
import { RubenHugoComponent } from './composants/ruben-hugo/ruben-hugo.component';
import { ThomasValentinComponent } from './composants/thomas-valentin/thomas-valentin.component';
import { JaponComponent } from './composants/japon/japon.component';

@NgModule({
  declarations: [AppComponent, GlennJeromeMorganeComponent, CarteComponent, CarteInterractifComponent, RubenHugoComponent, ThomasValentinComponent, JaponComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
