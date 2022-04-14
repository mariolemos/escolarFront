import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondutorPage } from './condutor.page';

const routes: Routes = [
  {
    path: '',
    component: CondutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondutorPageRoutingModule {}
