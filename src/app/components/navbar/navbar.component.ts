import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/api/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AccountService
  ) { }

  ngOnInit() {
  }

  public isSignedIn(): boolean {
    return this.authService
      .isSignedIn();
  }
}