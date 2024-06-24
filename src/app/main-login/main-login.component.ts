import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  standalone: true,
  imports: [],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent {
  constructor(
    private router: Router
  ){}

navigate(){
  this.router.navigate(['teacher-login']);
}
move(){
  this.router.navigate(['student-login']);
}
}
