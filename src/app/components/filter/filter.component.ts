import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOption } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }
  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOption>();

  statusList = [
    {
      description: 'Ativo', value: true
    },
    {
      description: 'Inativo', value: false
    },
  ]
  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  }

}
