import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDKjMatTx8z-5vJkxeqeo-mRLeXBK3wEyA",
    authDomain: "projetbook-b70da.firebaseapp.com",
    projectId: "projetbook-b70da",
    storageBucket: "projetbook-b70da.appspot.com",
    messagingSenderId: "992850437776",
    appId: "1:992850437776:web:a0fb6b33a51d3016bb1a15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}
