import { Component } from '@angular/core';
import { FormBuilder, Validators , FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ CommonModule , ReactiveFormsModule , RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form: FormGroup<any>;
  error = '';
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

  this.form = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
});
  }


onSubmit(): void {
  if (this.form.invalid) return;

  const { username, password } = this.form.value;
  this.auth.login(username, password).subscribe({
    next: res => {
      this.auth.saveToken(res.token);
      this.router.navigate(['/dashboard']);
    },
    error: err => {
      this.error = 'Invalid credentials';
    }
  });
}

}
