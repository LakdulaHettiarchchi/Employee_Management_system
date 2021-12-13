import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers : [UserService]
})
export class SignUpComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  // Reset(form ?: NgForm){
  //   if (form)
  //      form.reset();

    
  // }


  onSubmit(form: NgForm){
     console.log(this.userService.selectedUser);
  }

}
