import { Component } from '@angular/core';
import { RouterModule,RouterLink} from '@angular/router';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [ RouterLink , RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl:'./student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent {
  loginForm: FormGroup;
  constructor(
    private test:FormBuilder,
    private router: Router
  ){
    this.loginForm = this.test.group({
      username:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    });
  }

login() {
  console.log('my value',this.loginForm.value)
};
}