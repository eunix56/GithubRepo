import { Component, Input  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { SearchGithubProvider } from '../../providers/search-github/search-github';
import { Repository, Owner } from '../../model/repository.interface';

/**
 * Generated class for the SearchGithubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'search-github',
  templateUrl: 'search-github.html',
})
export class SearchGithubPage {

  // searchControl: FormControl;
  @Input() repository: Repository;
  searchTerm :string;
  owner: Owner;
  repo: any;
  sort: string;
  repositories: any;
  searching: any = false;

  constructor(private github: SearchGithubProvider, private navCtrl: NavController, private navParams: NavParams) {

  }

  public getPageInfo(repo): void{
    this.navCtrl.push('FullRepoPage', {
      repo : repo
    })
  };

   getSortInfo(){
    this.github.getRepoSortInfo(this.searchTerm, this.sort).subscribe((data: Repository[]) => {this.repositories = data
    this.searching = false; });
    return this.repositories;
    this.searching = true;
    
   }

   readData <T> (xhrData: any[]) {
    try {
      var len = Object.keys(xhrData).length;
      var temp: Array < T > = [];
      for (var x = 0; x < len; x++) {
        //unwrap it and transfer it to an array -
        temp[temp.length] = xhrData[x]; //example only
      }
    } catch (e) {
      return [];
    }
    return temp;
  }
  
//   setFilteredData(ev: any) {
//     let val = ev.target.value;
//    if (val && val.trim !== ""){
//      this.searchTerm = val;
//   //    this.repositories = this.repositories.filter(function(repo){
//   //      return repo.name.toLowerCase().includes(val.toLowerCase());
//   //    })
//   // }
// }
//   }
  ionViewDidLoad() {
    
  }

}
