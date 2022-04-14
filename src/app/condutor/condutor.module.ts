import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondutorPageRoutingModule } from './condutor-routing.module';

import { CondutorPage } from './condutor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondutorPageRoutingModule
  ],
  declarations: [CondutorPage]
})
export class CondutorPageModule {}
