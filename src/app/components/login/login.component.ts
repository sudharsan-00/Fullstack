import { Component } from '@angular/core';
import { Router } from '@angular/router';  // For navigation
import { HttpClient } from '@angular/common/http';  // For API calls
import { FormsModule } from '@angular/forms';  // If forms are needed
import { GoogleAuthService } from 'ng-gapi';   // Import Google OAuth service (optional if you are using another OAuth package)

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  // Add required modules here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private http: HttpClient, private googleAuthService: GoogleAuthService) {}

  async handleCredentialResponse(response: any) {
    const credential = this.decodeCredential(response.credential);

    try {
      const res = await this.http.post('http://localhost:5000/api/auth/google', { credential }).toPromise();
      const data: any = res;

      if (data.role === 'admin') {
        this.router.navigate(['/admin', { username: credential.name, useremail: credential.email, pic: credential.picture }]);
      } else if (data.role === 'Faculty') {
        this.router.navigate(['/faculty', { name: credential.name, email: credential.email, pic: credential.picture }]);
      } else {
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  }

  decodeCredential(credential: string): any {
    // Decode the credential response (JWT)
    return JSON.parse(atob(credential.split('.')[1])); // assuming JWT format
  }
}
