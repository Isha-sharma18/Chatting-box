import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { AuthnewService } from '../authnew.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private socialAuthService: AuthService,private router:Router,private authservice:AuthnewService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        this.authservice.id=true;
        this.router.navigate(['/chatbox']);
            
      }
    );
  }

}
