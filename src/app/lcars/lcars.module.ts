import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LcarsHeaderComponent } from './lcars-header/lcars-header.component';
import { LcarsFooterComponent } from './lcars-footer/lcars-footer.component';
import { LcarsSidebarComponent } from './lcars-sidebar/lcars-sidebar.component';
import { LcarsButtonComponent } from './lcars-button/lcars-button.component';



@NgModule({
  declarations: [LcarsHeaderComponent, LcarsFooterComponent, LcarsSidebarComponent, LcarsButtonComponent],
  exports: [
    LcarsHeaderComponent,
    LcarsFooterComponent,
    LcarsSidebarComponent,
    LcarsButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LcarsModule { }
