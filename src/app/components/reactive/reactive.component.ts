import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public formReactive: FormGroup;

  constructor(private builder: FormBuilder, private validators: ValidatorsService) { 
    this.buildForm();
    this.setValues();
    this.listenerChanges();
  }

  ngOnInit(): void {
  }

  public get validFirstName() {
    return this.formReactive.get('firstName').invalid && this.formReactive.get('firstName').touched
  }

  public get validLastName() {
    return this.formReactive.get('lastName').invalid && this.formReactive.get('lastName').touched
  }


  public get validEmail() {
    return this.formReactive.get('email').invalid && this.formReactive.get('email').touched
  }  
  
  public get validCity() {
    return this.formReactive.get('address.city').invalid && this.formReactive.get('address.city').touched
  }

  public get validSector() {
    return this.formReactive.get('address.sector').invalid && this.formReactive.get('address.sector').touched
  }

  public get passOne() {
    return this.formReactive.get('pass1').invalid && this.formReactive.get('pass1').touched
  }

  public get hobbies() {
    return this.formReactive.get('hobbies') as FormArray;
  }

  public get userNotValid() {
    return this.formReactive.get('user').invalid && this.formReactive.get('user').touched
  }


  public get passwordTowInvalid() {
    const pass1 = this.formReactive.get('pass1').value;
    const pass2 = this.formReactive.get('pass2').value;
    return  (pass1 === pass2) ? false : true;
  }

  public addFormControl() {
    this.hobbies.push(this.builder.control(''));
  }

  public removeControl(i) { 
    this.hobbies.removeAt(i);
  }

  private listenerChanges() {
    this.formReactive.valueChanges.subscribe( value => {
      console.log('[value changes]', value);
    })
    this.formReactive.statusChanges.subscribe( status => {
      console.log('[status changes]', status);
    })
  }

  private buildForm(): void {
    this.formReactive = this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5), this.validators.dontLastNameArevalo], ],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1: ['',Validators.required],
      pass2: ['',Validators.required],
      user: ['',Validators.required, this.validators.userExisted],
      address: this.builder.group({
        city: ['', Validators.required],
        sector: ['', Validators.required]
      }),
      hobbies: this.builder.array([
      ])
    }, {
      validators: this.validators.passwordEquals('pass1', 'pass2')
    });
  }

  private setValues() {
    // this.formReactive.setValue({
    this.formReactive.reset({
      firstName: "Andres",
      lastName: "Arevalo",
      email: "andres@anadres.com",
      pass1: '123',
      pass2: '123',
      address: {
        city: "Duitama",
        sector: "Progreso"
      }
    })
  }

  public save() {
    const isValid = this.formReactive.valid;
    if (!isValid) {
      Object.values(this.formReactive.controls).forEach(control => {
        control.markAsTouched();
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => { control.markAsTouched()})
        }
      });
    } else {
      this.formReactive.reset();
    }
  }

}
