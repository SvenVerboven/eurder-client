import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePersonComponent {
  personForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.personForm = fb.group(
      {
        name: ['', [Validators.required]],
      }
    );
  }

  savePerson(): void {
    console.log(`Clicked on submit`);
    console.log(this.personForm.value);
    console.log(this.personForm.invalid);
  }
}
