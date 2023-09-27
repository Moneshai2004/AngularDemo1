import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EnamelistComponent } from './enamelist/enamelist.component';
import * as homeComponent from './home/home.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EmpUpdateComponent } from './emp-update/emp-update.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpCreateComponent,
    EmpViewComponent,
    EnamelistComponent,
    homeComponent.HomeComponent,
    EmpUpdateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
