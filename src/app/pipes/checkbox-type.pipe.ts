import { Pipe, PipeTransform } from '@angular/core';
import { CheckboxData } from "../types"

@Pipe({
  name: 'checkboxType'
})
export class CheckboxTypePipe implements PipeTransform {

  transform(formItem: CheckboxData): CheckboxData {
    return formItem;
  }

}
