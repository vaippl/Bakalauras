import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-word-form',
  templateUrl: 'wordForm.html'
})
export class WordFormPage {

  public currentWord: string;
  public currentWordImage: string;
  public currentEnWord : string;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.currentWord = this.params.get('word');
    this.currentWordImage = this.params.get('image');
    this.currentEnWord = this.params.get('Enword');
  }


}
