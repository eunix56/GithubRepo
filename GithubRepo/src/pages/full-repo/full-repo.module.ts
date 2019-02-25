import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullRepoPage } from './full-repo';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    FullRepoPage,
  ],
  imports: [
    IonicPageModule.forChild(FullRepoPage),
    ComponentsModule
  ],
})
export class FullRepoPageModule {}
