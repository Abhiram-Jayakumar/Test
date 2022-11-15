import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'view', component: ViewDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
