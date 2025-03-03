import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent {
  pendingProducts = [
    { id: '1', name: 'AI Chatbot', domain: 'Artificial Intelligence', requirements: 'NLP, Python, ML' },
    { id: '2', name: 'E-commerce Platform', domain: 'Retail', requirements: 'Payment Gateway, Product Listings' }
  ];

  approveProduct(index: number) {
    const approvedProduct = this.pendingProducts.splice(index, 1)[0];
    console.log('Product approved:', approvedProduct);
    alert(`Product ${approvedProduct.name} approved and added to dashboard!`);
  }
}
