import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCTAnI8AiYmSrPhmF4nGUcHb9gXprUfBhk",
      authDomain: "acelyslunchtime.firebaseapp.com",
      databaseURL: "https://acelyslunchtime.firebaseio.com",
      projectId: "acelyslunchtime",
      storageBucket: "acelyslunchtime.appspot.com",
      messagingSenderId: "837469563532"
    };
    firebase.initializeApp(config);

  }
}
