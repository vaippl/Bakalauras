import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WordFormPage } from './wordForm/wordForm';

@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class otherPage {

  public wordList: any[] = [
    { word: 'Obuolys', Enword: 'Apple', image: "assets/images/backgrounds/apple.jpg"},
    { word: 'Knyga', Enword: 'Book', image: 'assets/images/backgrounds/book.png'},
    { word: 'Dėžė', Enword: 'Box', image: 'assets/images/backgrounds/box.png'},
    { word: 'Autobusas', Enword: 'Bus', image: 'assets/images/backgrounds/bus.png'},
    { word: 'Katė', Enword: 'Cat', image: 'assets/images/backgrounds/cat.png'},
    { word: 'Šuo', Enword: 'Dog', image: 'assets/images/backgrounds/dog.png'},
    { word: 'Kiaušinis', Enword: 'Egg', image: 'assets/images/backgrounds/egg.png'},
    { word: 'Žuvis', Enword: 'Fish', image: 'assets/images/backgrounds/fish.png'},
    { word: 'Lapė', Enword: 'Fox', image: 'assets/images/backgrounds/fox.png'},
    { word: 'Gorila', Enword: 'Gorilla', image: 'assets/images/backgrounds/gorilla.png'},
    { word: 'Skrybėlė', Enword: 'Hat', image: 'assets/images/backgrounds/hat.png'},
    { word: 'Karalius', Enword: 'King', image: 'assets/images/backgrounds/king.png'},
    { word: 'Liūtas', Enword: 'Lion', image: 'assets/images/backgrounds/lion.png'},
    { word: 'Pelė', Enword: 'Mouse', image: 'assets/images/backgrounds/mouse.png'},
    { word: 'Riešutas', Enword: 'Nut', image: 'assets/images/backgrounds/nut.png'},
    { word: 'Aštunkojis', Enword: 'Octopus', image: 'assets/images/backgrounds/octopus.png'},
    { word: 'Panda', Enword: 'Panda', image: 'assets/images/backgrounds/panda.png'},
    { word: 'Pieštukas', Enword: 'Pencil', image: 'assets/images/backgrounds/pencil.png'},
    { word: 'Karalienė', Enword: 'Queen', image: 'assets/images/backgrounds/queen.png'},
    { word: 'Žiedas', Enword: 'Ring', image: 'assets/images/backgrounds/ring.png'},
    { word: 'Tigras', Enword: 'Tiger', image: 'assets/images/backgrounds/tiger.png'},
    { word: 'Smuikas', Enword: 'Violin', image: 'assets/images/backgrounds/violin.png'},
    { word: 'Zebras', Enword: 'Zebra', image: 'assets/images/backgrounds/zebra.png'},
    { word: 'Morka', Enword: 'Carrot', image: 'assets/images/backgrounds/carrot.png'},
    { word: 'Arbūzas', Enword: 'Watermelon', image: 'assets/images/backgrounds/watermelon.png'},
    { word: 'Bananas', Enword: 'Banana', image: 'assets/images/backgrounds/banana.png'},
    { word: 'Braškė', Enword: 'Stawberry', image: 'assets/images/backgrounds/strawberry.png'},
    { word: 'Mergaitė', Enword: 'Girl', image: 'assets/images/backgrounds/girl.png'},
    { word: 'Berniukas', Enword: 'Boy', image: 'assets/images/backgrounds/boy.png'},
    { word: 'Ananasas', Enword: 'Pineapple', image: 'assets/images/backgrounds/pineapple.png'},
    { word: 'Laikrodis', Enword: 'Clock', image: 'assets/images/backgrounds/clock.png'},
    { word: 'Vyšnia', Enword: 'Cherry', image: 'assets/images/backgrounds/cherry.png'}
  ];

  constructor(public navCtrl: NavController) {
  }

  public wordClick(event, wordObj) {
    this.navCtrl.push(WordFormPage, wordObj);
  }
}
