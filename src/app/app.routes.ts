import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component'; 
import { MainLoginComponent } from './main-login/main-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    
    {
        path:'student-login',
        component:StudentLoginComponent
    },
    {
        path:'teacher-login',
        component:TeacherLoginComponent
    },
    {
        path:'sign-up',
        component:SignUpComponent
    },
    
    {
        path:'',
        component:MainLoginComponent
    }
  
];