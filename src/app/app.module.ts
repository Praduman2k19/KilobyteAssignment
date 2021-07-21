import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { DocumentsComponent } from './documents/documents.component';
import { TasksComponent } from './tasks/tasks.component';
import { PaymentsComponent } from './payments/payments.component';
import { ClientsdocumentsComponent } from './clientsdocuments/clientsdocuments.component';
// import { NgbdPaginationBasic } from './pagination-basic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ClientsComponent,
    DocumentsComponent,
    TasksComponent,
    PaymentsComponent,
    ClientsdocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
