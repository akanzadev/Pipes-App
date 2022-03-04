import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  // JSON Pipe
  heroes = [
    {
      name: 'Superman',
      age: 36,
      fly: true,
    },
    {
      name: 'Batman',
      age: 36,
      fly: false,
    },
    {
      name: 'Flash',
      age: 36,
      fly: true,
    },
  ];

  // Async Pipe
  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 2000);
  });
}
