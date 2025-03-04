import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  async handleCredentialResponse(response: any) {
    const credential = this.decodeCredential(response.credential);

    try {
      const res = await this.http.post('http://localhost:5000/api/auth/google', { credential }).toPromise();
      const data: any = res;

      if (data.token) {
        localStorage.setItem('token', data.token); // ✅ Save token for authentication
        this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard after login
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  }

  decodeCredential(credential: string): any {
    return JSON.parse(atob(credential.split('.')[1])); // Decode JWT
  }
}


