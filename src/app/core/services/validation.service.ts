import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  
  wordsAmountValidation(control :FormControl) :ValidationErrors | null {
    if(!control) return null;
    if(!control.value) return null;
    let wordsAmount = 10;
    let currenValue: string = control.value;
    let valuesAsArray = currenValue.trim().split(' ').filter(x => x);

    if(valuesAsArray.length >= wordsAmount)
    {
      return null;
    }
    return {
            'wordsAmount': {
            currentAmount: valuesAsArray.length,
            wantedAmount: wordsAmount
             }
          }
  }

  charAmountValidation(control :FormControl) :ValidationErrors | null {
    if(!control) return null;
    if(!control.value) return null;
    let charAmount = 30;
    let currentCharAmount :number  = control.value.trim().split('').filter((word :string) => word != ' ').length;
    if (currentCharAmount >= charAmount){
      return null;
    }
    return {
      'charAmount': {
        currChars: currentCharAmount,
        wantedAmount: charAmount
        }
      }
  }
}
