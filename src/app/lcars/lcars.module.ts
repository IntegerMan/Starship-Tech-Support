import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LcarsHeaderComponent } from './lcars-header/lcars-header.component';
import { LcarsFooterComponent } from './lcars-footer/lcars-footer.component';
import { LcarsSidebarComponent } from './lcars-sidebar/lcars-sidebar.component';



@NgModule({
  declarations: [LcarsHeaderComponent, LcarsFooterComponent, LcarsSidebarComponent],
  exports: [
    LcarsHeaderComponent,
    LcarsFooterComponent,
    LcarsSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LcarsModule { }
