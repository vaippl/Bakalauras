import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { abcPage } from '../abc/abc';

import { uzduotysPage } from '../uzduotys/uzduotys';

import { zodziaiPage } from '../zodziai/zodziai';


@Component({
  selector: 'page-liepa',
  templateUrl: 'liepa.html'
})
export class liepaPage {

  constructor(public navCtrl: NavController) {
  }

}
