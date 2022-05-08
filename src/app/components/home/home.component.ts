import { Component } from '@angular/core';
import { Auth0AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public authService: Auth0AuthService) {
  }
}
