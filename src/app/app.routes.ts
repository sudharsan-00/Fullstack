import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { ProjectReportComponent } from './components/project-report/project-report.component'; // Import the new component
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'project-report', component: ProjectReportComponent }, // Add the route
  { path: '**', redirectTo: '' } // Fallback for unknown routes
];
