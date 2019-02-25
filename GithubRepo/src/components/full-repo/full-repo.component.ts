import { Component,Input } from '@angular/core';
import { Repository } from '../../model/repository.interface'

/**
 * Generated class for the FullRepoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'full-repo',
  templateUrl: 'full-repo.component.html'
})
export class FullRepoComponent {
  @Input() repository: Repository;

  }


