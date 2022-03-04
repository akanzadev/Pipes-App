import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/basics',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'Uncommom',
            icon: 'pi pi-fw pi-globe',
            routerLink: '/uncommom',
          },
          /*   {
            label: 'Order',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/order',
          }, */
        ],
      },
      {
        label: 'Pipes Personalized',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/order',
      },
      /*  {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      }, */
    ];
  }
}
