import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-register',
  imports: [ CommonModule, ReactiveFormsModule , RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form: FormGroup<any>;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  this.form = this.fb.group({
  name: ['', Validators.required],
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required]
}, { validators: this.passwordsMatch });
  }
passwordsMatch(group: AbstractControl): ValidationErrors[string] | null {
  return group.get('password')?.value === group.get('confirmPassword')?.value
    ? null : { mismatch: true };
}

onSubmit(): void {
  if (this.form.valid) {
    console.log('Simulated registration:', this.form.value);
    this.router.navigate(['/login']);
  } else {
    this.form.markAllAsTouched();
  }
}


}
