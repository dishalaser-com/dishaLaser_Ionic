import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCasePageRoutingModule } from './new-case-routing.module';

import { NewCasePage } from './new-case.page';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCasePageRoutingModule,
    AngularMultiSelectModule,
  ],
  declarations: [NewCasePage]
})
export class NewCasePageModule {}
