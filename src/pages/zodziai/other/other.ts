import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WordFormPage } from './wordForm/wordForm';

@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class otherPage {

  public wordList: any[] = [
    { word: 'Obuolys', Enword: 'Apple', image: "/assets/images/backgrounds/apple.jpg"},
    { word: 'Knyga', Enword: 'Book', image: '/assets/images/backgrounds/book.jpg'},
    { word: 'Dėžė', Enword: 'Box', image: '/assets/images/backgrounds/box.jpg'},
    { word: 'Autobusas', Enword: 'Bus', image: '/assets/images/backgrounds/box.jpg'},
    { word: 'Katė', Enword: 'Cat', image: '/assets/images/backgrounds/cat.jpg'},
    { word: 'Šuo', Enword: 'Dog', image: '/assets/images/backgrounds/dog.jpg'},
    { word: 'Kiaušinis', Enword: 'Egg', image: '/assets/images/backgrounds/egg.jpg'},
    { word: 'Žuvis', Enword: 'Fish', image: '/assets/images/backgrounds/fish.jpg'},
    { word: 'Lapė', Enword: 'Fox', image: '/assets/images/backgrounds/fox.jpg'},
    { word: 'Gorila', Enword: 'Gorilla', image: '/assets/images/backgrounds/gorilla.jpg'},
    { word: 'Skrybėlė', Enword: 'Hat', image: '/assets/images/backgrounds/hat.jpg'},
    { word: 'Karalius', Enword: 'King', image: '/assets/images/backgrounds/king.jpg'},
    { word: 'Liūtas', Enword: 'Lion', image: '/assets/images/backgrounds/lion.jpg'},
    { word: 'Pelė', Enword: 'Mouse', image: '/assets/images/backgrounds/mouse.jpg'},
    { word: 'Riešutas', Enword: 'Nut', image: '/assets/images/backgrounds/nut.jpg'},
    { word: 'Aštunkojis', Enword: 'Octopus', image: '/assets/images/backgrounds/octopus.jpg'},
    { word: 'Panda', Enword: 'Panda', image: '/assets/images/backgrounds/panda.jpg'},
    { word: 'Pieštukas', Enword: 'Pencil', image: '/assets/images/backgrounds/pencil.jpg'},
    { word: 'Karalienė', Enword: 'Queen', image: '/assets/images/backgrounds/queen.jpg'},
    { word: 'Žiedas', Enword: 'Ring', image: '/assets/images/backgrounds/ring.jpg'},
    { word: 'Tigras', Enword: 'Tiger', image: '/assets/images/backgrounds/tiger.jpg'},
    { word: 'Smuikas', Enword: 'Violin', image: '/assets/images/backgrounds/violin.jpg'},
    { word: 'Zebras', Enword: 'Zebra', image: '/assets/images/backgrounds/zebra.jpg'}
  ];

  constructor(public navCtrl: NavController) {
  }

  public wordClick(event, wordObj) {
    this.navCtrl.push(WordFormPage, wordObj);
  }
}
