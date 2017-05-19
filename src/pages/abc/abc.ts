import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { aPage } from '../abc/raides/a/a';
import { bPage } from '../abc/raides/b/b';
import { cPage } from '../abc/raides/c/c';
import { dPage } from '../abc/raides/d/d';
import { ePage } from '../abc/raides/e/e';
import { fPage } from '../abc/raides/f/f';
import { gPage } from '../abc/raides/g/g';
import { hPage } from '../abc/raides/h/h';
import { iPage } from '../abc/raides/i/i';
import { jPage } from '../abc/raides/j/j';
import { kPage } from '../abc/raides/k/k';
import { lPage } from '../abc/raides/l/l';
import { mPage } from '../abc/raides/m/m';
import { nPage } from '../abc/raides/n/n';
import { oPage } from '../abc/raides/o/o';
import { pPage } from '../abc/raides/p/p';
import { qPage } from '../abc/raides/q/q';
import { rPage } from '../abc/raides/r/r';
import { sPage } from '../abc/raides/s/s';
import { tPage } from '../abc/raides/t/t';
import { uPage } from '../abc/raides/u/u';
import { vPage } from '../abc/raides/v/v';
import { wPage } from '../abc/raides/w/w';
import { xPage } from '../abc/raides/x/x';
import { yPage } from '../abc/raides/y/y';
import { zPage } from '../abc/raides/z/z';


@Component({
  selector: 'page-abc',
  templateUrl: 'abc.html'
})
export class abcPage {

  constructor(public navCtrl: NavController) {
    console.log('ABC');
  }

  public A_Click(event) {
    this.navCtrl.push(aPage);
  }
  public B_Click(event) {
    this.navCtrl.push(bPage);
  }
  public C_Click(event) {
    this.navCtrl.push(cPage);
  }
  public D_Click(event) {
    this.navCtrl.push(dPage);
  }
  public E_Click(event) {
    this.navCtrl.push(ePage);
  }
  public F_Click(event) {
    this.navCtrl.push(fPage);
  }
  public G_Click(event) {
    this.navCtrl.push(gPage);
  }
  public H_Click(event) {
    this.navCtrl.push(hPage);
  }
  public I_Click(event) {
    this.navCtrl.push(iPage);
  }
  public J_Click(event) {
    this.navCtrl.push(jPage);
  }
  public K_Click(event) {
    this.navCtrl.push(kPage);
  }
  public L_Click(event) {
    this.navCtrl.push(lPage);
  }
  public M_Click(event) {
    this.navCtrl.push(mPage);
  }
  public N_Click(event) {
    this.navCtrl.push(nPage);
  }
  public O_Click(event) {
    this.navCtrl.push(oPage);
  }
  public P_Click(event) {
    this.navCtrl.push(pPage);
  }
  public Q_Click(event) {
    this.navCtrl.push(qPage);
  }
  public R_Click(event) {
    this.navCtrl.push(rPage);
  }
  public S_Click(event) {
    this.navCtrl.push(sPage);
  }
  public T_Click(event) {
    this.navCtrl.push(tPage);
  }
  public U_Click(event) {
    this.navCtrl.push(uPage);
  }
  public V_Click(event) {
    this.navCtrl.push(vPage);
  }
  public W_Click(event) {
    this.navCtrl.push(wPage);
  }
  public X_Click(event) {
    this.navCtrl.push(xPage);
  }
  public Y_Click(event) {
    this.navCtrl.push(yPage);
  }
  public Z_Click(event) {
    this.navCtrl.push(zPage);
  }
}
