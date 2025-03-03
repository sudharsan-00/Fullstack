import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ProjectReportComponent } from './project-report/project-report.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Corrected login route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'project-report', component: ProjectReportComponent }, 
  { path: '**', redirectTo: '' }  // Redirect unknown paths to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
