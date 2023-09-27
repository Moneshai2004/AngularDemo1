import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { HomeComponent } from './home/home.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent }, 
  { path: 'view', component: EmpViewComponent },  
  { path: 'add', component: EmpCreateComponent }, 
  { path: 'updateEmployee/:id', component: EmpUpdateComponent },

];  

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
