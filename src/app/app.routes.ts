import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { ProjectReportComponent } from './components/project-report/project-report.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ApprovalComponent } from './components/approval/approval.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'project-report', component: ProjectReportComponent },
  { path: 'explore', component: ExploreComponent }, 
  { path: 'approval', component: ApprovalComponent }, 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
