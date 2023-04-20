import { Component, Injector } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentialsFormGroup!: FormGroup;
  private formBuilder!: FormBuilder;
  capitalLetter: boolean = false;
  hasNumber: boolean = false;
  caracterSpecial: boolean = false;
  onlyNumbers: boolean = false;
  constructor(private injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.setBuild();
  }

  setBuild() {
    this.credentialsFormGroup = this.formBuilder.group({
      phone: [null, [Validators.required, Validators.minLength(10)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  validatorPassword() {
    this.capitalLetter = this.password.value.match(/[A-Z]/) ? false : true;
    this.hasNumber = this.password.value.match(/\d/) ? false : true;
    this.caracterSpecial = this.password.value.match(/[!@#$%^&*.]/)
      ? false
      : true;
  }

  onOnlyNumbers() {
    this.onlyNumbers = this.phoneNumber.value.match(/[0-9]+/) ? false : true;

    const firstNumber: string = this.phoneNumber.value.charAt(0);

    if (firstNumber === '0' && this.phoneNumber.value.length === 1) {
      this.phoneNumber.setValue('09');
    }
    if (
      (firstNumber === '+' || firstNumber === '5') &&
      this.phoneNumber.value.length === 1
    ) {
      this.phoneNumber.setValue('+593');
    }
  }

  singIn() {}

  getValues() {
    const { phone, password } = this.credentialsFormGroup.getRawValue();

    let data: any = {
      phone: phone?.length > 0 ? phone : '',
      password: password?.length > 0 ? password : '',
    };

    return { ...data };
  }

  get phoneNumber() {
    return this.credentialsFormGroup.get('phone') as FormControl;
  }

  get password() {
    return this.credentialsFormGroup.get('password') as FormControl;
  }
}
