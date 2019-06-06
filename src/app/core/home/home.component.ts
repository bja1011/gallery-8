import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { ABOUT_ROUTE, GALLERIES_ROUTE, HOME_ROUTE } from '../routing/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: NbMenuItem[] = [
    {title: 'Home', link: HOME_ROUTE},
    {title: 'Photos', link: GALLERIES_ROUTE},
    {title: 'About', link: ABOUT_ROUTE},
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
