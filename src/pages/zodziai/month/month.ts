import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { sausisPage } from './sausis/sausis';
import { vasarisPage } from './vasaris/vasaris';
import { kovasPage } from './kovas/kovas';
import { balandisPage } from './balandis/balandis';
import { geguzePage } from './geguze/geguze';
import { birzelisPage } from './birzelis/birzelis';
import { liepaPage } from './liepa/liepa';
import { rugpjutisPage } from './rugpjutis/rugpjutis';
import { rugsejisPage } from './rugsejis/rugsejis';
import { spalisPage } from './spalis/spalis';
import { lapkritisPage } from './lapkritis/lapkritis';
import { gruodisPage } from './gruodis/gruodis';


@Component({
  selector: 'page-month',
  templateUrl: 'month.html'
})
export class MonthMeniuPage {

  constructor(public navCtrl: NavController) {
  }

  public sausisClick(event) {
    this.navCtrl.push(sausisPage);
  }

  public vasarisClick(event) {
    this.navCtrl.push(vasarisPage);
  }

  public kovasClick(event) {
    this.navCtrl.push(kovasPage);
  }
  public balandisClick(event) {
    this.navCtrl.push(balandisPage);
  }

  public geguzeClick(event) {
    this.navCtrl.push(geguzePage);
  }

  public birzelisClick(event) {
    this.navCtrl.push(birzelisPage);
  }
  public liepaClick(event) {
    this.navCtrl.push(liepaPage);
  }

  public rugpjutisClick(event) {
    this.navCtrl.push(rugpjutisPage);
  }

  public rugsejisClick(event) {
    this.navCtrl.push(rugsejisPage);
  }
  public spalisClick(event) {
    this.navCtrl.push(spalisPage);
  }

  public lapkritisClick(event) {
    this.navCtrl.push(lapkritisPage);
  }

  public gruodisClick(event) {
    this.navCtrl.push(gruodisPage);
  }
}
