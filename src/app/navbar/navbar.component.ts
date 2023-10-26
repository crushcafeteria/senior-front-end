import { Component, Input } from '@angular/core';
import { MenuType } from 'src/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() name = '';

  menu: MenuType[] = [
    {
      label: "Search Cargo",
      url: 'search-cargo'
    },
    {
      label: 'Add Cargo',
      url: 'add-cargo'
    }
  ]
}
