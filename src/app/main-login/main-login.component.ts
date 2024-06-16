import { Component } from '@angular/core';
import { log } from 'console';
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
  console.log('button is working');
  this.router.navigate(['teacher-login']);
}
move(){
  console.log('button cliks');
  this.router.navigate(['studend-login']);
}
}
