import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

import { StudentComponent } from './student/student';

import { AboutComponent } from './about/about';
import { LoginComponent } from './login/login';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'students/:id',
        component: StudentComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'login',
        component: LoginComponent
    }
];
