import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'dns';
import { error } from 'protractor';
import { rejects } from 'assert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router : Router) { }

  signInUser(email: string, password:string){
    return new Promise(
      (resolve, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data)=>{
            console.log(data);
        resolve(data);
          }
       
    ).catch(
      (error)=>{
        reject(error);
        }
    );
   }
   )



 
  
 
 
 
 
 
 
  /**  signUpUser(email: string, password: string){
    return new Promise(
      (resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          ()=>{
            console.log('connected');
            resolve();
            
          }
        ).catch(
          (error)=>{
            reject(error);
          }
        )
      }
      );
  } */

   
}

signOutUser(){
  firebase.auth().signOut();
   
}
}