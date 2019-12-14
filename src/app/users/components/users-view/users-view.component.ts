import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter, PageData, User } from '@app/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {
  @Input() users: User[];
  @Input() pageData: PageData;
  @Input() filter: Filter;
  @Input() loading: boolean;
  @Input() activeView: string;
  @Output() filterChange: EventEmitter<Filter> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onFilterChange(event) {
    this.filterChange.emit(event);
  }
}
