import { Component, OnInit } from '@angular/core';       
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  login:boolean | undefined;
  value: string | undefined;
  constructor(private route: ActivatedRoute){}
ngOnInit(): void {
  this.route.queryParams.subscribe(params =>{
    console.log(params);
    if(params['value']=='true'){
      this.login=true;
    }
   else{
    this.login==false;
    this.value = '/student-login'
   }
    console.log(this.login);
  });
}
}
