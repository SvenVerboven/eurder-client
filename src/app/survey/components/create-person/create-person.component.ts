import {ChangeDetectionStrategy, Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePersonComponent {
  @Output() savePersonRequested = new EventEmitter<Person>();
  labelName = 'Geef je naam in';
  labelButton = 'Bevestig';
  errorMessageName = 'Naam is verplicht';
  personForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.personForm = fb.group(
      {
        name: ['', [Validators.required]],
      },
      {
        updateOn: 'submit'
      }
    );
  }

  savePerson(): void {
    this.personForm.get('name')?.markAsDirty();
    if (this.personForm.valid) {
      this.savePersonRequested.emit(this.personForm.value);
    }
  }
}
