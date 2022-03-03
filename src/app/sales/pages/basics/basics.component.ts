import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower = 'jeancarlo';
  nameUpper = 'JEANCARLO';
  nameComplete = 'JeANCarLo willY ';
  date = new Date();
  constructor() {}
}
