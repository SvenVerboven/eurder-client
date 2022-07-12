import {ChangeDetectionStrategy, Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '@angular/cli/utilities/package-json';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePersonComponent {
  labelName = 'Geef je naam in';
  labelButton = 'Bevestig';
  errorMessageName = 'Naam is verplicht';
  personForm: FormGroup;
  @Output() savePersonRequested = new EventEmitter<Person>();

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
    console.log(`Clicked on submit`);
    if (this.personForm.valid) {
      this.savePersonRequested?.emit(this.personForm.value);
      console.log('the form is valid');
      return;
    }
    console.log('the form is invalid');
  }
}
