import { NgModule } from '@angular/core';

import { JhipsterCamundaBpmnApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterCamundaBpmnApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterCamundaBpmnApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterCamundaBpmnApplicationSharedCommonModule {}
