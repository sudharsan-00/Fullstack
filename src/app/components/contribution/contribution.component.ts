import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding

@Component({
  selector: 'app-contribution',
  standalone: true,
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class ContributionComponent {
  projectId: string = '';
  filteredContributions: { studentName: string; role: string }[] = [];
  newStudentName: string = '';
  newRole: string = '';

  // Backend API URL
  private apiUrl = 'http://localhost:3000/api/contributions'; // Replace with your backend server URL

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadContributions();
  }

  // Load contributions from the backend
  loadContributions() {
    this.http.get<{ studentName: string; role: string }[]>(
      `${this.apiUrl}/${this.projectId}`
    ).subscribe((data) => {
      this.filteredContributions = data;
    });
  }

  // Add a new contribution
  addContribution() {
    if (this.newStudentName && this.newRole) {
      const newContribution = {
        projectId: this.projectId,
        studentName: this.newStudentName,
        role: this.newRole,
      };

      this.http.post(this.apiUrl, newContribution).subscribe(() => {
        this.newStudentName = '';
        this.newRole = '';
        this.loadContributions(); // Reload contributions after adding
      });
    }
  }

  // Remove a contribution
  removeContribution(contribution: { studentName: string; role: string }) {
    this.http
      .delete(
        `${this.apiUrl}/${this.projectId}/${encodeURIComponent(
          contribution.studentName
        )}`
      )
      .subscribe(() => {
        this.loadContributions(); // Reload contributions after removal
      });
  }
}
