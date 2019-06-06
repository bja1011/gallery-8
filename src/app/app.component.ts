import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { ABOUT_ROUTE, GALLERIES_ROUTE, HOME_ROUTE } from './core/routing/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: NbMenuItem[] = [
    {title: 'Home', link: '/'},
    {title: 'Photos', link: GALLERIES_ROUTE},
    {title: 'About', link: ABOUT_ROUTE},
  ];
}
