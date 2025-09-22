import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router , RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  username = 'Youssef';
    constructor(private auth: AuthService, private router: Router) {}
  user = localStorage.getItem('authToken') ? 'Logged In' : 'Guest';

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
