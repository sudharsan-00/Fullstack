import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class DashboardComponent {
  projects = [
    { id: 1,title: 'Project 1', description: 'Online ticket booking system' },
    { id: 2,title: 'Project 2', description: 'Web Crawler' },
    { id: 3,title: 'Project 3', description: 'Report and Queries web page' },
    { id: 4,title: 'Project 4', description: 'Online ticket booking system' },
    { id: 5,title: 'Project 5', description: 'Web Crawler' },
    { id: 6,title: 'Project 6', description: 'Report and Queries web page' },
    { id: 7,title: 'Project 7', description: 'Online ticket booking system' },
  ];

  completedProjects = [
    { title: 'Smart Home Automation System', description: 'Develop a system that allows users to control home appliances remotely via a mobile application, incorporating features like voice commands and automated scheduling.', status: 'Completed', sale: '1000' },
    { title: 'Sentiment Analysis Tool', description: 'Create a web-based application that analyzes user-generated content (like tweets or reviews) to determine the sentiment (positive, negative, or neutral) using natural language processing techniques.', status: 'Completed', sale: '2000' },
    { title: 'Personal Finance Tracker', description: 'Design a personal finance management application that helps users track their income, expenses, and budgets, providing visualizations and reports for better financial planning.', status: 'Completed', sale: '1500' },
    { title: 'Image Recognition System', description: 'Implement an image recognition system that utilizes machine learning algorithms to classify and detect objects within images, which can be applied in fields like security or retail.', status: 'Completed', sale: '1500' },
    { title: 'Completed Project 4', description: 'Description for completed project 4', status: 'Completed', sale: '1500' },
    { title: 'Completed Project 5', description: 'Description for completed project 5', status: 'Completed', sale: '1500' },
    { title: 'Completed Project 6', description: 'Description for completed project 6', status: 'Completed', sale: '1500' },
    { title: 'Completed Project 7', description: 'Description for completed project 7', status: 'Completed', sale: '1500' },
  ];
  constructor(private router: Router) {}

  viewContributions(projectId: number) {
    console.log('Navigating to contributions for project ID:', projectId); // Debugging line
    this.router.navigate(['/contribution', projectId]);
  }
}