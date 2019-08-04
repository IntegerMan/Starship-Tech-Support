import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LcarsHeaderComponent } from './lcars-header/lcars-header.component';
import { LcarsFooterComponent } from './lcars-footer/lcars-footer.component';
import { LcarsSidebarComponent } from './lcars-sidebar/lcars-sidebar.component';
import { LcarsButtonComponent } from './lcars-button/lcars-button.component';
import { LcarsNavButtonComponent } from './lcars-nav-button/lcars-nav-button.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LcarsHeaderComponent, LcarsFooterComponent, LcarsSidebarComponent, LcarsButtonComponent, LcarsNavButtonComponent],
  exports: [
    LcarsHeaderComponent,
    LcarsFooterComponent,
    LcarsSidebarComponent,
    LcarsButtonComponent,
    LcarsNavButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LcarsModule { }
