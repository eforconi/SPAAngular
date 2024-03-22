import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSelectorComponent } from './modules/components/location-selector/location-selector.component';
import { LoginComponent } from './modules/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'location', component: LocationSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
