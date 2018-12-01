import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService,
              public fb: Facebook
             ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  facebookLogin() {
    this.fb.login(['email', 'user_friends', 'public_profile','user_photos','user_birthday'])
      .then((res : FacebookLoginResponse) => {
         if(res.status == "connected") {

          // Getting ID and Token
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;

          this.fb.api("/me?fields=name,gender,birthday,email",[])
            .then((user) => {
              var gender = user.gender;
              var birthday = user.birthday;
              var name = user.name;
              var email = user.email;

              console.log("=== USER INFOS ===");
              console.log("Gender : " + gender);
              console.log("Birthday : " + birthday);
              console.log("Name : " + name);
              console.log("Email : " + email);

              this.navCtrl.push(MainPage);
            });
        } else {
          console.log("An error occured . . .");
        }
      })
      .catch(e => console.error('Error logging into FB', e));
  }
}
