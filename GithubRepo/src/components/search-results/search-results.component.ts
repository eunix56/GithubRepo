import { Component, Input } from '@angular/core';
import { Repository } from '../../model/repository.interface';

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent {
  @Input() repository: Repository;

}
