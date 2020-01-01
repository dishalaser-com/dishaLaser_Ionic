import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
    ) { }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      // location.reload();
      this.router.navigate(['']);
    });
  }

}
