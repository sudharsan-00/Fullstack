import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface WorkLog {
  week: number;
  workDescription: string;
  submissionDate: Date;
}

@Component({
  selector: 'app-project-report',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './project-report.component.html',
  styleUrl: './project-report.component.css'
})

export class ProjectReportComponent implements OnInit {
  apiUrl = 'http://localhost:5000'; // Backend API base URL
  dueDate: Date = new Date('2024-12-31'); // Example due date
  workLogs: WorkLog[] = []; // Store work logs from the server

  // Variables for binding form input
  week: number | null = null;
  workDescription: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchWorkLogs(); // Load existing work logs on page load
  }

  // Method to fetch work logs from the backend
  fetchWorkLogs() {
    this.http.get<WorkLog[]>(`${this.apiUrl}/get-worklogs`).subscribe(
      (data) => {
        this.workLogs = data;
      },
      (error) => {
        console.error("Error fetching work logs:", error);
      }
    );
  }

  // Method to submit work log to backend
  submitWorkLog() {
    if (this.week !== null && this.workDescription.trim()) {
      const newLog = {
        week: this.week,
        workDescription: this.workDescription
      };

      this.http.post(`${this.apiUrl}/submit-worklog`, newLog).subscribe(
        (response) => {
          console.log("Work log submitted:", response);
          this.fetchWorkLogs(); // Refresh work logs after submission
        },
        (error) => {
          console.error("Error submitting work log:", error);
        }
      );

      // Clear form fields after submission
      this.week = null;
      this.workDescription = '';
    } else {
      alert("Please fill out both the week and work log fields.");
    }
  }
}
