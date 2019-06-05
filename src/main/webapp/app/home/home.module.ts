import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterCamundaBpmnApplicationSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
  imports: [JhipsterCamundaBpmnApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCamundaBpmnApplicationHomeModule {}
