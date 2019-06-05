import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router,
  ) {
  }

  /**
   * Navigate to passed route.
   * @param route
   * @param data
   */
  navigate(route: string, data?: any): Promise<boolean> {
    return this.router.navigate([route], data);
  }
}
