import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  private apiUrl = 'http://localhost:5000/api/contributions';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadContributions();
  }

  loadContributions() {
    this.http.get<{ studentName: string; role: string }[]>(`${this.apiUrl}/${this.projectId}`)
      .subscribe((data) => {
        this.filteredContributions = data;
      }, (error) => {
        console.error("Error loading contributions:", error);
      });
  }

  addContribution() {
    if (this.newStudentName && this.newRole) {
      const newContribution = {
        projectId: this.projectId,
        studentName: this.newStudentName,
        role: this.newRole,
      };

      this.http.post(this.apiUrl, newContribution).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.filteredContributions.push({ studentName: this.newStudentName, role: this.newRole });
          this.newStudentName = '';
          this.newRole = '';
        },
        error: (error) => {
          alert("Failed to add contribution");
          console.error("Error:", error);
        }
      });
    }
  }

  removeContribution(contribution: { studentName: string; role: string }) {
    const url = `${this.apiUrl}/${this.projectId}/${encodeURIComponent(contribution.studentName)}`;
    console.log("Removing contribution:", url);

    this.http.delete(url).subscribe({
      next: (response: any) => {
        alert(response.message);
        this.filteredContributions = this.filteredContributions.filter(c => c.studentName !== contribution.studentName);
      },
      error: (error) => {
        alert("Failed to remove contribution");
        console.error("Error:", error);
      }
    });
  }
}
