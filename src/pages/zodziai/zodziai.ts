import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { numberPage } from './number/number';
import { colourPage } from './colour/colour';
import { MonthMeniuPage } from './month/month';
import { otherPage } from './other/other';

@Component({
  selector: 'page-zodziai',
  templateUrl: 'zodziai.html'
})
export class zodziaiPage {

  constructor(public navCtrl: NavController) {

  }
public numberClick(event) {
    this.navCtrl.push(numberPage);
  }
  public colourClick(event) {
    this.navCtrl.push(colourPage);
  }
  public monthClick(event) {
    this.navCtrl.push(MonthMeniuPage);
  }
  public otherClick(event) {
    this.navCtrl.push(otherPage);
  }

}
