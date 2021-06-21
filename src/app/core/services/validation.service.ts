import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  
  wordsAmountValidation(amount :number) :(control :FormControl) => ValidationErrors | null {
    return (control :FormControl) =>
    {
       if(!control) return null;
       if(!control.value) return null;
       let currenValue: string = control.value;
       let valuesAsArray = currenValue.trim().split(' ').filter(x => x);

       if(valuesAsArray.length >= amount) return null;
       return {
          'wordsAmount': {
           currentAmount: valuesAsArray.length,
           wantedAmount: amount
             }
          }
   }
 }

  charAmountValidation(amount: number): (control :FormControl)  => ValidationErrors | null {
    return (control: FormControl) => {
        if(!control) return null;
        if(!control.value) return null;
        let currentCharAmount :number  = control.value.trim().split('').filter((word :string) => word != ' ').length;
        if (currentCharAmount >= amount) return null;
        return {
            'charAmount': {
             currChars: currentCharAmount,
             wantedAmount: amount
            }
        }
    }
  }
}
