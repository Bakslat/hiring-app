import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  register() {
    console.log('test');
    this.userService.register(this.userForm.get('email')?.value, this.userForm.get('password')?.value)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

  goToLogin() {
    this.router.navigateByUrl("/login");
  }
}
