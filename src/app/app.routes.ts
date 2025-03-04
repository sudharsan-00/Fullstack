import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { ProjectReportComponent } from './components/project-report/project-report.component';
import { ApprovalComponent } from './components/approval/approval.component';

// ✅ Import standalone component correctly
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'project-report', component: ProjectReportComponent }, 
  { path: 'approval', component: ApprovalComponent }, 
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) }, // ✅ Lazy load standalone component
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
