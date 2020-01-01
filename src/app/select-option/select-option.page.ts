import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.page.html',
  styleUrls: ['./select-option.page.scss'],
})
export class SelectOptionPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.signOut();
}
}
