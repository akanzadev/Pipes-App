import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommom',
  templateUrl: './uncommom.component.html',
  styles: [],
})
export class UncommomComponent {
  // i18nselect
  name: string = 'Jean';
  gender: string = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  // i18nplural
  clients: string[] = [
    'Maria',
    'Pedro',
    'Miguel',
    'Romel',
    'Christian',
    'Thom',
  ];
  clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  constructor() {}

  changeName() {
    this.name = 'Susana';
    this.gender = 'female';
  }
  removeClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Jean',
    age: 36,
    address: 'Av La Unión Lima Perú',
  };
}
