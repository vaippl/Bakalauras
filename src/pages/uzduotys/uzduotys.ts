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
    { words: ['Bus', 'Dog', 'Apple', 'Nut'], correct: 'Apple', image: "assets/images/backgrounds/apple.jpg"},
    { words: ['King', 'Banana', 'Pencil', 'watermelon'], correct: 'Banana', image: "assets/images/backgrounds/banana.png"},
    { words: ['Book', 'Hat', 'Mouse', 'Box'], correct: 'Book', image: "assets/images/backgrounds/book.png"},
    { words: ['Bus', 'Box', 'Octopus', 'Violin'], correct: 'Box', image: "assets/images/backgrounds/Box.png"},
    { words: ['Bus', 'Ring', 'Carrot', 'Zebra'], correct: 'Bus', image: "assets/images/backgrounds/Bus.png"},
    { words: ['Queen', 'Carrot', 'Apple', 'Fox'], correct: 'Carrot', image: "assets/images/backgrounds/carrot.png"},
    { words: ['Egg', 'Dog', 'Cat', 'Strawberry'], correct: 'Cat', image: "assets/images/backgrounds/cat.png"},
    { words: ['Pencil', 'Dog', 'Book', 'Panda'], correct: 'Dog', image: "assets/images/backgrounds/dog.png"},
    { words: ['Bus', 'Dog', 'Egg', 'Apple'], correct: 'Egg', image: "assets/images/backgrounds/egg.png"},
    { words: ['Bus', 'Nut', 'Apple', 'Fish'], correct: 'Fish', image: "assets/images/backgrounds/fish.png"},
    { words: ['Fox', 'Dog', 'Pencil', 'Box'], correct: 'Fox', image: "assets/images/backgrounds/fox.png"},
    { words: ['Nut', 'Tiger', 'Gorilla', 'Egg'], correct: 'Gorilla', image: "assets/images/backgrounds/gorilla.png"},
    { words: ['Panda', 'Hat', 'Cat', 'Violin'], correct: 'Hat', image: "assets/images/backgrounds/hat.png"},
    { words: ['King', 'Queen', 'Mouse', 'Box'], correct: 'King', image: "assets/images/backgrounds/king.png"},
    { words: ['Carrot', 'Lion', 'Bus', 'Banana'], correct: 'Lion', image: "assets/images/backgrounds/Lion.png"},
    { words: ['Cat', 'Nut', 'Pencil', 'Mouse'], correct: 'Mouse', image: "assets/images/backgrounds/mouse.png"},
    { words: ['Nut', 'Box', 'Egg', 'Cat'], correct: 'Nut', image: "assets/images/backgrounds/nut.png"},
    { words: ['Ring', 'Book', 'Pencil', 'Octopus'], correct: 'Octopus', image: "assets/images/backgrounds/octopus.png"},
    { words: ['Panda', 'Zebra', 'Tiger', 'Fish'], correct: 'Panda', image: "assets/images/backgrounds/panda.png"},
    { words: ['Violin', 'Ring', 'Pencil', 'Cat'], correct: 'Pencil', image: "assets/images/backgrounds/pencil.png"},
    { words: ['Boy', 'Queen', 'King', 'Girl'], correct: 'Queen', image: "assets/images/backgrounds/queen.png"},
    { words: ['Ring', 'Dog', 'Fox', 'Zebra'], correct: 'Ring', image: "assets/images/backgrounds/ring.png"},
    { words: ['Pineapple', 'Cherry', 'Watermelon', 'Strawberry'], correct: 'Strawberry', image: "assets/images/backgrounds/strawberry.png"},
    { words: ['Cat', 'Tiger', 'Dog', 'Fish'], correct: 'Tiger', image: "assets/images/backgrounds/tiger.png"},
    { words: ['Violin', 'Egg', 'Cat', 'Clock'], correct: 'Violin', image: "assets/images/backgrounds/violin.png"},
    { words: ['Pineapple', 'Cherry', 'Watermelon', 'Strawberry'], correct: 'Watermelon', image: "assets/images/backgrounds/watermelon.png"},
    { words: ['Fox', 'Zebra', 'Pencil', 'Bus'], correct: 'Zebra', image: "assets/images/backgrounds/zebra.png"},
    { words: ['Bus', 'Clock', 'Box', 'Girl'], correct: 'Clock', image: "assets/images/backgrounds/clock.png"},
    { words: ['Egg', 'Banana', 'Cherry', 'Nut'], correct: 'Cherry', image: "assets/images/backgrounds/cherry.png"},
    { words: ['Pineapple', 'Cherry', 'Watermelon', 'Strawberry'], correct: 'Pineapple', image: "assets/images/backgrounds/pineapple.png"},
    { words: ['Boy', 'Queen', 'King', 'Girl'], correct: 'Boy', image: "assets/images/backgrounds/boy.png"},
    { words: ['Ring', 'Boy', 'Fox', 'Girl'], correct: 'Girl', image: "assets/images/backgrounds/girl.png"},
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
