import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full' },
  { path: 'repositories', loadChildren: () => import('./repositories/view/repositories.view.module').then(m => m.RepositoriesViewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
