import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
    ) {}

  signOut() {
   this.authService.signOut();
  }

  registerCase() {
    this.router.navigate(['/user-details']);
  }

}
