import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './composants/carte/carte.component';
import { GlennJeromeMorganeComponent } from './composants/glenn-jerome-morgane/glenn-jerome-morgane.component';

const routes: Routes = [
  { path: '', component: CarteComponent },
  { path: 'Egypte', component: GlennJeromeMorganeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
