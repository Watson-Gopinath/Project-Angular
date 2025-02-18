import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistorComponent } from './registor/registor.component';

const routes: Routes = [
  {path:"registor",component:RegistorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
