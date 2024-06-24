import { Component } from '@angular/core';
import { RouterModule,RouterLink} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [ RouterLink , RouterModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent {
  constructor(
    private router: Router
  ){}
}
