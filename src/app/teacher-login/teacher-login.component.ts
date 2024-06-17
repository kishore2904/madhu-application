import { Component } from '@angular/core';
import { log } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-login',
  standalone: true,
  imports: [],
  templateUrl: './teacher-login.component.html',
  styleUrl: './teacher-login.component.scss'
})
export class TeacherLoginComponent {
  constructor(
    private router: Router
  ){}
  
  nextpage(){
    this.router.navigate(['sign-up']);
  }
}