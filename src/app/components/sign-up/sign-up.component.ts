import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { AccountService } from 'src/app/api/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = 'Email';
  name = "Name";
  password = 'Password';
  confirmPassword = 'ConfirmPassword';

  signUpForm = this.fb.group({
    Name: ['', [
      Validators.required,
      Validators.pattern('[a-zA-ZА-Яа-яёЁ]{2,11}')
    ]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private authService: AccountService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.authService.Register(this.signUpForm.value).subscribe(x => {
        this.router.navigate(['/account/signin']);
      });
    }
  }

}