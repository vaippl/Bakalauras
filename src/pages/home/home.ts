import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MeniuPage } from '../meniu/meniu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public startClick(event) {
    this.navCtrl.push(MeniuPage);
  }
}
