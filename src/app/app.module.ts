import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeniuPage } from '../pages/meniu/meniu';
import { abcPage } from '../pages/abc/abc';
import { uzduotysPage } from '../pages/uzduotys/uzduotys';
import { zodziaiPage } from '../pages/zodziai/zodziai';
import { aPage } from '../pages/abc/raides/a/a';
import { bPage } from '../pages/abc/raides/b/b';
import { cPage } from '../pages/abc/raides/c/c';
import { dPage } from '../pages/abc/raides/d/d';
import { ePage } from '../pages/abc/raides/e/e';
import { fPage } from '../pages/abc/raides/f/f';
import { gPage } from '../pages/abc/raides/g/g';
import { hPage } from '../pages/abc/raides/h/h';
import { iPage } from '../pages/abc/raides/i/i';
import { jPage } from '../pages/abc/raides/j/j';
import { kPage } from '../pages/abc/raides/k/k';
import { lPage } from '../pages/abc/raides/l/l';
import { mPage } from '../pages/abc/raides/m/m';
import { nPage } from '../pages/abc/raides/n/n';
import { oPage } from '../pages/abc/raides/o/o';
import { pPage } from '../pages/abc/raides/p/p';
import { qPage } from '../pages/abc/raides/q/q';
import { rPage } from '../pages/abc/raides/r/r';
import { sPage } from '../pages/abc/raides/s/s';
import { tPage } from '../pages/abc/raides/t/t';
import { uPage } from '../pages/abc/raides/u/u';
import { vPage } from '../pages/abc/raides/v/v';
import { wPage } from '../pages/abc/raides/w/w';
import { xPage } from '../pages/abc/raides/x/x';
import { yPage } from '../pages/abc/raides/y/y';
import { zPage } from '../pages/abc/raides/z/z';
import { numberPage } from '../pages/zodziai/number/number';
import { colourPage } from '../pages/zodziai/colour/colour';
import { MonthMeniuPage } from '../pages/zodziai/month/month';
import { otherPage } from '../pages/zodziai/other/other';
import { WordFormPage } from '../pages/zodziai/other/wordForm/wordForm';
import { onePage } from '../pages/zodziai/number/one/one';
import { twoPage } from '../pages/zodziai/number/two/two';
import { threePage } from '../pages/zodziai/number/three/three';
import { fourPage } from '../pages/zodziai/number/four/four';
import { fivePage } from '../pages/zodziai/number/five/five';
import { sixPage } from '../pages/zodziai/number/six/six';
import { sevenPage } from '../pages/zodziai/number/seven/seven';
import { eightPage } from '../pages/zodziai/number/eight/eight';
import { ninePage } from '../pages/zodziai/number/nine/nine';
import { zeroPage } from '../pages/zodziai/number/zero/zero';
import { sausisPage } from '../pages/zodziai/month/sausis/sausis';
import { vasarisPage } from '../pages/zodziai/month/vasaris/vasaris';
import { kovasPage } from '../pages/zodziai/month/kovas/kovas';
import { balandisPage } from '../pages/zodziai/month/balandis/balandis';
import { geguzePage } from '../pages/zodziai/month/geguze/geguze';
import { birzelisPage } from '../pages/zodziai/month/birzelis/birzelis';
import { liepaPage } from '../pages/zodziai/month/liepa/liepa';
import { rugpjutisPage } from '../pages/zodziai/month/rugpjutis/rugpjutis';
import { rugsejisPage } from '../pages/zodziai/month/rugsejis/rugsejis';
import { spalisPage } from '../pages/zodziai/month/spalis/spalis';
import { lapkritisPage } from '../pages/zodziai/month/lapkritis/lapkritis';
import { gruodisPage } from '../pages/zodziai/month/gruodis/gruodis';
import { blackPage } from '../pages/zodziai/colour/black/black';
import { bluePage } from '../pages/zodziai/colour/blue/blue';
import { brownPage } from '../pages/zodziai/colour/brown/brown';
import { grayPage } from '../pages/zodziai/colour/gray/gray';
import { greenPage } from '../pages/zodziai/colour/green/green';
import { orangePage } from '../pages/zodziai/colour/orange/orange';
import { pinkPage } from '../pages/zodziai/colour/pink/pink';
import { purplePage } from '../pages/zodziai/colour/purple/purple';
import { redPage } from '../pages/zodziai/colour/red/red';
import { whitePage } from '../pages/zodziai/colour/white/white';
import { yellowPage } from '../pages/zodziai/colour/yellow/yellow';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeniuPage,
    abcPage,
    uzduotysPage,
    zodziaiPage,
    aPage, bPage, cPage, dPage, ePage,fPage,gPage,hPage,iPage,jPage,kPage, lPage,mPage,nPage,oPage,pPage,qPage,rPage,sPage,tPage,uPage,
    vPage,wPage,xPage,wPage,zPage,
    numberPage, colourPage, MonthMeniuPage, otherPage, WordFormPage,
    onePage, twoPage, threePage, fourPage, fivePage, sixPage, sevenPage, eightPage, ninePage, zeroPage,
    sausisPage, vasarisPage, kovasPage, balandisPage, geguzePage, birzelisPage, liepaPage, rugpjutisPage, rugsejisPage,spalisPage,
    lapkritisPage, gruodisPage, blackPage, bluePage, brownPage, grayPage, greenPage, orangePage, pinkPage, purplePage, redPage,
    whitePage, yellowPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeniuPage,
    abcPage,
    uzduotysPage,
    zodziaiPage,
    aPage, bPage, cPage, dPage, ePage,fPage,gPage,hPage,iPage,jPage,kPage, lPage,mPage,nPage,oPage,pPage,qPage,rPage,sPage,tPage,uPage,
    vPage,wPage,xPage,wPage,zPage,
    numberPage, colourPage, MonthMeniuPage, otherPage, WordFormPage,
    onePage, twoPage, threePage, fourPage, fivePage, sixPage, sevenPage, eightPage, ninePage, zeroPage,
    sausisPage, vasarisPage, kovasPage, balandisPage, geguzePage, birzelisPage, liepaPage, rugpjutisPage, rugsejisPage,spalisPage,
    lapkritisPage, gruodisPage, blackPage, bluePage, brownPage, grayPage, greenPage, orangePage, pinkPage, purplePage, redPage,
    whitePage, yellowPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
