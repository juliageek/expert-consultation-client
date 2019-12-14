import { NgModule } from '@angular/core';
// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
// containers
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromGuards from './guards';
import { UsersViewComponent } from './components/users-view/users-view.component';

@NgModule({
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  declarations: [...fromContainers.components, ...fromComponents.components, UsersViewComponent],
  providers: [...fromGuards.guards]
})
export class UsersModule {}
