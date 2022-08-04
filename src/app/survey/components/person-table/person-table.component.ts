import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonTableComponent {
  @Input() persons: Person[];
  @Output() onRefresh = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<Person>();
}
