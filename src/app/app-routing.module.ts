import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './composants/carte/carte.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';
import { RubenHugoComponent } from './composants/ruben-hugo/ruben-hugo.component';
import { ThomasValentinComponent } from './composants/thomas-valentin/thomas-valentin.component';
import { JaponComponent } from './composants/japon/japon.component';

const routes: Routes = [
  { path: '', component: CarteComponent },
  { path: 'Egypte', component: GlennJeromeMorganeComponent },
  { path: 'Greece', component: RubenHugoComponent },
  { path: 'Chili', component: ThomasValentinComponent },
  { path: 'Japon', component: JaponComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
