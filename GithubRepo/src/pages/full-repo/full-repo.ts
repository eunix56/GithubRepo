import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullRepoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-repo',
  templateUrl: 'full-repo.html',
})
export class FullRepoPage {
  repos: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.repos = navParams.get('repo');
  }

  getFullResult(): void{
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullRepoPage');
    console.log(this.repos)
  }
  }


