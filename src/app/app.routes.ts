import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', loadComponent: () => import('./blog/blog.component').then(mod => mod.BlogComponent) },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then(mod => mod.ProjectsComponent) },
    { path: 'about-us', loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent) },
    { path: 'services', loadChildren: () => import('./services/services.routes').then(mod => mod.routes) },
    { path: '**', redirectTo: 'home' },
];