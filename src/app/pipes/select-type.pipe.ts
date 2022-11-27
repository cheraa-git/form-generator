import { Pipe, PipeTransform } from '@angular/core'
import { FormItem, SelectData } from "../types"

@Pipe({
  name: 'setFormItemType'
})
export class SetFormItemTypePipe implements PipeTransform {

  transform(formItem: FormItem): SelectData {
    if (formItem.type === 'select') {
      return formItem as SelectData
    }
    return formItem
  }

}
