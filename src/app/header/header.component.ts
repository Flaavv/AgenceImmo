import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDisabled = true;
  title = 'AgenceImmo';
  isLogged = false;
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {

    firebase.auth().onAuthStateChanged(
      (userSession)=>{
          if(userSession){
            console.log(userSession, 'connectééééééééééééééééééééed');
            this.isLogged = true;
          }else{
            console.log('deco');
            this.isLogged = false;
          }
      
      }
    );
   
    }
    
    disconection(){
      this.authenticationService.signOutUser();
  }

 }

