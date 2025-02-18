import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ContributionComponent } from './components/contribution/contribution.component';
import { ProjectReportComponent } from './components/project-report/project-report.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'project-report', component: ProjectReportComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    SidebarComponent, 
    HeaderComponent, 
    DashboardComponent,
    RouterModule,
    LoginComponent
  ]
})
export class AppComponent {
  title = 'project-management-system';
}