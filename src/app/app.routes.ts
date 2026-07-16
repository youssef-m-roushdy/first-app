import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

import { StudentComponent } from './student/student';

import { AboutComponent } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'students',
        component: StudentComponent
    },

    {
        path: 'about',
        component: AboutComponent
    }
];
