import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
// import { uzduotysPage } from './';


@Component({
  selector: 'page-uzduotys',
  templateUrl: 'uzduotys.html'
})
export class uzduotysPage {

  public answer: string;
  public currentTask: any;

  public taskList: any[] = [
    { words: ['1', 'Bus'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['2', 'Bus', 'Box'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['3', 'Bus', 'Box'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['4', 'Bus', 'Box', 'Book'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['5', 'Bus'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['6', 'Bus', 'Box', 'Book'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['7', 'Bus', 'Box', 'Book'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['8'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['9', 'Bus', 'Box', 'Book'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['10', 'Bus', 'Box', 'Book'], correct: 'Bus', image: "assets/images/backgrounds/apple.jpg"},
  ];

  private toast: any;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    this.setCurrentTask();
  }

  public nextClick(event) {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
    this.navCtrl.push(uzduotysPage);
  }

  public selectAnswer(event, word) {
    this.answer = word;
    this.presentToast()
  }

  public setCurrentTask() {
    this.currentTask = this.getTask();
  }

  public getTask() {
    return this.taskList[this.getRandomInt(0, this.taskList.length - 1)];
  }

  private presentToast() {
    let className = 'anwser-toast ' + (this.answer === this.currentTask.correct ? 'correct-toast' : 'incorrect-toast');
    if (this.toast) {
      this.toast.dismiss();
    }
    this.toast = this.toastCtrl.create({
      message: this.answer === this.currentTask.correct ? 'GOOD' : 'WRONG',
      duration: 3000,
      cssClass: className,
      position: 'middle'
    });

    this.toast.onDidDismiss(() => {
    });

    this.toast.present();
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
