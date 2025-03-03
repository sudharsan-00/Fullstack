import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  product = {
    id: '',
    name: '',
    domain: '',
    requirements: ''
  };

  constructor(private router: Router) {}

  submitForApproval() {
    console.log('Product submitted for approval:', this.product);
    alert('Product request sent for approval!');
    this.router.navigate(['/dashboard']); // Redirect after submission
  }
}

