import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  myDate: string = new Date().toISOString();
  username = '';
  phonenumber = '';
  userImg = '';
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.username = this.afAuth.auth.currentUser.displayName;
      this.phonenumber = this.afAuth.auth.currentUser.phoneNumber;
      this.userImg = this.afAuth.auth.currentUser.photoURL;
      console.log(this.afAuth.auth.currentUser);
      console.log(this.afAuth);
    }
  }

  saveDetails() {
    // logic to save user details in firebase
    this.router.navigate(['/select-option']);
  }

  signOut() {
    this.authService.signOut();
   }

}
