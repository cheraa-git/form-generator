import { Pipe, PipeTransform } from '@angular/core'
import { InputData } from "../types"

@Pipe({
  name: 'inputType'
})
export class InputTypePipe implements PipeTransform {

  transform(formItem: InputData): InputData {
    return formItem
  }

}
