import { Component } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logged = false

  login() {
    this.logged = true
  }

  disconnect() {
    this.logged = false
  }
}
