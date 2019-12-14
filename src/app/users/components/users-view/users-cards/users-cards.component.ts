import { Component, Input, OnInit } from '@angular/core';
import { Filter, PageData, User } from '@app/core';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit {
  @Input() users: User[];
  @Input() pageData: PageData;
  @Input() filter: Filter;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
