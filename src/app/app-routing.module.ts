import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/components/page-not-found/page-not-found.component';

// Entry point module is lazy loaded as first page for user.
const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./entry-point/entry-point.module').then(m => m.EntryPointModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
