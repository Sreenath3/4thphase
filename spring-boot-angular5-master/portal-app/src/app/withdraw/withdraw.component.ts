import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html'
})
export class WithdrawComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  

  ngOnInit() {
  }

}
