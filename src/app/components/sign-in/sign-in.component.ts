import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AccountService } from 'src/app/api/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = 'Email';
  password = 'Password';

  signInForm = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private authService: AccountService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.signInForm.valid) {
      this.authService.Login(this.signInForm.value).subscribe(
        () => this.router.navigate(['/'])
      );
    }
  }

}