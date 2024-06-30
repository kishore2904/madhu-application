import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes  } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-login',
  standalone: true,
 imports: [RouterModule,RouterLink,
  ReactiveFormsModule,FormsModule
 ],
  templateUrl: './teacher-login.component.html',
  styleUrl: './teacher-login.component.scss'
})
export class TeacherLoginComponent {
  stafflogin:FormGroup;
  constructor(
    private formbuilder:FormBuilder,
    private router: Router
  ){
    this.stafflogin = this.formbuilder.group({
      username:['example@gmail.com',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
    login(){
      console.log('my value',this.stafflogin.value)
    };
  
  
}