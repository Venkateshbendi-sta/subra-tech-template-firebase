import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('./user-landing/user-landing.module').then((module) => module.UserLandingModule),
      },
    ],
  },
];
