import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterCamundaBpmnApplicationSharedLibsModule,
  JhipsterCamundaBpmnApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterCamundaBpmnApplicationSharedLibsModule, JhipsterCamundaBpmnApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterCamundaBpmnApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCamundaBpmnApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterCamundaBpmnApplicationSharedModule
    };
  }
}
