import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddCargoComponent } from './add-cargo/add-cargo.component';
import { SearchCargoComponent } from './search-cargo/search-cargo.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'search-cargo',
    pathMatch: 'full'
  },
  {
    path: 'search-cargo',
    component: SearchCargoComponent
  },
  {
    path: 'add-cargo',
    component: AddCargoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
