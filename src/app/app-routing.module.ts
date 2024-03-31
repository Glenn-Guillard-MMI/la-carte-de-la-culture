import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './composants/carte/carte.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';
import { RubenHugoComponent } from './composants/ruben-hugo/ruben-hugo.component';

const routes: Routes = [
  { path: '', component: CarteComponent },
  { path: 'Egypte', component: GlennJeromeMorganeComponent },
  { path: 'Greece', component: RubenHugoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
