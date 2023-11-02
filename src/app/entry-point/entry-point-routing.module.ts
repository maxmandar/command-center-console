import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/components/landing/landing.component';
import { AuthenticationGuard } from '../authentication/guard/guards/authentication.guard';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent 
  },
  {
    path: '',
    loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthenticationGuard] // This guard checks if the user is authenticated
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryPointRoutingModule { }
