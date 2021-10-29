import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  account = '';
  password = '';

  constructor(private router: Router) { };

  ngOnInit(): void {
  };

  login () {
    if (this.account !== '' && this.password !== '') {
      this.router.navigate(['/home/' + this.account])
    }
  };
}
