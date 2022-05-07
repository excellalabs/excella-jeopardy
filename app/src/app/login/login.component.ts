import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserDto } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;

  constructor(private service: LoginService) { 
    this.email = ''
    this.pass = ''
  }

  ngOnInit(): void {
  }

  login(): void {
    //validate email address format
    //validate password
    let user = new UserDto()
    user.email = this.email
    user.password = this.pass
      this.service.authenticate(user).subscribe(user => {
        if(user){
          console.log(user)
          this.service.userId = user.id === undefined ? 0 : user.id
          if(user.isAdmin){
            console.log('is admin')
          } else {
            console.log('is not admin')
          }
        }else{
          //user was not authenticated
        }
      })
  }
}
