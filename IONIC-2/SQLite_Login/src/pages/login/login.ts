import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Md5 } from '../../../node_modules/ts-md5/dist/md5';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm = {
    username: '',
    password: ''
  };
  private sqlite: SQLite = null;

  constructor(public loadingCtrl: LoadingController, public alerCtrl: AlertController, public nav: NavController) {
    this.sqlite = new SQLite();
    this.sqlite.create({
      name: 'SQLiteTest_Users.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        db.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT)', [])
          .then(() => {

            db.executeSql('SELECT * FROM users', [])
              .then(response => {
                if (response.rows.length <= 0) {
                  db.executeSql('INSERT INTO users(Username, Password) VALUES(?,?)', ['admin', Md5.hashStr('root')])
                    .then(() => {

                    })
                    .catch(e => {

                    });
                }
              });

          })
          .catch(e => {

          });

      })
      .catch(e => {

      });
  }

  SignIn() {

	  	const titleMessage = 'Estatus de acceso';
	  	const okButton = 'Ok';

	  	let loading = this.loadingCtrl.create({
	    	content: "Por favor espere...",
	    	spinner: "crescent"
    });

    let invalid = this.alerCtrl.create({
	    	title: titleMessage,
	    	message: 'Usuario inválido',
	    	buttons: [okButton]
    });

    loading.present();

    this.sqlite.create({
      name: 'SQLiteTest_Users.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

      db.executeSql('SELECT * FROM users WHERE Username=? and Password=?', [this.loginForm.username, Md5.hashStr(this.loginForm.password)])
        .then(response => {
          loading.dismiss();
          if (response.rows.length > 0)
            this.openNavWelcomePage(this.loginForm);
          else
            invalid.present();
        });
    })
    .catch(e => {

    });

  }

  openNavWelcomePage(userInfo = {}) {
    this.nav.setRoot(WelcomePage, userInfo);
    //this.nav.push(HomePage, {name: this.username});
  }
}
