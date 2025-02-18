import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';// Import FormsModule// Import CommonModule
interface WorkLog {
  week: number;
  workLog: string;
  submissionDate: Date;
}


@Component({
  selector: 'app-project-report',
  standalone: true,
  imports: [ CommonModule,FormsModule,RouterModule],
  templateUrl: './project-report.component.html',
  styleUrl: './project-report.component.css'
})

export class ProjectReportComponent {
  dueDate: Date = new Date('2024-12-31');  // Example due date
  workLogs = [
    { week: 1, log: 'Completed initial setup and project planning.', submissionDate: new Date() }
  ];

  // Variables for binding form input
  week: number | null = null;
  workLog: string = '';

  // Method to handle form submission
  submitWorkLog() {
    if (this.week !== null && this.workLog.trim()) {
      // Add the new log entry to the workLogs array
      this.workLogs.push({
        week: this.week,
        log: this.workLog,
        submissionDate: new Date()
      });

      // Clear the form fields after submission
      this.week = null;
      this.workLog = '';
    } else {
      alert("Please fill out both the week and work log fields.");
    }
  }
}
