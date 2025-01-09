import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'trips',
        pathMatch: 'full'
    },
    {
        path: 'trips',
        pathMatch: 'full',
        loadComponent: () => import('./components/trips/trips.component').then((component) => component.TripsComponent)
    },
    {
        path: 'trips/:id',
        pathMatch: 'full',
        loadComponent: () => import('./components/trip-detail/trip-detail.component').then((component) => component.TripDetailComponent)
    }
];
