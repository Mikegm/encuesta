import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextoComponent } from './templates/templateA';

const appRoutes: Routes = [
    {path: 'texto', component: TextoComponent},
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
