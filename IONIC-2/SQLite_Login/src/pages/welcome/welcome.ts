import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    this.user = navParams.data;
  }
}
