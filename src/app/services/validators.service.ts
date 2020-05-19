import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public dontLastNameArevalo(control: FormControl): {[s:string]: boolean }{
    if (control.value?.toLowerCase() === 'acelas') {
      return { dontLastName: true }
    }
    return null;
  }

  public passwordEquals(pass1, pass2) {
    return (formGroup: FormGroup) => {
      const passOne = formGroup.controls[pass1];
      const passTow = formGroup.controls[pass2];

      if (passOne.value === passTow.value) {
       passTow.setErrors(null); 
      } else {
        passTow.setErrors({ noEqual: true })
      }
    }
  }

  public userExisted(control: FormControl): Promise<{[s:string]: boolean }> | Observable<{[s:string]: boolean }> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'andres98') {
          resolve({exits:true})
        } else {
          resolve(null)
        }
      }, 3500)
    })
  }
}
