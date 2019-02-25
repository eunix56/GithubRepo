import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { SearchResultsComponent } from './search-results/search-results.component';
import { FullRepoComponent } from './full-repo/full-repo.component';
@NgModule({
	declarations: [SearchResultsComponent,
    FullRepoComponent],
	imports: [
		IonicModule
	],
	exports: [SearchResultsComponent,
    FullRepoComponent]
})
export class ComponentsModule {}
