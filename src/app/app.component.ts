import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { GALLERIES_ROUTE, HOME_ROUTE } from './core/routing/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: NbMenuItem[] = [
    {title: 'Home', link: HOME_ROUTE},
    {title: 'Photos', link: GALLERIES_ROUTE},
    {title: 'About'},
  ];


}
