import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes  } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-login',
  standalone: true,
 imports: [RouterModule,RouterLink],
  templateUrl: './teacher-login.component.html',
  styleUrl: './teacher-login.component.scss'
})
export class TeacherLoginComponent {
  constructor(
    private router: Router
  ){}
  
}