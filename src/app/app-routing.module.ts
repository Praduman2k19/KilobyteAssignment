import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientsdocumentsComponent } from './clientsdocuments/clientsdocuments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home', component: HomeComponent,
      children: [
      {
        path:  'dashboard',component:  DashboardComponent
      },
      {
        path:  'clients', component:  ClientsComponent,
       
      },
      {
        path:  'clientsdocuments', component:  ClientsdocumentsComponent,
       
      },
      {
        path:  'documents', component:  DocumentsComponent
      },
      {
        path:  'tasks', component:  TasksComponent
      },
      {
        path:  'payments', component:  PaymentsComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

