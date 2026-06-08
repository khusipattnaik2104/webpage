import { Routes } from '@angular/router';
import {Contact} from './component/contact/contact';
import {Dashboard} from './component/dashboard/dashboard';
import {Service} from './component/service/service';



export const routes: Routes = [
  { path: 'contact',
     component: Contact 
    },
  { path: 'dashboard',
     component: Dashboard 
    },
  { path: 'service', 
    component: Service
 },
  { path: '', 
    redirectTo: '/dashboard', pathMatch: 'full' }
];
