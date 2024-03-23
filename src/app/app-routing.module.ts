import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './composants/carte/carte.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';
import { JaponComponent } from './composants/japon/japon.component';

const routes: Routes = [
  { path: '', component: CarteComponent },
  { path: 'Egypte', component: GlennJeromeMorganeComponent },
  { path: 'Japon', component: JaponComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
