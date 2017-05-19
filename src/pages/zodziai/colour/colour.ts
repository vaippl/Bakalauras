import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { blackPage } from './black/black';
import { bluePage } from './blue/blue';
import { brownPage } from './brown/brown';
import { grayPage } from './gray/gray';
import { greenPage } from './green/green';
import { orangePage } from './orange/orange';
import { pinkPage } from './pink/pink';
import { purplePage } from './purple/purple';
import { redPage } from './red/red';
import { whitePage } from './white/white';
import { yellowPage } from './yellow/yellow';

@Component({
  selector: 'page-colour',
  templateUrl: 'colour.html'
})
export class colourPage {

  constructor(public navCtrl: NavController) {
  }

  public black_Click(event) {
  this.navCtrl.push(blackPage);
  }
  public blue_Click(event) {
  this.navCtrl.push(bluePage);
}
  public brown_Click(event) {
  this.navCtrl.push(brownPage);
}
  public gray_Click(event) {
  this.navCtrl.push(grayPage);
}
public green_Click(event) {
  this.navCtrl.push(greenPage);
}
public orange_Click(event) {
  this.navCtrl.push(orangePage);
}
public pink_Click(event) {
  this.navCtrl.push(pinkPage);
}
public purple_Click(event) {
  this.navCtrl.push(purplePage);
}
public red_Click(event) {
  this.navCtrl.push(redPage);
  }
public white_Click(event) {
  this.navCtrl.push(whitePage);
}
public yellow_Click(event) {
  this.navCtrl.push(yellowPage);
  }

}
