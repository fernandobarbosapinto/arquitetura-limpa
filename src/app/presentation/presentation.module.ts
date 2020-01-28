import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { ElephantCardListComponent } from './elephant-card-list/elephant-card-list.component';



@NgModule({
  declarations: [ElephantCardListComponent],
  imports: [
    CommonModule,
    CoreModule,
    DataModule
  ],
  exports: [ElephantCardListComponent]
})
export class PresentationModule { }
