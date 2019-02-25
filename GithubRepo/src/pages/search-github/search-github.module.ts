import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module'
import { SearchGithubPage } from './search-github';

@NgModule({
  declarations: [
    SearchGithubPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchGithubPage),
    ComponentsModule
  ],
})
export class SearchGithubPageModule {}
