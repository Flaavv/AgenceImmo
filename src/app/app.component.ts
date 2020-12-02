import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyAoZLoavn0fydbScA-k3RrR5I5Rmx7HZys",
      authDomain: "immoflagency.firebaseapp.com",
      databaseURL: "https://immoflagency.firebaseio.com",
      projectId: "immoflagency",
      storageBucket: "immoflagency.appspot.com",
      messagingSenderId: "85166118293",
      appId: "1:85166118293:web:c97f7ae31187770383129c",
      
    
    };
  
  firebase.initializeApp(firebaseConfig);
  }
}
