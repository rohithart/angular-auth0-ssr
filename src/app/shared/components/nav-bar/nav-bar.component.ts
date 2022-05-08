import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/app/configs/app.config';

import { Auth0AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
	appConfig: any;
	menuItems: any[] = [];
	menuItemItems: any[] = [];
	menuStarItems: any[] = [];
	menuHouseItems: any[] = [];
	menuItemsDefault: any[] = [];

  searchInput = '';
  addOnBlur = true;

  constructor(@Inject(APP_CONFIG) appConfig: any, public authService: Auth0AuthService, private router: Router) {
	  this.appConfig = appConfig;
  }

  ngOnInit() {
	  this.loadMenus();
  }

  searchNow() {
    if (this.searchInput.length > 0) {
      this.router.navigate(['/items'], {queryParams: {search: this.searchInput}});
    }
  }

  clearSearch() {
    this.searchInput = '';
  }

  private loadMenus(): void {
	  this.menuItems = [

	  ];

    this.menuItemItems = [
  
	  ];

	  this.menuStarItems = [

	  ];

	  this.menuHouseItems = [

	  ];
	  this.menuItemsDefault = [
	    {
	      link: '/' + AppConfig.routes.about,
	      name: 'About us',
	      icon: 'fas fa-user-tie'
	    },
	  ];
  }
}
