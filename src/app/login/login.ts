import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.minLength(5), Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  onSubmit = () => {
    console.log(

      this.loginForm.valid

    );
    console.log(this.loginForm.value);
  }
}
