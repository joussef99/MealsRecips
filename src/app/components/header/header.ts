import { Component } from '@angular/core';
import { Router , RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { AuthGuard } from '../../gaurds/auth-guard';

@Component({
  selector: 'app-header',
  imports: [  CommonModule, RouterModule , FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public router: Router , public auth: AuthService ) {}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}


}
