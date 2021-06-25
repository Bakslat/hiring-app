import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.userForm.get('email')?.value, this.userForm.get('password')?.value)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      },
        err => {
          console.log(err.error);
      });
  }
}
