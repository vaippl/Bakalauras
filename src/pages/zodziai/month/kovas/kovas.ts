import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { abcPage } from '../abc/abc';

import { uzduotysPage } from '../uzduotys/uzduotys';

import { zodziaiPage } from '../zodziai/zodziai';


@Component({
  selector: 'page-kovas',
  templateUrl: 'kovas.html'
})
export class kovasPage {

  constructor(public navCtrl: NavController) {
  }


}
