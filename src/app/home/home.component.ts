import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[]
  responseMsg = ''
  public userForm: FormGroup

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      street: new FormControl('', [Validators.required]),
      zipCode: new FormControl(
        '',
        [Validators.required, Validators.minLength(1),
          Validators.maxLength(20)]),

    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  saveUser() {
    const user = new User(this.userForm.controls.name.value.toString(),
      this.userForm.controls.email.value.toString(),
      this.userForm.controls.street.value.toString(),
      this.userForm.controls.zipCode.value.toString());

    this.userService.saveUser(user).subscribe(msg => {
      this.responseMsg = msg
      this.getUsers();
    });
  }

  goToScreen() {
    this.router.navigate(['/screen']);
  }
}
