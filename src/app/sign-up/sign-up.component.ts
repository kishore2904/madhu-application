import { Component, OnInit } from '@angular/core';       
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  login:boolean | undefined;
  value: string | undefined;
  signup:FormGroup;
  constructor(private route: ActivatedRoute,
    private fb:FormBuilder
  ){
    this.signup = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      fullname:['',[Validators.required]],
      email:['abc@gmail.com',[Validators.email, Validators.required]], 
      mobile:['',[Validators.required]]
    });
  }
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
 submit(){
    console.log('my value',this.signup.value)
  };
}
