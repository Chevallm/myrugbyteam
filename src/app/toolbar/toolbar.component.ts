import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input()
  logged: boolean

  constructor() { }

  @Output()
  loginRequest = new EventEmitter<void>()

  @Output()
  disconnectRequest = new EventEmitter<void>()

  login() {
    this.loginRequest.emit()
  }

  disconnect() {
    this.disconnectRequest.emit()
  }

}
