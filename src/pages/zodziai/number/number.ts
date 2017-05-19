import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { onePage } from './one/one';
import { twoPage } from './two/two';
import { threePage } from './three/three';
import { fourPage } from './four/four';
import { fivePage } from './five/five';
import { sixPage } from './six/six';
import { sevenPage } from './seven/seven';
import { eightPage } from './eight/eight';
import { ninePage } from './nine/nine';
import {zeroPage } from './zero/zero';


@Component({
  selector: 'page-number',
  templateUrl: 'number.html'
})
export class numberPage {

  constructor(public navCtrl: NavController) {
  }
    public one_Click(event) {
    this.navCtrl.push(onePage);
  }
  public two_Click(event) {
    this.navCtrl.push(twoPage);
  }
  public three_Click(event) {
    this.navCtrl.push(threePage);
  }
  public four_Click(event) {
    this.navCtrl.push(fourPage);
  }
  public five_Click(event) {
    this.navCtrl.push(fivePage);
  }
  public six_Click(event) {
    this.navCtrl.push(sixPage);
  }
  public seven_Click(event) {
    this.navCtrl.push(sevenPage);
  }
  public eight_Click(event) {
    this.navCtrl.push(eightPage);
  }
  public nine_Click(event) {
    this.navCtrl.push(ninePage);
  }
  public zero_Click(event) {
    this.navCtrl.push(zeroPage);
  }

}
