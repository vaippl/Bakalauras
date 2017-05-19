import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { abcPage } from '../abc/abc';

import { uzduotysPage } from '../uzduotys/uzduotys';

import { zodziaiPage } from '../zodziai/zodziai';


@Component({
  selector: 'page-meniu',
  templateUrl: 'meniu.html'
})
export class MeniuPage {

  constructor(public navCtrl: NavController) {
  }

  public abcClick(event) {
    this.navCtrl.push(abcPage);
  }

  public wordsClick(event) {
    this.navCtrl.push(zodziaiPage);
  }

  public tasksClick(event) {
    this.navCtrl.push(uzduotysPage);
  }
}
