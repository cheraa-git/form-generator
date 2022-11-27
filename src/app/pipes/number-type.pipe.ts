import { Pipe, PipeTransform } from '@angular/core'
import { NumberData } from "../types"

@Pipe({
  name: 'numberType'
})
export class NumberTypePipe implements PipeTransform {

  transform(formItem: NumberData): NumberData {
    return formItem
  }

}
