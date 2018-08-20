
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';

import {AppComponent} from "./app.component";



import {SolarSearchComponent} from "./components/solar-search.component";


export const appRoutes: Routes = [
    {
        path: 'search',
        component: SolarSearchComponent
    },

    {
        path: '',
        component: SolarSearchComponent
    }




];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
