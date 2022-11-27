import { Pipe, PipeTransform } from '@angular/core'
import { SelectData } from "../types"

@Pipe({
  name: 'selectType'
})
export class SelectTypePipe implements PipeTransform {

  transform(formItem: SelectData): SelectData {
    return formItem as SelectData
  }

}
