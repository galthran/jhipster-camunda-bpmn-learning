import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'jhipsterCamundaBpmnApplication'
    }
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'jhipsterCamundaBpmnApplication',
      error403: true
    }
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'jhipsterCamundaBpmnApplication',
      error404: true
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
